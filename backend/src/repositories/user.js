'use strict'

const User = require('../models/user');

exports.create = async (user) => {
    let createdUser = await User.create({
        username: user.username,
        password: user.password
    })

    return createdUser;
}