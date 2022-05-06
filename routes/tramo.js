const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');


const { getSumary, getSumaryTotal } = require('../controller/sumary');
const { validarJWT } = require('../middleware/validar-jwt');

const router = Router();


router.get('/', validarJWT, getSumary);

router.get('/total', validarJWT, getSumaryTotal);


module.exports = router;