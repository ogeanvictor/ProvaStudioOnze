'use strict'

const User = require('../models/user');

exports.create = async (user) => {
    try {
        let createdUser = await User.create({
            username: user.username,
            password: user.password
        });
    
        return createdUser;
    } catch (error) {
        return error.errors[0].message;
    };
};
    

exports.findByUsername = async (username) => {
    try {
        let user = await User.findAll({
            where: {
                username: username
            }
        });

        return user;
    } catch (error) {
        return error.errors[0].message;
    }
};