const multer = require('multer')
const path = require('path')

// caminho de armazenamento de mídias
const mediaDir = './storage/podcasts/medias/'
const imageDir = './storage/podcasts/images/'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // se for o arquivo de áudio o caminho é medias/
        if (file.fieldname === 'mediaFile') {
            cb(null, mediaDir)
        // se for o arquivo de imagem o caminho é images/
        } else if (file.fieldname === 'imageFile') {
            cb(null, imageDir)
        } else {
            // retorna um erro caso não seja nenhum desses casos
            cb(new Error('Campo de arquivo não reconhecido'))
        }
    },
    filename: (req, file, cb) => {
        // o nome é a junção da data de agora em ms e um número aleatório
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname))
    }
})

// inicializamos nosso objeto multer
const upload = multer({ storage })

// exportamos para as rotas
module.exports = { upload }