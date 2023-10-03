const db = require('../database'),

sequelize = db.sequelize,
Sequelize = db.Sequelize;

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = User;