'use strict';

// this is the client library -> which talks to a server that uses the server library (socket.io)
const io = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000'

const socket = io.connect(`${SERVER_URL}/caps`);

socket.on('pickup', payload => {

  // every 2 seconds -> put an item in-transit status
  setTimeout(() => {
    socket.emit('in-transit', payload);
  }, 5000);

  // every 2 seconds -> put the item in delivered status
  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 5000);

});