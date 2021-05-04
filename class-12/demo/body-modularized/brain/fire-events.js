'use strict';

const { Socket } = require('socket.io-client');
const io = require('socket.io-client');

let host = 'http://localhost:3000';

const brainConnection = io.connect(host)
const dsConnection = io.connect(`${host}/digestive-system`);
const healthConnection = io.connect(`${host}/health-system`);

brainConnection.emit('light', { level: 45 })
brainConnection.emit('light', { level: 65 })
brainConnection.emit('light', { level: 90 })

brainConnection.emit('smell', { scent: 'flowers' })
brainConnection.emit('smell', { scent: 'vomit' })
brainConnection.emit('swallow', { item: '321 Cake' }) // ignored by the server

// Targeted event to the digestive system
dsConnection.emit('swallow', { item: 'Hot Dog' })

// Targeted to the health namespace
healthConnection.emit('cold', { affliction: 'Common Cold' })
healthConnection.emit('flu', { affliction: 'SARS-CoV2' })
healthConnection.emit('sugar', { count: 170 });
healthConnection.emit('sugar', { count: 23 });

