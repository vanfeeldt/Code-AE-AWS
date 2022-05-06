const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');
const { leerExcel, getXaefr, getXaggl, getXalfr, getXalrc, getXauyr } = require('../controller/bitacoraVuelo');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.post('/excel', leerExcel);

router.get('/efr',
    //validarJWT,
    getXaefr);

router.get('/ggl',
    //validarJWT,
    getXaggl);

router.get('/lfr',
    //validarJWT,
    getXalfr);

router.get('/lrc',
    //validarJWT,
    getXalrc);

router.get('/uyr',
    //validarJWT,
    getXauyr);

module.exports = router;