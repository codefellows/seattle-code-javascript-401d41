'use strict';

// global server that clients can connect to - our "brain" is that global thing
// this is a socket.io server because we are creating an "io" based server on PORT 3000
// sockets communicate at a TCP/network level, where as socket.io allows us to have an HTTP app
// that will handle the syn/syn-ack/ack packet tranmission process
const io = require('socket.io')(3000);

// setup of namespaces -> these are like "workspaces" in Slack
const guts = io.of('/digestive-system');
const health = io.of('/health-system');

// all clients have connected to my app
io.on('connection', socket => {
  console.log('client:', socket.id);

  // if any client emits a "light" event
  /// all connected clients will "hear" it
  socket.on('light', payload => {
    // emit to whatever you want here
    socket.broadcast.emit('light', { data: 'cool' });
  });

  socket.on('smell', payload => {
    // emit to whatever you want here
    console.log('smell', payload)
  });
});

// client connects to the namespace of "digestive-system"
guts.on('connection', socket => {
  // when the client emits an "eat" event
  socket.on('eat', (payload) => {
    // all clients in the eat namespace will see this
    // emit to all in this namespace
    console.log('eat', payload);
  });
});

health.on('connection', socket => {
  socket.on('sick', payload => {
    // all clients in the health namespace will see this
    // emit to all in this namespace
    console.log('sick', payload);
  });
});