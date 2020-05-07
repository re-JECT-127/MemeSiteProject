'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();
var bcrypt = require('bcryptjs');
const saltRounds = 10;


const getUserList = async () =>{
try {
  const [rows] = await promisePool.query('SELECT user_id, name, email FROM meme_user');
  return rows;
} catch (e) {
  console.log('error in getUserList', e.message);
}   
};

const getUser = async (id) => {
  try {
    const [rows] = await promisePool.query('SELECT user_id, name, email FROM meme_user WHERE user_id = ?', [ id ]);
    return rows[0];
  } catch (e) {
    console.log('error', e.message);
  };  

  const user = users.filter((usr) => {
    if (usr.id === id) {
      return usr;
    }
  });
  return user[0];
};

const getUserLogin = (email) => {
  const user = users.filter((usr) => {
    if (usr.email === email) {
      return usr;
    }
  });
  return user[0];
};

const insertUser = async (user, req, res) => {
  await bcrypt.hash(user.password, saltRounds, function(err, hash) {
     // Store hash in your password DB.
 
   try {
     console.log('insert user?', user);
     const [rows] =  promisePool.query('INSERT INTO meme_user (name, email, password) VALUES (?, ?, ?)',
     [ user.name, user.email, hash ]);
 
     return rows;
   } catch (e) {
     console.log('error', e.message);
   }   
 });
 }; 
 
module.exports = {
  getUser,
  getUserLogin,
  getUserList,
  insertUser,
};

