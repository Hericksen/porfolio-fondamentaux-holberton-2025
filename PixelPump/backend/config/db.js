const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('portfolio', 'guillaume', 'motdepasse', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
