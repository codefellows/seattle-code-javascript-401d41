'use strict';

module.exports = (req, res, next) => {
  res.status(404).json({ msg: 'not found' });
  next();
}