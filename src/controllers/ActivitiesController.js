const Activity = require('../models/Activity');

module.exports = {
    async index(request, response) {
        let activities = [];

        activities = await Activity.find();
     
        return response.json(activities);
    },

    async store(request, response){
        const {
            titulo,
            data,
            horario_inicio,
            horario_fim,
            lembrar,
            feito
        } = request.body;

        const activity = await Activity.create({
            titulo,
            data,
            horario_inicio,
            horario_fim,
            lembrar,
            feito
        });

        return response.json(activity);
    },
}