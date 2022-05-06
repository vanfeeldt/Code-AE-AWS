const { response } = require('express');
const bcrypt = require('bcryptjs');

const Sumary = require('../models/sumary');

const { generarJWT } = require('../helpers/jwt');


const getSumary = async (req, res) => {

    try {

        const sumary = await Sumary.find({}, 'matricula clave fecha bitacora tramo numVuelo origen destino origenDestino cliente ciclos identificador');

        res.status(201).json({
            ok: true,
            sumary

        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al obtener sumary'
        });

    }
}

const getSumaryTotal = async (req, res) => {

    try {

        const [sumary, total] = await Promise.all([
            Sumary.find({}, 'matricula clave fecha bitacora tramo numVuelo origen destino origenDestino cliente ciclos operacion identificador'),
            Sumary.countDocuments()

        ]);
        res.status(201).json({
            ok: true,
            total,
            sumary


        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al obtener sumary'
        });

    }
}


module.exports = {
    getSumary,
    getSumaryTotal
}