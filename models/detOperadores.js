const { Schema, model } = require('mongoose');

const DeterminacionOperadoresSchema = Schema({
    match: {
        type: String,
        requiered: true
    },
    vuelo: {
        type: String,
        requiered: true
    },
    origenDestino: {
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
    clase: {
        type: String,
        requiered: true
    },
    cliente: {
        type: String,
        requiered: true
    }
}, { collection: 'determinacion_operadores' });

DeterminacionOperadoresSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('DeterminacionOperadores', DeterminacionOperadoresSchema);