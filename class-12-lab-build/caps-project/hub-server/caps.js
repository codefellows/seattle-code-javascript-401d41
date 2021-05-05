'use strict';

const PORT = process.env.PORT || 3000;
const io = require('socket.io')(PORT);

io.on('connection', socket => {
  // log the client id that has connected to this app
  console.log('connected user - server:', socket.id);
});

const caps = io.of('/caps');

caps.on('connection', socket => {

  // log the client id that has connected to this namespace
  console.log('connected user - namespace:', socket.id);

  // this event of on "join" is our own event that will are registering
  socket.on('join', room => {
    console.log('room name:', room);
    // this method is built into socket.io to handle the actual joining of a
    socket.join(room);
  })

  socket.on('pickup', payload => {
    logger('pickup', payload);
    caps.emit('pickup', payload);
  });

  // socket -> represents a connected client that is in the namespace of "caps"
  socket.on('in-transit', payload => {
    logger('in-transit', payload);
    // namespace.to(store).emit('event', data) ->
    caps.to(payload.store).emit('in-transit', payload);
  });

  socket.on('delivered', payload => {
    logger('delivered', payload);
    caps.to(payload.store).emit('delivered', payload);
  });

});

// log the time an action takes place
// log the action and the data being passed

// this type of function is considered a "helper"
// because it is used to "help" supply information/functionality only in this file
function logger(event, payload) {
  let timestamp = new Date();
  console.log({ timestamp, event, payload }); // object destructuring
}