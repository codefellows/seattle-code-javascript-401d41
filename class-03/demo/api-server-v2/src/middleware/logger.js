'use strict';

module.exports = (req, res, next) => {
  console.log('PATH:', req.path);
  next();
}