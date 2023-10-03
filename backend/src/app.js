'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

(async () => {
    const database = require('./database');
    const User = require('./models/user');
    const Company = require('./models/company');

    try {
        await database.sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await database.sequelize.sync({ force: true }); // Use force: true para recriar as tabelas
        console.log('Models synchronized successfully.');
    } catch (error) {
        console.log(error);
    }
})();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const router = express.Router();

const userRoutes = require("./routes/user");
const companyRoutes = require("./routes/company");

app.use("/user", userRoutes);
app.use("/company", companyRoutes);

module.exports = app;