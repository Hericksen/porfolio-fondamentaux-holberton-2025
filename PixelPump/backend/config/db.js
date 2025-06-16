const { Sequelize } = require('sequelize');

const DB_NAME = 'portfolio';
const DB_USER = 'postgres'; // ou ton utilisateur PostgreSQL
const DB_PASS = 'mdp123'; // remplace par ton mot de passe réel
const DB_HOST = 'localhost';
const DB_PORT = 5432;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;
