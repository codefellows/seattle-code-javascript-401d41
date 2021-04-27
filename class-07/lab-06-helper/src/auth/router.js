'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const basicAuth = require('./basic-auth-middleware.js');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let user = new User(req.body);
    const record = await user.save();
    res.status(201).json(record);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  res.status(200).json(req.user);
});

module.exports = authRouter;