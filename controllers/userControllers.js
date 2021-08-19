const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

const registerUser = asyncHandler(async (req, res) => {
    const { name, lastname, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        throw new Error('User already exists');
    }
    const user = await User.create({
        name,
        lastname,
        email,
        password
    });

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(404);
        throw new Error('User not found');
    }
})

const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
})

module.exports = {
    authUser,
    registerUser,
    getUsers
};
