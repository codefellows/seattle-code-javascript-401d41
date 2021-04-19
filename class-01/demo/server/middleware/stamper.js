'use strict';

module.exports = (req, res, next) => {
  req.timestamp = new Date();
  next();
}
