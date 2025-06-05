const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'users', // nom explicite dans PostgreSQL
  timestamps: true    // ajoute createdAt / updatedAt
});

module.exports = User;
