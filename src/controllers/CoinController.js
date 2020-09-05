const Coin = require('../models/Coin');

module.exports = {
    async index(request, response) {
        let coins = [];

        coins = await Coin.find();
     
        return response.json(coins);
    },

    async store(request, response){
        const {
            nome
        } = request.body;

        const coin = await Coin.create({
            nome
        });

        return response.json(coin);
    },
}