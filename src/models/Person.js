const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    nome: String,
}, {
	timestamps: true,
});

module.exports = mongoose.model('Person', PersonSchema);