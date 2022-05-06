const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT } = require('../middleware/validar-jwt');
const { getDestinosEfr, getDestinosGgl, getDestinosLfr, getDestinosLrc, getDestinosUyr } = require('../controller/destinos');


const router = Router();

router.get('/xaefr', getDestinosEfr);

router.get('/xaggl', getDestinosGgl);

router.get('/xalfr', getDestinosLfr);

router.get('/xalrc', getDestinosLrc);

router.get('/xauyr', getDestinosUyr);




module.exports = router;