const { response, request } = require("express")


const usuariosGet = (req, res = response)=> {

    const {q, nombre, apikey} = req.query;

    res.json({
        msg: 'get API - controlador',
        query
    })

}

const usuariosPut = (req, res = response)=> {

    const {id} = req.params;

    res.json({
        msg: 'put API - controlador'
    })

}

const usuariosPost = (req, res = response)=> {
    

    res.json({
        msg: 'post API - controlador',
        body
    })

}

const usuariosDelete = (req, res = response)=> {

    res.json({
        msg: 'delete API - controlador'
    })

}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}