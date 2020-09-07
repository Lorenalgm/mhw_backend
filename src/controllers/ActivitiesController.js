const Activity = require('../models/Activity');

module.exports = {
    async index(request, response) {
        let activities = [];

        activities = await Activity.find().populate('categoria_id');
     
        return response.json(activities);
    },

    async store(request, response){
        const {
            titulo,
            data,
            horario_inicio,
            horario_fim,
            lembrar,
            feito,
            categoria_id,
            usuario_id,
            pessoa_id
        } = request.body;

        const activity = await Activity.create({
            titulo,
            data,
            horario_inicio,
            horario_fim,
            lembrar,
            feito,
            categoria_id,
            usuario_id,
            pessoa_id
        });

        return response.json(activity);
    },

    async update(request, response){
        const {id} = request.params;
        
        const {feito} = request.body;

        const activity = await Activity.findById(id);
        
        await activity.updateOne(request.body);

        return response.json(activity);
    },
}