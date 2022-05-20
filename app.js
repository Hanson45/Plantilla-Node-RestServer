require('dotenv').config()
const Server = require('./models/server')

// Ejecucion del Servidor
const server = new Server();
server.listen()