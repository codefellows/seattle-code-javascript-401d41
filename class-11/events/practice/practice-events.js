'use strict';

// 1st party module/package - which means that it was installed with nodejs when you installed nodejs
// some other good 1st party packages:  util, path, querystring, assert, fs
const Events = require('events');
const events = new Events(); // this is our application event pool, which will include all registered events that we make

events.on('laugh', function() {
  console.log('hahahahahahaha');
});

events.on('logger', function() {
  console.log('i have emmitted a logger event');
  events.emit('laugh');
});

events.emit('logger');

events.on('someEventName', function() {
  console.log('do a thing');
});

events.emit('someEventName');