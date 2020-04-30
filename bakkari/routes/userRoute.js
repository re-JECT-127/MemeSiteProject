'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/',
[body('name', 'Min 3 chars, required').isLength({min: 3}),
body('email','not email address').isEmail(),
body('password', 'invalid password').matches('(?=.*[A-Z]).{8,}')]
,userController.user_post);

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit users');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete users');
});


module.exports = router;
