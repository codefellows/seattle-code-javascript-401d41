'use strict';

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const User = require('./user.js');

const basicAuth = require('./basic-auth.js');
const bearerAuth = require('./bearer-auth.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3333;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(morgan('dev')); // this is a new tool for us, used to log details on all incoming request
app.use(cors());

app.post('/signup', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.json(user);
      // res.redirect('/dashboard.html') -> more of a real response
    })
});

// if "next" is called without an argument, then move on to the (req, res) callback
app.post('/signin', basicAuth, (req, res) => {
  res.status(200).send('signed in!');
});

app.get('/protected-route', bearerAuth, (req, res) => {
  res.status(200).send('you are signed in, you have a token, you can see this!')
});

app.get('/anyone-can-access', (req, res) => {
  res.json({ msg: 'anyone can see this' });
});

mongoose.connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {
  app.listen(PORT, () => {
    console.log(`server up: ${PORT}`)
  });
})
.catch(e => console.error(e.message));