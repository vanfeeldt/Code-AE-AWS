const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/preciosAterizajeMex');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/aterrizajeMex', crearPrecio);

router.get('/aterrizajeMex', getPrecio);

router.put('/aterrizajeMex/:id', actualizarPrecio);

router.delete('/aterrizajeMex/:id', borrarPrecios);




module.exports = router;