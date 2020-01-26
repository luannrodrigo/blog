import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import User from '../models/User';

class SessionController {
	async store(req, res) {
		const { email, password } = req.body;

		const user = await User.findOne({ where: { email: req.body.email } });

		/* check if user exist */
		if (!user) return res.status(401).json({ error: 'User not found' });

		/* check if password match with the find in database */
		if (!(await user.checkPassword(password))) {
			return res.status(401).json({ error: 'Passwrod do not match' });
		}

		const { id, name } = user;

		return res.json({
			user: {
				id,
				name,
				email,
			},
			token: jwt.sign({ id }, authConfig.secret, {
				expiresIn: authConfig.expiresIn,
			}),
		});
	}
}

export default new SessionController();
