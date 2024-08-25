const multer = require('multer')
const path = require('path')
const { pathProfiles } = require('../config/global')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // se for um upload de imagem de perfil, o caminho é /profiles/imgs
        if (file.fieldname === 'profilePicture') {
            cb(null, pathProfiles)
        // caso não haja imagem alguma
        } else {
            cb(null, false)
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
// 10MB para a thumbnail
const limits = (req, file, cb) => {
    const mb = 1024 * 1024 // 1024bytes * 1024bytes = 1024bytes * 1kb = 1mb
    if (file.fieldname === 'profilePicture') cb(null, { fileSize: 10 * mb })
    else cb(new Error('Campo de arquivo não reconhecido.'), false)
}

// inicializamos nosso objeto multer
const uploadProfilePicture = multer({ storage, fileFilter, limits })

// exportamos para as rotas
module.exports = { uploadProfilePicture }