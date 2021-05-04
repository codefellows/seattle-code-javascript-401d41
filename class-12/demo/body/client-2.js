'use strict';

const { Socket } = require('socket.io-client'); // this destructures and pulls whatever methods from a larger module
const io = require('socket.io-client');

const HOST = process.env.HOST || 'http://localhost:3000';

const digestiveConnection = io.connect(`${HOST}/digestive-system`);

digestiveConnection.emit('eat', { food: 'pizza' });
digestiveConnection.emit('eat', { food: 'apple' });