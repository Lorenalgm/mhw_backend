const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
}, {
	timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);