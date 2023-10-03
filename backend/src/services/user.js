'use strict'

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const repository = require("../repositories/user");

exports.create = async (user) => {
    try  {
        let createdUser = await repository.create(user);
        return createdUser;
    } catch (error) {
        return error.message;
    }
};

exports.login = async ({ username, password }) => {
    try {
        
    } catch (error) {
        return error.message;
    }
};