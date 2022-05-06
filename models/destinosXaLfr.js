const { Schema, model } = require('mongoose');

const DestinosXaLfrSchema = Schema({

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

}, { collection: 'destino_xaLfr' });

DestinosXaLfrSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('DestinoXaLfr', DestinosXaLfrSchema);