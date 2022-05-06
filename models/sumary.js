const { Schema, model } = require('mongoose');

const SumarySchema = Schema({

    matricula: {
        type: String,
        requiered: true
    },
    clave: {
        type: String,
        requiered: true
    },
    fecha: {
        type: Date,
        requiered: true
    },
    bitacora: {
        type: String,
        requiered: true
    },
    tramo: {
        type: Number,
        requiered: true
    },
    numVuelo: {
        type: String,
        requiered: true
    },
    origen: {
        type: String,
        requiered: true
    },
    destino: {
        type: String,
        requiered: true
    },
    origenDestino: {
        type: String,
        requiered: true
    },
    cliente: {
        type: String,
        requiered: true
    },
    ciclos: {
        type: Number,
        requiered: true
    },
    operacion: {
        type: Number,
        requiered: true
    },
    identificador: {
        type: String,
        requiered: true
    }


}, { collection: 'sumary' });

SumarySchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('SumarySchema', SumarySchema);