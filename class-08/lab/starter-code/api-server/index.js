'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/food', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const server = require('./src/server.js');

server.start(3000);
