'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getTagList = async () =>{
//SELECT user_id, name, email FROM wop_user
try {
  const [rows] = await promisePool.query('SELECT tag_id, name FROM tags');
  return rows;
} catch (e) {
  console.log('error in getTagList', e.message);
}   
};

const getTag = async (id) => {
    // SELECT * FROM wop_user WHERE user_id = ?
  // remember in controller do:
  // delete user.password;
  //before sending the user back
  try {
    const [rows] = await promisePool.query('SELECT tag_id, name FROM tags WHERE tag_id = ?', [ id ]);
    return rows[0];
  } catch (e) {
    console.log('error', e.message);
  };  

  const tag = tags.filter((tg) => {
    if (tg.id === id) {
      return tg;
    }
  });
  return tag[0];
};

const insertTag = async (tag) => {
  try {
    console.log('insert user?', tag);
    const [rows] = await promisePool.query('INSERT INTO tags (name) VALUES (?)',
    [ tag.name ]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
}; 


module.exports = {

  getTag,
  getTagList,
  insertTag,
};

