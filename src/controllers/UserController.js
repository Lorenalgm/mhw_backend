const User = require('../models/User');

module.exports = {
    async index(request, response) {
        let users = [];

        users = await User.find();
     
        return response.json(users);
    },

    async store(request, response){
        const {
            nome
        } = request.body;

        const user = await User.create({
            nome
        });

        return response.json(user);
    },
}