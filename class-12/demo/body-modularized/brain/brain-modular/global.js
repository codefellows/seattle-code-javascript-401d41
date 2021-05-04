'use strict';

let globalConnection;

function defaultConnection(io) {
  globalConnection = io;
  globalConnection.on('connect', setupListeners);
}

// handlers
function setupListeners(socket) {

  console.log('CONNECTED', socket.id);
  socket.on('light', handleLight);
  socket.on('smell', handleSmell)

  function handleSmell(payload) {
    console.log('SERVER EVENT: smell', payload);
    globalConnection.emit('smell', payload);
  }

  function handleLight(payload) {
    // if(requests > 50 && lastRequestTime <= .0001)
    console.log('SERVER EVENT: light', payload);
    globalConnection.emit('brightness', payload);
  }

}
module.exports = defaultConnection;
