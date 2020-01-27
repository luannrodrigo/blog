import Post from '../models/Post';

class PostController {
	async store(req, res) {
		const { post } = await Post.create(req.body);

		return res.json(post);
	}

	async index(req, res) {
		const { page = 1 } = req.query;

		const posts = await Post.findAll({
			order: ['created_at'],
			attributes: ['id', 'post', 'created_at', 'updated_at'],
			limit: 20,
			offset: (page - 1) * 20,
		});

		return res.json(posts);
	}

	async show(req, res) {
		const post = await Post.findOne({
			attributes: ['id', 'post', 'created_at', 'updated_at'],
			where: { id: req.params.id },
		});

		return res.json(post);
	}

	async delete(req, res) {
		const postId = await Post.destroy({ where: { id: req.params.id } });

		return res.json(postId);
	}
}

export default new PostController();
