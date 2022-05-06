const { Schema, model } = require('mongoose');

const XaLfrRealSchema = Schema({

    bitacora: {
        type: String,
        requiered: true
    },
    bitacoraVuelo: {
        type: String,
        requiered: true
    },
    operacion: {
        type: String,
        requiered: true
    },
    leg: {
        type: Number,
        requiered: true
    },
    fecha: {
        type: Date,
        requiered: true
    },
    flt: {
        type: String,
        requiered: true
    },
    from: {
        type: String,
        requiered: true
    },
    to: {
        type: String,
        requiered: true
    },
    fuelGal: {
        type: Number,
        requiered: true
    },
    fuelLt: {
        type: Number,
        requiered: true
    },
    id: {
        type: String,
        requiered: true
    }

}, { collection: 'xa_lfr' });

XaLfrRealSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('XaLfrRealSchema', XaLfrRealSchema);