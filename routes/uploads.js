/*

    ruta: api/uploads/
*/
const { Router } = require('express');
const expressFileUpload = require('express-fileupload');


const { validarJWT } = require('../middleware/validar-jwt');
const { fileUpload, retornaImagen, excelUpload, excelDowload } = require('../controller/uploads');

const router = Router();

router.use(expressFileUpload());

router.put('/:tipo/:id', validarJWT, fileUpload);

router.get('/:tipo/:foto', retornaImagen);

router.post('/excel', excelUpload);

router.get('/excel/:archivo', excelDowload);



module.exports = router;