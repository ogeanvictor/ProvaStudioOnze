const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, { dialect: 'postgres' , dialectModule: pg});

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;