const { Schema, model } = require('mongoose');

const DestinosXaUyrSchema = Schema({

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

}, { collection: 'destino_xaUyr' });

DestinosXaUyrSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('DestinoXaUyr', DestinosXaUyrSchema);