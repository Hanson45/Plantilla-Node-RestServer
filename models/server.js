const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas
        this.routes()
    }

    middlewares() {
        //CORS
        app.use(cors())

        // lectura y parseo del body
        this.app.use(express.json());

        // Directorio de carpeta púclic
        this.app.use(express.static('public'))
    }



    routes(){

        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }

    listen(){

        this.app.listen(process.env.PORT, ()=>{
            console.log('Servidor corriendo en puerto ', this.port)
        })    
    }
}

module.exports = Server;