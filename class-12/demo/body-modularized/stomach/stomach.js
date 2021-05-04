'use strict';

const io = require('socket.io-client');
const handlers = require('./stomach-handlers.js'); // our handlers are in a different module ...

// Connect to the global and 2 other namespaces
let host = 'http://localhost:3000';

const brainConnection = io.connect(host);
const dsConnection = io.connect(`${host}/digestive-system`);
const healthConnection = io.connect(`${host}/health-system`);

// Listeners
brainConnection.on('smell', handlers.smell);
dsConnection.on('swallow', handlers.swallow);
healthConnection.on('high-sugar', handlers.highSugar);
