'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'guest', enum: ['guest', 'editor', 'admin'] }
}, { toJSON: { virtuals: true } });

usersSchema.virtual('time').get(function () {
  return new Date();
});

usersSchema.virtual('capabilities').get(function () {
  let acl = {
    guest: ['read'],
    editor: ['read', 'create', 'update'],
    admin: ['read', 'create', 'update', 'delete']
  }
  return acl[this.role];
});

usersSchema.virtual('token').get(function () {
  let tokenObject = {
    username: this.username
  }
  return jwt.sign(tokenObject, process.env.SECRET)
});

usersSchema.pre('save', async function () {
  // hash the password
  this.password = await bcrypt.hash(this.password, 5);
});

usersSchema.statics.authenticateBasic = async function (username, password) {
  // find the user
  const user = await this.findOne({ username })

  // validate the password
  const valid = await bcrypt.compare(password, user.password);

  // return the user or an error
  if (valid) { return user; }
  else { throw new Error('Invalid User'); }
};

usersSchema.statics.authenticateWithToken = async function (token) {
  const parsedToken = jwt.verify(token, process.env.SECRET)
  const user = await this.findOne({ username: parsedToken.username })
  if (user) { return user; }
  else { throw new Error("Invalid Login"); }
}


module.exports = mongoose.model('users', usersSchema);