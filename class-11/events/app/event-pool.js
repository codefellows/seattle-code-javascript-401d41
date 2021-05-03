'use strict';

const Events = require('events'); // pull in the 1st party Events (aka EventEmitter) module
const events = new Events(); // instantiation of our application event pool

module.exports = events;