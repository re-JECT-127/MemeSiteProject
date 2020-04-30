'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllMemes = async () => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM memes');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
}; 

const getMeme = async (id, name) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM memes WHERE meme_id = ?', [ id ]);
    return rows[0];
  } catch (e) {
    console.log('error', e.message);
  }   
}; 

//EDIT THIS
const insertMeme = async (meme) => {
  try {
    console.log('insert meme?', meme);
    const [rows] = await promisePool.query('INSERT INTO memes (name, filename) VALUES (?, ?)',
    [ meme.name, meme.filename ]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
}; 

//EDIT THIS
const updateMeme = async (meme) => {
  try {
    console.log('inser meme?', meme);
    const [rows] = await promisePool.query('UPDATE memes SET name = ? WHERE memes.meme_id = ?',
    [ meme.name, meme.id ]);
    return rows;
  } catch (e) {
    console.log('updateMeme model crash', e.message);
  }   
}; 

const deleteMeme = async (id) => {
  try {
    console.log('delete meme?', id);
    const [rows] = await promisePool.query('DELETE FROM memes WHERE memes.meme_id = ?', [ id ]);
    console.log('deleted?', rows);
  } catch (e){
    console.error('deleteMeme model', e.message);
  }
}


module.exports = {
  getAllMemes,
  getMeme,
  insertMeme,
  updateMeme,
  deleteMeme,
};
