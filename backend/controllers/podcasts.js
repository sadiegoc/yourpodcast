const multer = require('multer')
const path = require('path')
const fs = require('fs')

module.exports = app => {
    const { existsOrError, notExistsOrError } = app.controllers.validation
    const mediaDir = '../storage/podcasts/media'
    const imageDir = '../storage/podcasts/image'

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            if (file.filename === 'mediaFile') {
                cb(null, mediaDir)
            } else if (file.filename === 'imageFile') {
                cb(null, imageDir)
            } else {
                cb(new Error('Campo de arquivo não reconhecido'))
            }
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
        }
    })

    const upload = multer({ storage })

    const save = (req, res) => {
        // const podcast = { ...req.body }
        // if (req.params.id) podcast.id = req.params.id

        if (!fs.existsSync(mediaDir)) fs.mkdirSync(mediaDir)
        if (!fs.existsSync(imageDir)) fs.mkdirSync(imageDir)

        upload.fields([{ name: 'mediaFile', maxCount: 1 }, { name: 'imageFile', maxCount: 1 }])(req, res, (err) => {
            if (err) return res.status(400).send(err)
            
            console.log(req.files)

            res.status(200).send()
        })

        // try {
        //     existsOrError(podcast.title, 'Título não informado')
        // } catch (err) {
        //     return res.status(400).send(err)
        // }

        // if (podcast.id) {
        //     app.db('podcasts')
        //         .update(podcast)
        //         .where({ id: podcast.id })
        //         .then(_ => res.status(204).send())
        //         .catch(err => res.status(500).send(err))
        // } else {
        //     app.db('podcasts')
        //         .insert(podcast)
        //         .then(_ => res.status(204).send())
        //         .catch(err => res.status(500).send())
        // }
    }

    return { save }
}