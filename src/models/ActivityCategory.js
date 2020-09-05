const mongoose = require('mongoose');

const ActivityCategorySchema = new mongoose.Schema({
    categoria_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    tarefa_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }
}, {
	timestamps: true,
});

module.exports = mongoose.model('ActivityCategory', ActivityCategorySchema);