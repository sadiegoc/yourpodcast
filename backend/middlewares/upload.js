const multer = require('multer')
const path = require('path')

const mediaDir = './storage/podcasts/medias/'
const imageDir = './storage/podcasts/images/'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === 'mediaFile') {
            cb(null, mediaDir)
        } else if (file.fieldname === 'imageFile') {
            cb(null, imageDir)
        } else {
            cb(new Error('Campo de arquivo não reconhecido'))
        }
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage })

module.exports = { upload }