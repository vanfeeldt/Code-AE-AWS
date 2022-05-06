const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { getPrecio, crearPrecio, actualizarPrecio, borrarPrecios } = require('../controller/precioCombustible');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/combustible', crearPrecio);

router.get('/combustible', getPrecio);

router.put('/combustible/:id', actualizarPrecio);

router.delete('/combustible/:id', borrarPrecios);




module.exports = router;