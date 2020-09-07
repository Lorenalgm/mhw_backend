const Post = require('../models/Post');

module.exports = {
    async index(request, response) {
        let posts = [];

        posts = await Post.find().populate('usuario_id');
     
        return response.json(posts);
    },

    async store(request, response){
        const {
            titulo,
            descricao,
            destacar,
            categoria_id,
            usuario_id,
            likes
        } = request.body;

        const post = await Post.create({
            titulo,
            descricao,
            destacar,
            categoria_id,
            usuario_id,
            likes
        });

        return response.json(post);
    },
}