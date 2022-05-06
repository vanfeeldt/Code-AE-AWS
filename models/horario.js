const { Schema, model } = require('mongoose');

const HorarioSchema = Schema({
    horario: {
        type: Date,
        requiered: true
    },
    estado: {
        type: String,
        requiered: true
    }
}, { collection: 'horarios' });

HorarioSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;
})

module.exports = model('HorarioSchema', HorarioSchema);