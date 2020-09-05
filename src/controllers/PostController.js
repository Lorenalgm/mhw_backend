const Post = require('../models/User');

module.exports = {
    async index(request, response) {
        let posts = [];

        posts = await Post.find();
     
        return response.json(posts);
    },

    async store(request, response){
        const {
            titulo,
            descricao,
            destacar,
            categoria_id
        } = request.body;

        const post = await Post.create({
            titulo,
            descricao,
            destacar,
            categoria_id
        });

        return response.json(post);
    },
}