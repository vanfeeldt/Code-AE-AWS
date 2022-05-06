const { response } = require('express');
const bcrypt = require('bcryptjs');

const SumaryFinal = require('../models/sumaryFinal');

const { generarJWT } = require('../helpers/jwt');


const getSumary = async (req, res) => {

    try {
        const sumary = await SumaryFinal.find({}, 'clave bitacora matricula  clasificacion operadorVuelo opTramo matricula dia numVuelo origenDestino origen destino numI horarioAterrizaje horarioManifiestoEntrada horarioManifiestoSalida horarioManifiesto '
            + 'minutosPlataforma conversionSumLts sumLts conversionSumGal conversionSumGls conversionSumGal conversionSumGls conversionSumGal combustibleConsumido tampa tipoCambioUSD mathRampa vueloAndOD presioAterrizaje match precioPlataforma precioCombustibleASA '
            + 'precioCombustibleUSD');

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
            SumaryFinal.find({}, 'clave bitacora matricula  clasificacion operadorVuelo opTramo matricula dia numVuelo origenDestino origen destino numI horarioAterrizaje horarioManifiestoEntrada horarioManifiestoSalida horarioManifiesto '
                + 'minutosPlataforma conversionSumLts sumLts conversionSumGal conversionSumGls conversionSumGal conversionSumGls conversionSumGal combustibleConsumido tampa tipoCambioUSD mathRampa vueloAndOD presioAterrizaje match precioPlataforma precioCombustibleASA '
                + 'precioCombustibleUSD'),
            SumaryFinal.countDocuments()

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