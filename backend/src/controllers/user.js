'use strict'

const HttpStatusCode = require("http-status-codes");

const service = require("../services/user");

exports.create = async (req, res) => {
    try {
        let user = await service.create(req.body);
        res.status(HttpStatusCode.StatusCodes.OK).send(user);
    } catch (error) {
        res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};

exports.login = async (req, res) => {
    try {
        let user = await service.login(req.body);
        res.status(HttpStatusCode.StatusCodes.OK).send(user);
    } catch (error) {
        res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};