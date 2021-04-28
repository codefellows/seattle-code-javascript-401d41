'use strict';

const Users = require('../models/users.js');
const base64 = require('base-64');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) { next('not authorized'); }

  // Authorization:Basic asdfljasdljdsfaljkfsdl
  let basic = req.headers.authorization.split(' ').pop();

  // aaskljasljfadsljfasdfl === john:password
  let [username, password] = base64.decode(basic).split(':')

  Users.authenticateBasic(username, password)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(e => {
      next('Invalid Login')
    })
}