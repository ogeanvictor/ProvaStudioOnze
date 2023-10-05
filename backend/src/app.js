'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const HttpStatusCode = require("http-status-codes");

dotenv.config();

(async () => {
    const database = require('./database');
    const User = require('./models/user');
    const Company = require('./models/company');

    try {
        await database.sequelize.authenticate();
        console.log('Conexão estabelecida.');
    } catch (error) {
        console.log(error);
    }
})();

const app = express();

app.use(bodyParser.json({limit: '200mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}))
app.use(bodyParser.text({ limit: '200mb' }));

const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://provastudioonze.netlify.app/'
    ],
    credentials: true,
};
app.use(cors(corsOptions));
  
const router = express.Router();

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

app.use((req, res, next) => {
    const tokenHeader = req.headers["authorization"];

    if (!tokenHeader) {
        return res.status(HttpStatusCode.StatusCodes.UNAUTHORIZED).json({ "message": 'Acesso não autorizado!' });
    }

    try {
        jwt.verify(tokenHeader, process.env.JWT_SECRET);
        next();
    
    } catch (error) {
        return res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
});

const companyRoutes = require("./routes/company");
app.use("/company", companyRoutes);

module.exports = app;