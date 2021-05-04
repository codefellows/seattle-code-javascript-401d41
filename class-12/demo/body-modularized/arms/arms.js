'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000'
// let host = 'https://myapp.herokuapp.com'
// let host = 'http://67857cc4fcf5.ngrok.io';

const brainConnection = io.connect(host);

brainConnection.on('brightness', payload => {
  if (payload.level >= 75) { console.log('Cover eyes with hand') }
})
