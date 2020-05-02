'use strict';
const userModel = require('../models/userModel');
const {validationResult} = require('express-validator');

const users = userModel.users;

const user_list_get = async (req, res) => {
  const users = await userModel.getUserList();
  res.json(users);
};

const user_get = async (req, res) => {
  console.log('user id parameter', req.params);
  const user = await users.filter(user => user.id === req.params.id).pop();
  res.json(user);
};

const user_post = async (req, res) => {
  console.log('data from form', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const user = await userModel.insertUser(req.body);
    console.log('inserted', user);
    //res.send(`Registered with email: ${req.body.email}`);
    res.redirect('/');
    } catch (e){
    console.error('problem with user_post in userController', e);
    res.status('500').send(`database insert error: ${e.message}`);
  }};


  
module.exports = {
  user_list_get,
  user_get,
  user_post,
};
