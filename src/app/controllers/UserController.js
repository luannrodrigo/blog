import * as Yup from 'yup';
import User from '../models/User';

class UserController {
	async store(req, res) {
		const schema = Yup.object().shape({
			name: Yup.string().required(),
			email: Yup.string()
				.email()
				.required(),
			password: Yup.string()
				.required()
				.min(6),
		});

		/* check if datas sendind from method post is agree with schema validations */
		if (!(await schema.isValid(req.body))) {
			return res.status(400).json({ error: 'Validations fails.' });
		}
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
