'use strict';

// "Guts" namespace
let digestiveSystem;

// Export this function, which lets the brain register all the guts listeners
function guts(io) {
  digestiveSystem = io.of('/digestive-system');
  digestiveSystem.on('connection', setupListeners);
}

function setupListeners(socket) {

  // Setup all of our listeners
  socket.on('swallow', handleSwallow);

  function handleSwallow(payload) {
    digestiveSystem.emit('swallow', payload);
  }

}

module.exports = guts;
