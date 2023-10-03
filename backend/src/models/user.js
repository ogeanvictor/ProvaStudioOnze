const db = require('../database'),

sequelize = db.sequelize,
Sequelize = db.Sequelize;

const User = sequelize.define('user', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
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

console.log(User === sequelize.models.User)

module.exports = User;