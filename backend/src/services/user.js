'use strict'

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const repository = require("../repositories/user");

exports.create = async (user) => {
    try  {
        user.password = bcrypt.hashSync(user.password, 10);
        let createdUser = await repository.create(user);
        return createdUser;
    } catch (error) {
        return error.message;
    }
};

exports.login = async ({ username, password }) => {
    try {
        let logged = false;
        let jwtToken = null;

        let user = await repository.findByUsername(username);

        if (user)  {
            let bcryptResult = bcrypt.compareSync(password, user[0].dataValues.password);
      
            if (bcryptResult) {
              delete user.password;
              logged = true;
              jwtToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
            };
        };

        return {
            logged: logged,
            token: jwtToken,
        };

    } catch (error) {
        return error.message;
    }
};