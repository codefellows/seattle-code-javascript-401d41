'use strict';

const { Socket } = require('socket.io-client'); // this destructures and pulls whatever methods from a larger module
const io = require('socket.io-client');

const HOST = process.env.HOST || 'http://localhost:3000';

const brainConnection = io.connect(HOST);
const digestiveConnection = io.connect(`${HOST}/digestive-system`);
const healthConnection = io.connect(`${HOST}/health-system`);

brainConnection.emit('light', { level: 45 });
brainConnection.emit('light', { level: 85 });
brainConnection.emit('light', { level: 15 });

brainConnection.emit('smell', { smellLevel: 'awful' });
brainConnection.emit('smell', { smellLevel: 'fresh AF' });

digestiveConnection.emit('eat', { food: 'pizza' });
digestiveConnection.emit('eat', { food: 'apple' });

healthConnection.emit('sick', { problem: 'feel sick AF' })
healthConnection.emit('sick', { problem: 'flu, not covid' })