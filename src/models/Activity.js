const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    titulo: String,
    data: Date,
    horario_inicio: String,
    horario_fim: String,
    lembrar: Boolean,
    feito: Boolean,
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    pessoa_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }
}, {
	timestamps: true,
});

module.exports = mongoose.model('Activity', ActivitySchema);