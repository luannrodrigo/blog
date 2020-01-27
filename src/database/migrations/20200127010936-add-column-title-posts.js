module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('posts', 'title', {
			type: Sequelize.STRING,
		});
	},

	down: queryInterface => {
		return queryInterface.removeColumn('posts', 'title');
	},
};
