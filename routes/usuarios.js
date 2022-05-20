const { Router } = require('express')
const { usuariosPut, usuariosPost, usuariosDelete, usuariosGet } = require('../controllers/usuariosController')
const router = Router()

//Aqui debajo van todos los links y cada endpoint tiene un "router."

router.get('/', usuariosGet)

router.put('/:id', usuariosPut)

router.post('/', usuariosPost)

router.delete('/', usuariosDelete)

module.exports = router;