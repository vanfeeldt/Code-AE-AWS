const { response } = require('express');
const bcrypt = require('bcryptjs');


const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');



/*const getUsuarios = async (req, res) => {

    //const usuarios = await Usuario.find();
    const usuarios = await Usuario.find({}, 'nombre email role google img');

    res.status(200).json({
        ok: true,
        usuarios
    });
}*/

const getUsuarios = async (req, res) => {

    const desde = Number(req.query.desde) || 0;

    const [usuarios, total] = await Promise.all([
        Usuario
            .find({}, 'nombre email role google img')
            .skip(desde)
            .limit(5),

        Usuario.countDocuments()
    ]);


    res.json({
        ok: true,
        usuarios,
        total
    });

}


const crearUsuario = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existeEmail = await Usuario.findOne({ email });

        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya esta registrado'
            });
        }


        const usuario = new Usuario(req.body);

        //encriptar
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);


        await usuario.save();


        //Generar token
        const token = await generarJWT(usuario.id);


        res.status(201).json({
            ok: true,
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear usuario'
        });
    }

}


const actualizarUsuario = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        //Actualizacion
        const { password, google, email, ...campos } = req.body; //destructuracion para eliminar campo de password y google


        if (usuarioDB.email !== email) {
            const existeEmail = await Usuario.findOne({ email });
            if (existeEmail) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ya existe un usuario con ese email'
                });
            }

        }

        campos.email = email;

        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, { new: true });//new para regresar el actualizado
        res.status(200).json({
            ok: true,
            usuarioActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar usuario'
        });

    }

}

const borrarUsuarios = async (req, res = response) => {

    const uid = req.params.id;

    try {

        const usuarioDB = await Usuario.findById(uid);

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario con ese id'
            });
        }

        await Usuario.findByIdAndDelete(uid);


        res.status(200).json({
            ok: true,
            msg: 'Usuario eliminado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar usuario'
        });

    }

}




module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario,
    borrarUsuarios
}