//
//
// File name : users.js
// Created by: Jerry Hsieh @ 2018-01-03
//
// Copyright (C) 2017 by Jerry Hsieh. All rights reserved
//


let service = {};

service.authenticate = function(username, password) {

  // mockup user
  let user = {
    username: 'jerry',
    password: 'jerry'
  }
  
  return new Promise((resolve, reject) => {

    // should check database
    if (username === user.username && password === user.password) {
      resolve(true);            // user found
    } else {
      resolve(false);           // user not found
    }
  })
}

module.exports = service;
