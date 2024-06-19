const express = require('express');
const { GetUser, CreateUser, UpdateUser, DeleteUser } = require('../Contorllers/user.controller');
const router = express.Router();


router.get('/users', GetUser);

router.post('/Create_user', CreateUser);

router.put('/update_user', UpdateUser);

router.delete('/delete-user', DeleteUser);









module.exports = router;