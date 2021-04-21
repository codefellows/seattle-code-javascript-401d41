const server = require('./src/server.js');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

dotenv.config();

server.start(PORT);