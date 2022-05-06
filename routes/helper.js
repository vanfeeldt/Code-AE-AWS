const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');


const { getTramos, crearTramo, actualizarTramo, eliminarTramo, getHorarios, crearHorario, actualizarHorario, eliminarHoario, leerExcel
} = require('../controller/helper');


const { validarJWT } = require('../middleware/validar-jwt');

const router = Router();


router.get('/horario', getHorarios);

router.post('/horario', crearHorario);

router.put('/horario', actualizarHorario);

router.delete('/horario', eliminarHoario);

router.get('/tramo', getTramos);

router.post('/tramo', crearTramo);

router.put('/tramo', actualizarTramo);

router.delete('/tramo', eliminarTramo);

router.post("/excel", leerExcel);


module.exports = router;