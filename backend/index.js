const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/database')

const PORT = 8888
app.db = db

app.use('/images/profile', express.static('../storage/profiles/imgs/'))

consign()
    .include('./middlewares/passport.js')
    .then('./middlewares/middlewares.js')
    .then('./controllers/validation.js')
    .then('./controllers')
    .then('./routes/routes.js')
    .into(app)

app.listen(PORT, () => {
    console.log(`backend listenning on http://localhost:${PORT}`)
})