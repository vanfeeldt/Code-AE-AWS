const cron = require('node-cron');
const { default: axios } = require('axios');
const { response } = require('express');

const Divisa = require('../models/divisas');



const ejecutarJob = async () => {

    //* * * * * * cada segungo 
    //0 0 * * * hora cero minuto 0

    cron.schedule('7 0 * * * 1-5', async () => {
        console.log('Job Consulta de Divisa');
        const resp = await axios.get('https://free.currconv.com/api/v7/convert?q=USD_MXN&compact=ultra&apiKey=25a8d9de215ed97fb036');
        const valor = resp.data.USD_MXN;
        const divisa = new Divisa({ valor, fecha: new Date, nombre: 'Dolar Americano' });
        await divisa.save();
    });
}

module.exports = {
    ejecutarJob
}