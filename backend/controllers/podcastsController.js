// const path = require('path')

module.exports = app => {
    const { existsOrError, notExistsOrError } = app.controllers.validation

    const save = (req, res, next) => {
        if (!req.files) res.status(400).send('Arquivos não informados!')

        const podcast = {
            ...req.body,
            audioPath: req.files.mediaFile[0].filename,
            thumbPath: req.files.imageFile[0].filename
        }

        try {
            existsOrError(podcast.title, 'Título não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        app.db('podcasts')
            .insert(podcast)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('podcasts')
            .select('title', 'description', 'created_at', 'thumbPath')
            .then(podcasts => res.json(podcasts))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}