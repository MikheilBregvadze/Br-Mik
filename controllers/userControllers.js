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
    const { name, lastname, email, password, terms, confirm_password } = req.body;
    console.log(req.body)
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.json({ status: 400, errorMessage: 'User already exists' });
        throw new Error('User already exists');
    } else if (password !== confirm_password) {
        res.json({ status: 400, errorMessage: "Password don't match !" });
    } else if (!terms) {
        res.json({ status: 400, errorMessage: "Accept terms required!" });
    }

    const user = await User.create({
        name,
        lastname,
        email,
        password,
        terms
    });

    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            terms: user.terms,
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

const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');
    if(user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
    res.json(user);
})

module.exports = {
    authUser,
    registerUser,
    getUsers,
    getUserById
};
