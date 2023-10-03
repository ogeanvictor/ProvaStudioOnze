const db = require('../database'),

sequelize = db.sequelize,
Sequelize = db.Sequelize;


const Company = sequelize.define('company', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    photo: {
        type: Sequelize.STRING,
    }
});

module.exports = Company;