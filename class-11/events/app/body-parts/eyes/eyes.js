'use strict';

const events = require('../../event-pool.js');

events.on('light', pupil);
events.on('light', eyelid);

function pupil(payload) {
  console.log('eyes are dialated at:', payload.brightness, '%');
}

function eyelid(payload) {
  if(payload.brightness >= 75) {
    console.log('my eyes are squinting');
  }
}

setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);

  events.emit('light-detected', brightness);
}, 2000);

module.exports = { pupil, eyelid };

// events.on('thing') -> registers it
// events.emit('thing') -> fires it