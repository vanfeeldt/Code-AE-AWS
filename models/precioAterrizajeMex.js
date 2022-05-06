const { Schema, model } = require('mongoose');

const PrecioAterrizajeMexSchema = Schema({
    aterrizaje: {
        type: String,
        require: true
    },
    match: {
        type: String,
        require: true
    },
    nacInt: {
        type: String,
        require: true
    },
    horario: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    }


});

PrecioAterrizajeMexSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('PrecioAterrizajeMex', PrecioAterrizajeMexSchema);