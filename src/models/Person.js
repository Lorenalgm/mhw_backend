const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    nome: String,
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
	timestamps: true,
});

module.exports = mongoose.model('Person', PersonSchema);