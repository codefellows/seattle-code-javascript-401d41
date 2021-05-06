'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/family');
const chore = process.argv.splice(2)[0];

socket.emit('newChore', chore);

socket.on('added', () => {
  socket.disconnect();
});