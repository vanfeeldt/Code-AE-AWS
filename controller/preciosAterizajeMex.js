const { response } = require('express');
const bcrypt = require('bcryptjs');

const PrecioAterrizajeMex = require('../models/precioAterrizajeMex');
const { generarJWT } = require('../helpers/jwt');

/*const getPrecio = async (req, res) => {

    const precios = await PrecioAterrizajeMex.find({}, 'aterrizaje match nacInt horario precio');

    res.status(200).json({
        ok: true,
        precios
    });
}*/

const getPrecio = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [precios, total] = await Promise.all([
        PrecioAterrizajeMex
            .find({}, 'aterrizaje match nacInt horario precio')
            .skip(desde)
            .limit(10000000),

        PrecioAterrizajeMex.countDocuments()
    ]);


    res.status(200).json({
        ok: true,
        precios,
        total
    });

}

const crearPrecio = async (req, res) => {


    try {

        const precio = new PrecioAterrizajeMex(req.body);
        await precio.save();
        res.status(201).json({
            ok: true,
            precio
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear Precio Aterrizaje Mexico'
        });
    }

}



const actualizarPrecio = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioAterrizajeMex.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        //Actualizacion
        const { aterrizaje, match, nacInt, horario, precio, ...campos } = req.body; //destructuracion para eliminar campo de password y google


        const precioActualizado = await PrecioAterrizajeMex.findByIdAndUpdate(uid, campos, { new: true });//new para regresar el actualizado
        res.status(200).json({
            ok: true,
            precioActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar Precio Aterrizaje Mexico'
        });

    }
}

const borrarPrecios = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioAterrizajeMex.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        await PrecioAterrizajeMex.findByIdAndDelete(uid);


        res.status(200).json({
            ok: true,
            msg: 'Precio eliminado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar precio aterrizaje'
        });

    }

}

module.exports = {
    getPrecio,
    crearPrecio,
    actualizarPrecio,
    borrarPrecios



}