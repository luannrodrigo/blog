import Sequelize, { Model } from 'sequelize';

class Post extends Model {
	static init(sequelize) {
		super.init(
			{
				post: Sequelize.STRING,
				created_at: Sequelize.DATE,
				update_at: Sequelize.DATE,
			},
			{
				sequelize,
			}
		);

		// retorna o modulo init
		return this;
	}

	//  relacionamento com a table user
	static associate(models) {
		this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
	}
}

export default Post;
