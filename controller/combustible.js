const { response } = require('express');
const axios = require('axios');
const bcrypt = require('bcryptjs');


const Combustible = require('../models/combustible');
const { generarJWT } = require('../helpers/jwt');


const getCombustible = async (req, res) => {

    const resp = await axios.get('https://free.currconv.com/api/v7/convert?q=USD_MXN&compact=ultra&apiKey=25a8d9de215ed97fb036');


    console.log(resp.data);

    res.status(200).json({
        ok: true


    });


}

const crearCombustible = (req, res) => {

    res.status(200).json({
        ok: true

    });
}

const actualizarCombustible = (req, res = response) => {

    res.status(200).json({
        ok: true

    });
}

const borrarCombustible = (req, res = response) => {

    res.status(200).json({
        ok: true

    });
}

module.exports = {
    getCombustible,
    crearCombustible,
    actualizarCombustible,
    borrarCombustible

}
