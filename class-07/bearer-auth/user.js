'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const APP_SECRET = 'coolsecret'; // this should be in a .env file ;)

const users = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { toJSON: { virtuals: true }}); // you need to add the virtuals option if you are applying virtual fields / relationships

// this creates a "virtual" field on the users schema -> this just means another property in addition to username and password
// this token property never actually persists in the DB -> it's only available while I'm accessing data in the app
users.virtual('token').get(function() {
  let tokenObj = {
    username: this.username
  }

  return jwt.sign(tokenObj, APP_SECRET); // this makes a new token, which includes our username
});

// mongoose "hook" -> a "hook" is meant to "hook" into a function and have it happen at some point in the function process, ie: before save, after save -> the first arg here is a mongoose CRUD method
users.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 5);
});

// basic auth
users.statics.authenticateBasic = async function(username, password) {
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password);
 
  if(valid) return user; 
  throw new Error('invalid user');
}

// bearer auth
users.statics.authenticateToken = async function(token) {
  const parsedToken = jwt.verify(token, APP_SECRET);
  const user = await this.findOne({ username: parsedToken.username });

  if (user) return user;
  throw new Error('user not found');
}

module.exports = mongoose.model('users', users);