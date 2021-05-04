'use strict';

const io = require('socket.io-client');

/* ------ CONNECT ---------- */
let host = "http://localhost:3000";

const brainConnection = io.connect(host);

/* ---- LISTENERS ------- */
brainConnection.on('brightness', handleBrightness);

/* ---- EVENT HANDLERS ------- */

function handleBrightness(payload) {
  if (payload.level >= 90) { console.log('Close Eyes!') }
  else if (payload.level >= 50) { console.log('Squinting...') }
}

