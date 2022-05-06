const { Schema, model } = require('mongoose');

const SumaryFinalSchema = Schema({

    clave: {
        type: String,
        requiered: true
    },
    bitacora: {
        type: String,
        requiered: true
    },
    clasificacion: {
        type: String,
        requiered: false
    },
    operadorVuelo: {
        type: String,
        requiered: true
    },
    opTramo: {
        type: String,
        requiered: false
    },
    matricula: {
        type: String,
        requiered: true
    },
    dia: {
        type: Date,
        requiered: false
    },
    numVuelo: {
        type: String,
        requiered: false
    },
    origenDestino: {
        type: String,
        requiered: false
    },
    origen: {
        type: String,
        requiered: false
    },
    destino: {
        type: String,
        requiered: false
    },
    nacInt: {
        type: String,
        requiered: false
    },
    horarioAterrizaje: {
        type: Date,
        requiered: false
    },
    horarioManifiestoEntrada: {
        type: Date,
        requiered: false
    },
    horarioManifiestoSalida: {
        type: Date,
        requiered: false
    },
    horarioManifiesto: {
        type: Date,
        requiered: false
    },
    minutosPlataforma: {
        type: Date,
        requiered: false
    },
    conversionSumLts: {
        type: Number,
        requiered: false
    },
    sumLts: {
        type: Number,
        requiered: false
    },
    conversionSumGal: {
        type: Number,
        requiered: false
    },
    conversionSumGls: {
        type: Number,
        requiered: false
    },
    conversionSumGal: {
        type: Number,
        requiered: false
    },
    combustibleConsumido: {
        type: Number,
        requiered: false
    },
    tampa: {
        type: Number,
        requiered: false
    },
    tipoCambioUSD: {
        type: Number,
        requiered: false
    },
    mathRampa: {
        type: Number,
        requiered: false
    },
    vueloAndOD: {
        type: Number,
        requiered: false
    },
    presioAterrizaje: {
        type: Number,
        requiered: false
    },
    match: {
        type: Number,
        requiered: false
    },
    precioPlataforma: {
        type: Number,
        requiered: false
    },
    precioCombustibleASA: {
        type: Number,
        requiered: false
    },
    precioCombustibleUSD: {
        type: Number,
        requiered: false
    }



}, { collection: 'sumaryFinal' });

SumaryFinalSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('SumaryFinalSchema', SumaryFinalSchema);