const app = require('express')()
const consign = require('consign')
const db = require('./config/database')

const PORT = 8888
app.db = db

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