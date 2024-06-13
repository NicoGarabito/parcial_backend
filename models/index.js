const Sequelize = require('sequelize');
const sequelize = require('../data/dbConfig'); 

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Producto = require('./producto')(sequelize, Sequelize.DataTypes);

module.exports = db;
