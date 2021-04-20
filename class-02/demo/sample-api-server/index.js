'use strict';

// 3rd party dependencies
const dotenv = require('dotenv');
// internal modules - files/modules that we make
const server = require('./src/server.js');

// application constants and config
dotenv.config();
const PORT = process.env.PORT || 3000;

// file logic
server.start(PORT);