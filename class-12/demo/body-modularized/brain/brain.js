'use strict';

// brain.js

const port = process.env.PORT || 3000;

// Get our connections built

// This is the "/" (home) route
const io = require('socket.io')(port);

// Namespaces are segments of the server, routes, if you will.
// These allow users to connect to the server, but only pay attention to what's happening in these "areas"
const guts = io.of('/digestive-system');
const healthSystem = io.of('/health-system');


// Now, wire up each of the routes ...
// For each namespace (route), handle connections by:
// Noting the socket
// Wiring up any specific listeners that this hub needs to handle


// Global Hub (/) -- all connections and all events go to everyone
io.on('connection', (socket) => {

  console.log('CONNECTED', socket.id);

  socket.on('light', (payload) => {
    console.log('SERVER EVENT: light', payload);
    io.emit('brightness', payload);
  });

  socket.on('smell', (payload) => {
    console.log('SERVER EVENT: smell', payload);
    io.emit('smell', payload);
  })

})

// Digestion Hub (/digestive-system)
guts.on('connection', (socket) => {
  socket.on('swallow', (payload) => {
    guts.emit('swallow', payload);
  })
});

// Health Hub (/health-system)
healthSystem.on('connection', (socket) => {

  socket.on('cold', (payload) => {
    healthSystem.emit('bug', payload);
  })

  socket.on('flu', (payload) => {
    healthSystem.emit('bug', payload);
  })

  socket.on('sugar', (payload) => {
    healthSystem.emit('high-sugar', payload);
  })

})
