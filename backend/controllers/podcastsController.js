const fs = require('fs').promises

module.exports = app => {
    const { existsOrError, notExistsOrError } = app.controllers.validation

    const save = (req, res, next) => {
        if (!req.files) res.status(400).send('Arquivos não informados!')
            
        const podcast = {
            ...req.body,
            audioPath: req.files.mediaFile[0].filename,
            thumbPath: req.files.imageFile[0].filename
        }

        if (req.params.id) podcast.id = req,params.id

        try {
            existsOrError(podcast.title, 'Título não informado')
            existsOrError(podcast.userId, 'Usuário não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        app.db('podcasts')
            .insert(podcast)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = async (req, res) => {
        app.db('podcasts')
            .join('users', 'podcasts.userId', '=', 'users.id')
            .select('podcasts.*', 'users.name as userName')
            .then(podcasts => res.status(200).json(podcasts))
            .catch(err => res.status(500).send(err))
    }

    const update = (req, res, next) => {
        if (!req.params.id) res.status(400).send('Por favor, informe um podcast!')

        const podcast = { ...req.body }
        const id = req.params.id

        try {
            existsOrError(podcast.title, 'Título não informado')
        } catch (err) {
            return res.status(400).send(err)
        }

        app.db('podcasts')
            .update(podcast)
            .where({ id })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Podcast não informado')

            const podcastFromDB = await app.db('podcasts')
                .select('thumbPath', 'audioPath')
                .where({ id: req.params.id }).first()
            
            await fs.unlink('../storage/podcasts/images/' + podcastFromDB.thumbPath)
            await fs.unlink('../storage/podcasts/medias/' + podcastFromDB.audioPath)

            const rowsDeleted = await app.db('podcasts')
                .where({ id: req.params.id }).del()
            existsOrError(rowsDeleted, 'Podcast não encontrado')

            res.status(204).send()
        } catch (err) {
            console.log(err)
            res.status(400).send(err)
        }
    }

    return { save, get, update, remove }
}