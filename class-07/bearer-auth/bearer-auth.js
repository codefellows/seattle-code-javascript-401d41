'use strict';

const users = require('./user.js');

// req.headers.authorization = Bearer nfsdkjnfkjsdnfjkdsnjfknsdjkfnsdjkfnskd
module.exports = (req, res, next) => {

  if(!req.headers.authorization) { next('invalid login') }

  let token = req.headers.authorization.split(' ')[1];

  users.authenticateToken(token)
    .then(validUser => {
      req.user = validUser;
      next();
    })
    .catch(e => next('invalid login'))

}