const express = require('express');
const { GetUser, CreateUser, UpdateUser, DeleteUser, GetUserByPhoneNumber } = require('../Contorllers/user.controller');
const router = express.Router();


router.get('/users', GetUser);

// get Single user
router.get('/users/:phone', GetUserByPhoneNumber);

// Create New Register user
router.post('/Create_user', CreateUser);

// Update user information
router.put('/update_user/:id', UpdateUser);

// delete user 
router.delete('/delete_user/:id', DeleteUser);









module.exports = router;