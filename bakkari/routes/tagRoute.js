'use strict';
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const tagController = require('../controllers/tagController');

router.get('/', tagController.tag_list_get);

router.get('/:id', tagController.tag_get);

router.post('/',
[body('name', 'Min 3 chars, required').isLength({min: 3}),]
,tagController.tag_post);

router.put('/', (req, res) => {
  res.send('With this endpoint you can edit tags');
});

router.delete('/', (req, res) => {
  res.send('With this endpoint you can delete tags');
});


module.exports = router;
