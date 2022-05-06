const { Schema, model } = require('mongoose');

const DivisasSchema = Schema({
    valor: {
        type: Number,
        require: true
    },
    fecha: {
        type: Date,
        require: true
    },
    nombre: {
        type: String,
        require: true
    }

});

DivisasSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})


module.exports = model('DivisasSchema', DivisasSchema);