const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    nome: String,
}, {
	timestamps: true,
});

module.exports = mongoose.model('Category', CategorySchema);