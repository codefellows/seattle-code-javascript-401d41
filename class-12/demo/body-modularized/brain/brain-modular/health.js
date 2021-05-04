'use strict';

// "healthSystem" namespace
let healthSystem;

// Export this function, which lets the brain register all the health system listeners
function health(io) {
  healthSystem = io.of('/health-system');
  healthSystem.on('connection', setupListeners);

  function setupListeners(socket) {
    socket.on('cold', handleCold);
    socket.on('flu', handleCold);
    socket.on('sugar', handleHighSugar);

    function handleCold(payload) {
      healthSystem.emit('bug', payload);
    };

    function handleHighSugar(payload) {
      healthSystem.emit('high-sugar', payload);
    }

  }
}

module.exports = health;
