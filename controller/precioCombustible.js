const { response } = require('express');
const bcrypt = require('bcryptjs');
const { default: axios } = require('axios');

const PrecioCombustible = require('../models/preciosCombustible');
const { generarJWT } = require('../helpers/jwt');

/*const getPrecio = async (req, res) => {

    const precios = await PrecioCombustible.find({}, 'match combustible dia vigenciaInicio vigenciaFin aeropuerto nombreAeropuerto precioConDescuento precioSinDescuento');

    res.status(200).json({
        ok: true,
        precios
    });
}*/

const getPrecio = async (req, res = response) => {

    const desde = Number(req.query.desde) || 0;

    const [precios, total] = await Promise.all([
        PrecioCombustible
            .find({}, 'match combustible dia vigenciaInicio vigenciaFin aeropuerto nombreAeropuerto precioConDescuento precioSinDescuento precioGalMex precioDolar')
            .skip(desde)
            .limit(10000000),

        PrecioCombustible.countDocuments()
    ]);


    res.status(200).json({
        ok: true,
        precios,
        total
    });

}


const crearPrecio = async (req, res) => {

    const { precioGalMex } = req.body;

    try {

        const resp = await axios.get('https://free.currconv.com/api/v7/convert?q=USD_MXN&compact=ultra&apiKey=25a8d9de215ed97fb036');
        const valor = resp.data.USD_MXN;

        const precioDescuento = (precioGalMex * valor) / 3.78;

        const precio = new PrecioCombustible(req.body);

        precio.precioDolar = valor;
        precio.precioConDescuento = precioDescuento;

        await precio.save();
        res.status(201).json({
            ok: true,
            precio
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear Precio Combustible'
        });
    }

}

const crearPrecioExcel = async (req, res) => {


    try {

        const precio = new PrecioCombustible(req.body);

        await precio.save();
        res.status(201).json({
            ok: true,
            precio
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al crear Precio Combustible'
        });
    }

}


const actualizarPrecio = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioCombustible.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        //Actualizacion
        const { aterrizaje, match, nacInt, horario, precio, ...campos } = req.body; //destructuracion para eliminar campo de password y google


        const precioActualizado = await PrecioCombustible.findByIdAndUpdate(uid, campos, { new: true });//new para regresar el actualizado
        res.status(200).json({
            ok: true,
            precioActualizado
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al actualizar Precio Combustible'
        });

    }
}

const borrarPrecios = async (req, res = response) => {

    const uid = req.params.id;

    try {
        const precioDB = await PrecioCombustible.findById(uid);

        if (!precioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un precio con ese id'
            });
        }

        await PrecioCombustible.findByIdAndDelete(uid);


        res.status(200).json({
            ok: true,
            msg: 'Precio eliminado'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al eliminar Precio Combustible'
        });

    }

}

module.exports = {
    getPrecio,
    crearPrecio,
    actualizarPrecio,
    borrarPrecios,
    crearPrecioExcel

}