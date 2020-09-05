const ActivityPerson = require('../models/ActivityPerson');

module.exports = {
    async index(request, response) {
        let activities = [];

        activities = await ActivityPerson.find();
     
        return response.json(activities);
    },

    async store(request, response){
        const {
            atividade_id,
            pessoa_id
        } = request.body;

        const activity = await ActivityPerson.create({
            atividade_id,
            pessoa_id
        });

        return response.json(activity);
    },
}