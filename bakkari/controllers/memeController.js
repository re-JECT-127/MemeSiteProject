'use strict';
const memeModel = require('../models/memeModel');
const {validationResult} = require('express-validator');
const memes = memeModel.memes;


const meme_list_get = async (req, res) => {
  const memes = await memeModel.getAllMemes();
  res.json(memes);
};

const meme_get = async (req, res) => {
  console.log('meme id parameter', req.params);
  const meme = await memeModel.getMeme(req.params.id);
  res.json(meme);
};

const meme_post = async (req, res) => {
  
  console.log('meme_post', req.body, req.file);
  let errors = validationResult(req);
//if(!req.file.mimetype.includes('image')){
//errors = [{msg : 'ei oo kuva'}];
//};
console.log(errors);

if (!errors.isEmpty()) {
  return res.status(422).json({ errors: errors.array() });
  console.log(errors);
}

  const inMeme = {
      /// EDIT THESE
    name: req.body.name,
    filename: req.file.filename,
    tag: req.body.tag,
  };

try {
  resize.makeThumbnail(req.file.path, req.file.filename);
  const meme = await memeModel.insertMeme(inMeme);
  console.log('inserted', meme);
  //res.send(`added meme: ${meme.insertID}`);
  res.redirect('/');
} catch (e){
  console.error('problem with meme_post in memeController', e);
  res.status('500').send(`database insert error: ${e.message}`);
}
};

const meme_put = async (req, res) => {
  console.log('meme_put', req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const upMeme = await memeModel.updateMeme(req.body);
  console.log('meme_put result from db', upMeme);
res.status(204).send();
};

const meme_delete = async (req, res) => {
  console.log('meme_delete', req.params);
  const delMeme = await memeModel.deleteMeme(req.params.id);
  console.log('meme_delete result from db', delMeme);
  res.json({ deleted: 'OK'});
};

module.exports = {
  meme_list_get,
  meme_get,
  meme_post,
  meme_put,
  meme_delete,
};
