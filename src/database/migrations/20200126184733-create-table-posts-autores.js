module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('postAuthors', {
			post_id: {
				type: Sequelize.INTEGER,
				references: { model: 'posts', key: 'id' },
				primaryKey: true,
				allowNull: false,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: { model: 'users', key: 'id' },
				primaryKey: true,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			deleted_at: {
				type: Sequelize.DATE,
				allowNull: true,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('postAuthors');
	},
};
