const mongoose = require('mongoose');

const ActivityPersonSchema = new mongoose.Schema({
    pessoa_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    tarefa_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }
}, {
	timestamps: true,
});

module.exports = mongoose.model('ActivityPerson', ActivityPersonSchema);