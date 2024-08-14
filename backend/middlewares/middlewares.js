const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    const corsOptions = { origin: "http://127.0.0.1:5500" } // origem da conexão (frontend)
    app.use(bodyParser.json()) // requisições e respostas em json
    app.use(cors(corsOptions))
}