const ActivityCategory = require('../models/ActivityCategory');

module.exports = {
    async index(request, response) {
        let activities = [];

        activities = await ActivityCategory.find();
     
        return response.json(activities);
    },

    async store(request, response){
        const {
            atividade_id,
            categoria_id
        } = request.body;

        const activity = await ActivityCategory.create({
            atividade_id,
            categoria_id
        });

        return response.json(activity);
    },
}