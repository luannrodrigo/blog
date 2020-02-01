import Sequelize, { Model } from 'sequelize';

class Post extends Model {
	static init(sequelize) {
		super.init(
			{
				title: Sequelize.STRING,
				post: Sequelize.STRING,
				user_id: Sequelize.INTEGER,
				created_at: Sequelize.DATE,
				updated_at: Sequelize.DATE,
			},
			{
				sequelize,
			}
		);

		// retorna o modulo init
		return this;
	}
}

export default Post;
