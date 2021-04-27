'use strict';

const base64 = require('base-64');
const users = require('./user.js');

// req.headers.authorization = 'Basic usdnfusd:sdnfjdsn' ['Basic', 'usdnfusd:sdnfjdsn']

module.exports = (req, res, next) => {
  if (!req.headers.authorization) { next('not authorized') }

  let basic = req.headers.authorization.split(' ').pop(); // this is now a encoded username:pw

  let [user, pass] = base64.decode(basic).split(':');

  // let's use our authenticateBasic method on the user model to check username/password
  users.authenticateBasic(user, pass)
    .then(validUser => {
      req.user = validUser;
      next();
    })
    .catch(e => next('invalid login'))
}