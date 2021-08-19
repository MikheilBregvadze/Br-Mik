const express = require('express');
const router = express.Router();
const {
    authUser,
    registerUser,
    getUsers
} = require('../controllers/userControllers');

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/', getUsers);

module.exports = router;
