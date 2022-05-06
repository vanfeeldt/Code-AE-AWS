const { Schema, model } = require('mongoose');

const PrecioPlataformaSchema = Schema({
    match: {
        type: String,
        require: true
    },
    plataforma: {
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

PrecioPlataformaSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('PrecioPlataformaSchema', PrecioPlataformaSchema);