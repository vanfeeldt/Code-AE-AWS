const { Router } = require('express');

const { crearDivisa } = require('../controller/divisas');


const router = Router();

router.post('/', crearDivisa);


module.exports = router;


