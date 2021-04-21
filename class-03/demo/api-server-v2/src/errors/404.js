'use strict';

module.exports = (req, res, next) => {
  res.status(404).send('not found');
}