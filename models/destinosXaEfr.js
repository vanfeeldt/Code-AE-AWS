const { Schema, model } = require('mongoose');

const DestinosXaEfrSchema = Schema({

    ruta: {
        type: String,
        require: true
    },
    acumulado: {
        type: Number,
        require: true,
    },
    vuelo: {
        type: String,
        require: true
    }

}, { collection: 'destino_xaEfr' });

DestinosXaEfrSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('DestinoXaEfr', DestinosXaEfrSchema);