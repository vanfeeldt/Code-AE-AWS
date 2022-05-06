'use stritct'

const { Router } = require('express');
const { login, googleSignIn, renewToken } = require('../controller/auth');
const { check } = require('express-validator');
const { validarJWT } = require('../middleware/validar-jwt');


const { validarCampos } = require('../middleware/validar-campo');

const router = Router();

router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    login
);

router.post('/google',
    [
        check('token', 'El token de Google es obligatorio').not().isEmpty(),
        validarCampos,
    ],
    googleSignIn
);

router.get('/renew',
    validarJWT,
    renewToken
)


module.exports = router;