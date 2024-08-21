const { authSecret } = require('../.env')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) return res.status(400).send('Informe usuário e senha!')

        const user = await app.db('users')
            .where({ email: req.body.email }).first()

        if (!user) return res.status(400).send('Usuário ou senha inválidos!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('Usuário ou senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            profilePath: 'http://localhost:8888/images/profile/' + user.profilePath,
            iat: now,
            exp: now + (60 * 60 * 24 * 2)
        }

        res.json({
            ...payload,
            token: jwt.sign(payload, authSecret)
        })
    }

    const validateToken = async (res, req) => {
        const userData = req.body || null
        try {
            if (userData) {
                const token = jwt.verify(userData.token, authSecret)
                if (new Date(token.exp * 1000) > new Date())
                    return res.send(true)
            }
        } catch (err) {
            // problema com token
        }

        res.send(false)
    }

    return { signin, validateToken }
}