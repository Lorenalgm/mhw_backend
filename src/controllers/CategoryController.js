const Category = require('../models/Category');

module.exports = {
    async index(request, response) {
        let categories = [];

        categories = await Category.find();
     
        return response.json(categories);
    },

    async store(request, response){
        const {
            nome
        } = request.body;

        const category = await Category.create({
            nome
        });

        return response.json(category);
    },
}