const { response } = require('express');

const DestinoXaGgl = require('../models/destinosXaGgl');

const DestinoXaEfr = require('../models/destinosXaEfr');

const DestinoXaLfr = require('../models/destinosXaLfr');

const DestinoXaLrc = require('../models/destinosXaLrc');

const DestinoXaUyr = require('../models/destinosXaUyr');


const getDestinosGgl = async (req, res) => {

    const xaggl = await DestinoXaGgl.find({}, 'ruta acumulado vuelo');

    const total = DestinoXaGgl.countDocuments();

    res.status(200).json({
        ok: true,
        xaggl,
        total
    });

}

const getDestinosEfr = async (req, res) => {

    const xaggl = await DestinoXaEfr.find({}, 'ruta acumulado vuelo');

    res.status(200).json({
        ok: true,
        xaggl
    });

}

const getDestinosLfr = async (req, res) => {

    const xaggl = await DestinoXaLfr.find({}, 'ruta acumulado vuelo');

    res.status(200).json({
        ok: true,
        xaggl
    });

}

const getDestinosLrc = async (req, res) => {

    const xaggl = await DestinoXaLrc.find({}, 'ruta acumulado vuelo');

    res.status(200).json({
        ok: true,
        xaggl
    });

}

const getDestinosUyr = async (req, res) => {

    const xaggl = await DestinoXaUyr.find({}, 'ruta acumulado vuelo');

    res.status(200).json({
        ok: true,
        xaggl
    });

}



module.exports = {
    getDestinosGgl,
    getDestinosEfr,
    getDestinosLfr,
    getDestinosLrc,
    getDestinosUyr

}

