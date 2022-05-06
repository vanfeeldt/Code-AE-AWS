const { default: axios } = require('axios');
const { response } = require('express');

const Divisa = require('../models/divisas');


const crearDivisa = async (req, res = response) => {


    try {
        const resp = await axios.get('https://free.currconv.com/api/v7/convert?q=USD_MXN&compact=ultra&apiKey=25a8d9de215ed97fb036');
        const valor = resp.data.USD_MXN;

        const divisa = new Divisa({ valor, fecha: new Date, nombre: 'Dolar Americano' });

        await divisa.save();

        res.status(200).json({
            ok: true,
            msg: 'Consulta de divisas',
            divisa
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado al consultar el precio del dolar al  día'
        });

    }


}

module.exports = {
    crearDivisa
}