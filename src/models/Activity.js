const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    titulo: String,
    data: Date,
    horario_inicio: String,
    horario_fim: String,
    lembrar: Boolean,
    feito: Boolean,
}, {
	timestamps: true,
});

module.exports = mongoose.model('Activity', ActivitySchema);