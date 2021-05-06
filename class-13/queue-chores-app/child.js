'use strict';

const client = require('socket.io-client');
const socket = client.connect('http://localhost:3000/family');

socket.emit('getAll');

socket.on('chore', message => {
  console.log('new chore is:', message.payload);
  socket.emit('done', message);
});