module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('posts', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: { model: 'users', key: 'id' },
				primaryKey: true,
				allowNull: false,
			},
			post_id: {
				type: Sequelize.INTEGER,
				references: { model: 'posts', key: 'id' },
				primaryKey: true,
				allowNull: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('posts');
	},
};
