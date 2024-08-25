const bcrypt = require('bcryptjs')
const fs = require('fs').promises
const { pathProfiles } = require('../config/global')

module.exports = app => {
    // funções úteis de validação de variáveis
    const { existsOrError, notExistsOrError, equalsOrError } = app.controllers.validation
    
    // função para aplicar codificação hash na senha antes de salvar no banco de dados
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    /*
        - função para deletar um arquivo
        - no caso está sendo usado para deletar a imagem de
        perfil antiga do usuário quando ele a troca para uma nova
    */
    const deleteFile = async path => {
        try {
            await fs.unlink(path)
        } catch (err) {
            throw err
        }
    }

    // função para salvar um usuário novo ou atualizar um já existente
    const save = async (req, res) => {
        const user = { ...req.body } // recebe o usuário pelo body

        // caso seja passado um id por parâmetro, quer dizer que é um usuário
        // já existente, então vamos atualizar
        if (req.params.id)
            user.id = req.params.id


        // testes de validação das informações
        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            // verificando se já existe o usuário no banco de dados
            const userFromDB = await app.db('users').where({ email: user.email }).first()
            if (!user.id) // caso seja um update de usuário, não é necessário entar aqui
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
        } catch (err) {
            return res.status(400).send(err)
        }

        // codifica a senha do usuário
        // e deleta o confirmPassword para não ser salvo no banco de dados
        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id) { // caso seja um update de usuário
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => {res.status(500).send(err)})
        } else { // caso seja um registro de novo usuário
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    // função para atualizar as informações do usuário
    const update = async (req, res, next) => {
        if (!req.params.id) res.status(400).send('Usuário não informado!')
        
        const id = req.params.id
        const user = { ...req.body }
        // caso ele não envie imagem de perfil
        const pictureFilename = req.file ? req.file.filename : null

        try {
            existsOrError(user.name, 'Nome de usuário não informado!')
        } catch (err) {
            return res.status(400).send(err)
        }

        // caso ele envie imagem de perfil
        // vamos salvar o nome do arquivo no banco de dados também
        if (pictureFilename) {
            // procurar o nome da imagem atual e deletar ela do armazenamento
            const oldProfile = await app.db('users').select('profilePath').where({ id }).first()
            if (oldProfile !== 'default.jpg')
                deleteFile(pathProfiles + oldProfile.profilePath)

            // salvar as novas informações no database
            app.db('users')
                .update({ name: user.name, profilePath: pictureFilename })
                .where({ id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            // caso contrário, vamos salvar apenas o nome
            app.db('users')
                .update({ name: user.name })
                .where({ id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    // pega todos os usuários
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'profilePath')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    // pega um usuário por id
    const getById = (req, res) => {
        const id = req.params.id
        app.db('users')
            .select('id', 'name', 'email', 'profilePath')
            .where({ id }).first()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById, update }
}