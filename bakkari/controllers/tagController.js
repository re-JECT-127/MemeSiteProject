'use strict';
const tagModel = require('../models/tagModel');
const {validationResult} = require('express-validator');

const tags = tagModel.tags;

const tag_list_get = async (req, res) => {
  const tags = await tagModel.getTagList();
  res.json(tags);
};

const tag_get = async (req, res) => {
  console.log('tag id parameter', req.params);
  const tag = await tags.filter(tag => tag.id === req.params.id).pop();
  res.json(tag);
};

const tag_post = async (req, res) => {
  console.log('data from form', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    const tag = await tagModel.insertTag(req.body);
    console.log('inserted', tag);
    //res.send(`Registered with email: ${req.body.email}`);
    res.redirect('/');
    } catch (e){
    console.error('problem with user_post in tagController', e);
    res.status('500').send(`database insert error: ${e.message}`);
  }};


  
module.exports = {
  tag_list_get,
  tag_get,
  tag_post,
};
