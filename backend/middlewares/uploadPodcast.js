const multer = require('multer')
const path = require('path')

// caminho de armazenamento de mídias
const mediaDir = '../storage/podcasts/medias/'
const thumbDir = '../storage/podcasts/images/'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // se for o arquivo de áudio o caminho é /podcasts/medias/
        if (file.fieldname === 'podcastMedia') {
            cb(null, mediaDir)
        
        // se for o arquivo de imagem o caminho é /podcasts/images/
        } else if (file.fieldname === 'thumbnailImage') {
            cb(null, thumbDir)
        
        // retorna um erro caso não seja nenhum desses casos
        } else {
            cb(new Error('Campo de arquivo não reconhecido.'), false)
        }
    },
    filename: (req, file, cb) => {
        // o nome é a junção da data de agora em ms e um número aleatório
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname))
    }
})

// filtragem do tipo de arquivo
const fileFilter = (req, file, cb) => {
    const fileTypes = { // tipos permitidos
        'audio/mpeg': 'audio',
        'audio/wav': 'audio',
        'image/jpeg': 'image',
        'image/png': 'image'
    }

    if (fileTypes[file.mimetype]) {
        cb(null, true)
    } else {
        cb(new Error('Tipo de arquivo não permitido.'), false)
    }
}

// limite de tamanho
// 300MB para arquivos de áudio
// 10MB para a thumbnail
const limits = (req, file, cb) => {
    const mb = 1024 * 1024 // 1024bytes * 1024bytes = 1024bytes * 1kb = 1mb
    if (file.fieldname === 'thumbnailImage') cb(null, { fileSize: 10 * mb })
    else if (file.fieldname === 'podcastMedia') cb(null, { fileSize: 300 * mb })
    else cb(new Error('Campo de arquivo não reconhecido'), false)
}

// inicializamos nosso objeto multer
const uploadPodcast = multer({ storage, fileFilter, limits })

// exportamos para as rotas
module.exports = { uploadPodcast }