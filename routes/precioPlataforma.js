const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioPlataforma');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/plataforma', crearPrecio);

router.get('/plataforma', getPrecio);

router.put('/plataforma/:id', actualizarPrecio);

router.delete('/plataforma/:id', borrarPrecios);




module.exports = router;