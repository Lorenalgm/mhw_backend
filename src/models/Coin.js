const mongoose = require('mongoose');

const CoinSchema = new mongoose.Schema({
    saldo_atual: String,
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
	timestamps: true,
});

module.exports = mongoose.model('Coin', CoinSchema);