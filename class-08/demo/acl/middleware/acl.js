'use strict';

const User = require('../models/users.js');

module.exports = (permission) => {

  return (req, res, next) => {
    if (req.user.capabilities.includes(permission)) {
      next();
    } else {
      next('Access Denied');
    }
  }

}