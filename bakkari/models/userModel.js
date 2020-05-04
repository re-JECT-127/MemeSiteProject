'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


const getUserList = async () =>{
//SELECT user_id, name, email FROM wop_user
try {
  const [rows] = await promisePool.query('SELECT user_id, name, email FROM meme_user');
  return rows;
} catch (e) {
  console.log('error in getUserList', e.message);
}   
};

const getUser = async (id) => {
    // SELECT * FROM wop_user WHERE user_id = ?
  // remember in controller do:
  // delete user.password;
  //before sending the user back
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

const insertUser = async (user) => {
  try {
    console.log('insert user?', user);
    const [rows] = await promisePool.query('INSERT INTO meme_user (name, email, password) VALUES (?, ?, ?)',
    [ user.name, user.email, user.password ]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }   
}; 

const updateUser = async (user) => {
  try {
    console.log('update user', user);
    const [rows] = await promisePool.query('UPDATE meme_user SET name = ?, email = ?, password = ? WHERE wop_user.user_id = ?',
    [ user.name, user.email, user.password ]);
    return rows;
  } catch (e) {
    console.log('updateUser model crash', e.message);
  }   
}; 

module.exports = {
  
  getUser,
  getUserLogin,
  getUserList,
  insertUser,
  updateUser,
};

