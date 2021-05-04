'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

require('./digestive.js')(io);
require('./health.js')(io);
require('./global.js')(io);
