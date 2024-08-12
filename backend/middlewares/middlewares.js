const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    const corsOptions = { origin: "http://localhost:8080" }
    app.use(bodyParser.json())
    app.use(cors(corsOptions))
}