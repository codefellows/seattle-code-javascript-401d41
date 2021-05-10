'use strict';

const PORT = process.env.PORT || 3000;

const io = require('socket.io')(PORT);

io.on('connection', (socket) => {

  socket.on('hello', payload => {
    console.log(payload, 'said hi');
    socket.emit('welcome', `Welcome, ${payload}`);
  });

});
