const { Router } = require('express');
const { check } = require('express-validator');

const { validaJWT } = require('../middleware/validar-jwt');

const { leerExcel, getdetOperadores, creardetOperadores, actualizardetOperadores, eliminardetOperadores } = require('../controller/detOperadores');


const router = Router();

router.get("/", getdetOperadores);

router.post("/", creardetOperadores);

router.post("/excel", leerExcel);

router.put("/:id", actualizardetOperadores);

router.delete("/:id", eliminardetOperadores);


module.exports = router;