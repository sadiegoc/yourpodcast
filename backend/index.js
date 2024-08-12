const app = require('express')()
const consign = require('consign')
const cors = require('cors')
const db = require('./config/database')

const PORT = 8888
app.db = db

consign()
    .then('./middlewares/middlewares.js')
    .then('./config')
    .then('./controllers')
    .then('./routes/routes.js')
    .into(app)

app.listen(PORT, () => {
    console.log(`backend listenning on http://localhost:${PORT}`)
})