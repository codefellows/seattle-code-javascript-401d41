'use strict';

const express = require('express');
const cors = require('cors');

const basicAuth = require('./middleware/basic.js');
const bearerAuth = require('./middleware/bearer.js');
const can = require('./middleware/acl.js');
const Users = require('./models/users.js');

const app = express();

app.use(cors());
app.use(express.json()); /// turns json {username:'...'} into: req.body

app.post('/signup', async (req, res) => {
  try {
    const user = new Users(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post('/signin', basicAuth, (req, res) => {
  console.log('USER', req.user);
  res.status(200).json(req.user);
})

app.get('/secretstuff', bearerAuth, (req, res) => {
  console.log('USER', req.user);
  res.status(200).send('Shhhhhh');
});

app.delete('/article', bearerAuth, can('delete'), (req, res) => {
  res.status(200).send('Article deleted');
});

app.post('/article', bearerAuth, can('create'), (req, res) => {
  res.status(200).send('Article Created');
})

app.use('*', (req, res) => {
  res.status(404).send('huh?');
})

module.exports = {
  start: (port) => {
    app.listen(port, console.log(`Up on ${port}`))
  }
};