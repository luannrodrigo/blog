import Post from '../models/Post';

class PostController {
	async store(req, res) {
		const formData = {
			user_id: req.userId,
			title: req.body.title,
			post: req.body.post,
		};

		const { id, user_id, title, post } = await Post.create(formData);

		return res.json({ id, user_id, title, post });
	}

	async index(req, res) {
		const { page = 1 } = req.query;

		const posts = await Post.findAll({
			order: ['created_at'],
			attributes: ['id', 'post', 'created_at', 'updated_at'],
			include: {
				Model: 'User',
				as: 'user_id',
				attributes: ['id', 'name'],
			},
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

	async update(req, res) {
		const { id, title, post } = await Post.update(req.body, {
			where: { id: req.params.id },
		});

		return res.json({ id, title, post });
	}

	async delete(req, res) {
		const postId = await Post.destroy({ where: { id: req.params.id } });

		return res.json(postId);
	}
}

export default new PostController();
