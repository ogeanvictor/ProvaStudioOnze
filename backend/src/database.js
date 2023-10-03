const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://asgajdws:o8EKcJoblREF1qXtqLceYK0YY5hXuBil@silly.db.elephantsql.com/asgajdws', { dialect: 'postgres' });

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;