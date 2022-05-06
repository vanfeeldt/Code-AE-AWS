const { Schema, model } = require('mongoose');

const TramoSchema = Schema({
    ruta: {
        type: String,
        requiered: true
    },
    categoria: {
        type: String,
        requiered: true
    }
}, { collection: 'tramo' });

TramoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('TramoSchema', TramoSchema);