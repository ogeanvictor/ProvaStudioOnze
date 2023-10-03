'use strict'

const HttpStatusCode = require("http-status-codes");

const service = require("../services/company");

exports.create = async (req, res) => {
    try {
        let company = await service.create(req.body);
        res.status(HttpStatusCode.StatusCodes.OK).send(company);
    } catch (error) {
        res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        let companys = await service.findAll();
        res.status(HttpStatusCode.StatusCodes.OK).send(companys);
    } catch (error) {
        res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        let company = await service.findById(req.params);
        res.status(HttpStatusCode.StatusCodes.OK).send(company);
    } catch (error) {
        res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};

exports.update = async (req, res) => {
    try {
        let company = await service.update(req.body);
        res.status(HttpStatusCode.StatusCodes.OK).send(company);
    } catch (error) {
        res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        let company = await service.delete(req.params);
        res.status(HttpStatusCode.StatusCodes.OK).send(company);
    } catch (error) {
        res.status(HttpStatusCode.StatusCodes.BAD_REQUEST).send({ "message": error.message });
    }
};