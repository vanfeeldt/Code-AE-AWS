const { Schema, model } = require('mongoose');

const OperadorVueloSchema = Schema({

    vuelo: {
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
    cliente: {
        type: String,
        requiered: true
    },
    clave: {
        type: String,
        requiered: true
    },
    clase: {
        type: String,
        requiered: true
    }


}, { collection: 'operador_vuelos' });

OperadorVueloSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('OperadorVuelo', OperadorVueloSchema);