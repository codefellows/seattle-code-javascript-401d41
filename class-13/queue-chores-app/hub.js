'use strict';

const PORT = process.env.QUEUE_SERVER || 3000;
const uuid = require('uuid').v4;
const io = require('socket.io')(PORT);

// in-memory queue
const queue = {
  chores: {} // each chore is represented as "generated id" for the property ("12345") and the payload as the value
}

const family = io.of('/family');

// "socket" is representational of the client who connected to this server/namespace
family.on('connection', socket => {

  // this will added an item to the chores queue and let the family know
  socket.on('newChore', payload => {
    let id = uuid();
    queue.chores[id] = payload;
    console.log('current queue', queue);

    socket.emit('added'); // register the ability to "added" something with .on, which then disconnects the client so that they can add another chore
    family.emit('chore', {id, payload}); // this will broadcast to everyone in the family namespace that a new chore was added and it's chore details are: id, payload
  });

  // let the child see the list of their chores in the queue
  socket.on('getAll', () => {
    Object.keys(queue.chores).forEach(id => {
      socket.emit('chore', {id, payload: queue.chores[id] })
    })
  });

  // once a child has completed the chore, delete it from the queue
  socket.on('done', message => {
    delete queue.chores[message.id];
  });
})