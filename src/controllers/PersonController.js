const Person = require('../models/User');

module.exports = {
    async index(request, response) {
        let persons = [];

        persons = await Person.find();
     
        return response.json(persons);
    },

    async store(request, response){
        const {
            nome
        } = request.body;

        const person = await Person.create({
            nome
        });

        return response.json(person);
    },
}