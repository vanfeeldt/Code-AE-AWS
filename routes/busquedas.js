/*

    ruta: api/todo/
*/
const { Router } = require('express');
const { validarJWT } = require('../middleware/validar-jwt');

const { getTodo, getDocumentosColeccion, getVuelo, getVuelosColeccion } = require('../controller/busquedas');


const router = Router();


router.get('/:busqueda', validarJWT, getTodo);

router.get('vuelo/:busqueda', validarJWT, getVuelo);

router.get('/coleccion/:tabla/:busqueda', validarJWT, getDocumentosColeccion);

router.get('/coleccionVuelos/:tabla/:busqueda', validarJWT, getVuelosColeccion);



module.exports = router;