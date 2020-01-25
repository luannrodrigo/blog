import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authoConfig from '../../config/auth';

export default async (req, res, next) => {
	const authHeader = req.headers.authorization;

	/* check if exist token sending by header */
	if (!authHeader) {
		return res.status(401).json({ error: 'token is not provider.' });
	}

	/* destructuring array to only get token */
	const [, token] = authHeader.split(' ');

	try {
		const decoded = await promisify(jwt.verify)(token, authoConfig.secret);

		/* set userId in req */
		req.userId = decoded.id;

		return next();
	} catch (error) {
		return res.status(401).json({ error: 'Token invalid' });
	}
};
