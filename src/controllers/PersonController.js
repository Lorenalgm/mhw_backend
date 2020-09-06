const Person = require('../models/User');

module.exports = {
    async index(request, response) {
        let persons = [];

        persons = await Person.find();
     
        return response.json(persons);
    },

    async store(request, response){
        const {
            nome,
            usuario_id
        } = request.body;

        const person = await Person.create({
            nome,
            usuario_id
        });

        return response.json(person);
    },
}