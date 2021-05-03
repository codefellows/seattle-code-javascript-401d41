'use strict';

const events = require('./event-pool.js');

require('./body-parts/eyes/eyes.js');
require('./body-parts/arms/arms.js');

// payload basically means "container object" to hold our data
events.on('light-detected', payload => {
  events.emit('light', { brightness: payload }) // { brightness: 73 } -> payload.brightness
});

// on('customEvent') 
// emit('customEvent') 