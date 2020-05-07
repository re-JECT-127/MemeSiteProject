'use strict';

const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const memeController = require('../controllers/memeController');

router.get('/', memeController.meme_list_get);

router.get('/:id', memeController.meme_get);

router.post('/',  upload.single('meme'), 
[body('name', 'name is required').notEmpty()], (req, res) => {
  console.log('tiedosto: ', req.file);
  memeController.meme_post(req, res);
});

router.put('/',
[body('name', 'name is requires').notEmpty()],
memeController.meme_put);

router.delete('/:id', memeController.meme_delete);

module.exports = router;
