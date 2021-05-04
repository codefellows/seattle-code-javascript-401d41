'use strict';

const io = require('socket.io-client');

// CONNECT
let host = 'http://localhost:3000';

// We have two connections, one to the global pool, and another socket to the health system notifications
const brainConnection = io.connect(host);
const healthConnection = io.connect(`${host}/health-system`);

// LISTENERS
brainConnection.on('smell', handleSmell);
healthConnection.on('bug', handleBug);

// EVENT HANDLERS
function handleSmell(payload) {
  console.log(`I smell ${payload.scent}`);
}

function handleBug(payload) {
  console.log(`Fighting off ${payload.affliction}`)
}
