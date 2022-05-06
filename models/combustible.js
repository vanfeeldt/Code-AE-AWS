const { Schema, model } = require('mongoose');

const CombustibleSchema = Schema({

    bitacora: {
        type: String,
        requiered: true
    },
    combustible: {
        type: String,
        requiered: true
    },
    dia: {
        type: Number,
        requiered: true
    },
    vigenciaInicio: {
        type: String,
        requiered: true
    },
    vigenciaFinal: {
        type: String,
        requiered: true
    },
    aeropuerto: {
        type: String,
        requiered: true
    },
    nombreAeropuerto: {
        type: String,
        requiered: true
    },
    precioDescuento: {
        type: String,
        requiered: true
    },
    precioSinDescuento: {
        type: String,
        requiered: true
    },
    precioDolar: {
        type: String,
        requiered: true
    }

}, { collection: 'combustible' });

CombustibleSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('CombustibleSchema', CombustibleSchema);