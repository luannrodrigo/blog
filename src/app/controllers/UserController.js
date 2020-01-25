import User from '../models/User';

class UserController {
	async store(req, res) {
		const usersExist = await User.findOne({ where: { email: req.body.email } });

		/* check if user exist before save */
		if (usersExist) {
			return res.status(400).json({ error: 'User already exists.' });
		}

		const { id, name, email } = await User.create(req.body);

		return res.json({
			id,
			name,
			email,
		});
	}
}

export default new UserController();
