'use strict';

const express = require('express');
const cors = require('cors');
const faker = require('faker');
const io = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000'

// connect our socket.io client to a socket.io server that lives on PORT 3000, then connect us to the namespace of "caps"
const socket = io.connect(`${SERVER_URL}/caps`);

const app = express();
const PORT = process.env.PORT || 3001; // port of 3000 is already locked up -> our server hub lives on that

app.use(cors()); // open our API to all
app.use(express.json()); // allow for POST / PUT requests with a req.body
app.use(express.urlencoded({ extended: true })); // ensure req.body can be sent from a <form>

// THIS IS OUR API ROUTE, WHICH KICKS OFF COMMUNICATION WITH OUR SERVER HUB
app.post('/pickup', (req, res) => {
  let pckg = req.body || {
    store: '1-800-flowerz',
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.streetAddress()
  }

  socket.emit('pickup', pckg);
  res.status(200).send('your package was scheduled');
});

app.listen(PORT, () => {
  console.log(`API Server up! ${PORT}`)
});