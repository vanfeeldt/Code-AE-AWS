const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');

const { getCombustible, crearCombustible, actualizarCombustible, borrarCombustible } = require('../controller/combustible');
const { validaJWT } = require('../middleware/validar-jwt');



const router = Router();

router.get('/', getCombustible);

router.post('/', [
    check('aeropuerto', 'El aeropuerto es obligatorio').not().isEmpty(),
    check('combustible', 'El combustible es obligatorio').not().isEmpty(),
    check('nombreAeropuerto', 'El nombre del Aeropuerto es obligatorio').not().isEmpty(),
    validarCampos,
],
    crearCombustible
);

router.put('/:id', [
    check('aeropuerto', 'El aeropuerto es obligatorio').not().isEmpty(),
    check('nombreAeropuerto', 'El nombre del Aeropuerto es obligatorio').not().isEmpty(),
    validarCampos,
], actualizarCombustible
);

router.delete("/:id", borrarCombustible);


module.exports = router;