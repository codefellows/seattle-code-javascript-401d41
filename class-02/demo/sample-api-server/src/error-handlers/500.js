'use strict';

function errorHandler(err, req, res, next) {
  res.status(500).send('something went wrong');
}

module.exports = errorHandler;