'use strict';

// 3rd party npm dependencies
const express = require('express'); // gives us a framework for building APIs
const bcrypt = require('bcrypt'); // encryption
const base64 = require('base-64'); // encoding / decoding -> we decode on the backend
const cors = require('cors'); // opens up our server for any domain to access
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // connects us to the DB -> gives us methods like .save(), .find()

// application constants
const app = express();
dotenv.config();

// BASIC CONFIGURATION FOR A PRO LEVEL SERVER
app.use(express.json()); // this handles parsing of a req.body on POST/PUT
app.use(cors()); // let anyone use this app
app.use(express.urlencoded({ extended: true })) // this processes form input on the req.body

// Create a user schema (aka user mongoose model) -> this is the blueprint for when a user signs up -> this is used to instantiate a new User on sign up
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('users', userSchema);

// create 2 routes, one for sign up - the other for sign in


// http://localhost:3000/sign-up
// req.body = { username: 'newusername', password: '12345' }
app.post('/sign-up', async (req, res) => {
  // on sign-up, we do these steps:
  // 1: immediately hash the password (it comes off the req.body)
  req.body.password = await bcrypt.hash(req.body.password, 10);
  // 2: after hashing the pw, create a new user with a username and the hashed pw we just made
  const user = new User(req.body);
  // save the new user to the db
  const record = await user.save();
  // send back "great job, you are signed in now"
  res.status(200).json(record);
});

// this route is meant to extract a username and password and "COMPARE" the password
// with the hashed one in the database

// req.headers -> contains meta info about the request
// req.headers.authorization -> this will contain our username and password as base64 encoded strings
app.post('/login', async (req, res) => {
  // this is considered "Basic Authorization" -> username & password
  let basicAuthComponents = req.headers.authorization.split(' ');
  let encoded = basicAuthComponents.pop(); // 'anskns:ljkdsfnsdkn'
  let decoded = base64.decode(encoded);
  let [username, password] = decoded.split(':'); // ['username', 'actualpassword'];

  const user = await User.findOne({ username: username });
  const valid = await bcrypt.compare(password, user.password);

  if (valid) {
    res.status(200).send('logged in!')
  } else {
    res.status(500).send('invalid user');
  }
});

// setup the db connection and then start our server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`server up on ${process.env.PORT}`));
  })
  .catch(e => console.error(e));