'use strict';

const Users = require('../models/users.js');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) { next("Invalid User"); }

  let token = req.headers.authorization.split(' ').pop();

  Users.authenticateWithToken(token)
    .then(validUser => {
      req.user = validUser;
      next();
    })
    .catch(e => {
      next('Invalid Login')
    })
}