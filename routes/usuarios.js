'use stritct'

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campo');

const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuarios } = require('../controller/usuarios');
const { validarJWT } = require('../middleware/validar-jwt');



const router = Router();

router.get('/',
    //validarJWT, 
    getUsuarios);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos,
],
    crearUsuario
);

router.put('/:id',
    [
        validarJWT,
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        //check('rol', 'El rol es obligatorio').not().isEmpty(),
        validarCampos,
    ], actualizarUsuario
);

router.delete("/:id", validarJWT, borrarUsuarios);


module.exports = router;