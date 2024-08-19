const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    const corsOptions = { origin: "http://localhost:8080" } // origem da conexão (frontend)
    app.use(bodyParser.json()) // requisições e respostas em json
    app.use(cors(corsOptions))
}