const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('portfolio', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

module.exports = sequelize;
