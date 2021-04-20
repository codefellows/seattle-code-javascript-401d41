'use strict'; // JS "strict mode"

const express = require('express');
const app = express();

const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

// global middleware for:
// handling the parsing of a req.body
app.use(express.json());
// log the req path and method on every incoming request
// we are missing some key API server constructs:
// - express global middleware for handling incoming req
// - custom 500 and 404 error handling middleware
// app.use(logger);

// GET http://localhost:3333?name=brian&cool=fun
app.get('/hello', (req, res) => {
  console.log(req.query); // { name: 'brian', cool: 'fun'}
  res.send('hello world!');
});

// GET http://localhost:3333/hello/brian
app.get('/hello/:person', (req, res) => {
  console.log('name:', req.params.person);
  res.send({ name: req.params.person });
})

// http://localhost:33333/hello/a/b
app.get('/hello/:person/:another', (req, res) => {
  console.log('params', req.params);
  res.send(req.params)
});

app.get('/cool', logger, square(5), (req, res) => {
  console.log(req.squared);
  res.json({ num: req.squared })
});

app.post('/test-post', (req, res) => {
  console.log(req.body);
  res.send('great, cool');
});

// function currying
function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next('not a number!');
    } else {
      req.squared = n * n;
      next();
    }
  }
}


// catch all route handles routes that arent found
app.use('*', notFound);
// handles generic server errors
app.use(errors);

// module.exports is a global object in nodejs
// it allows us to add things to it, so that we can use these things
// in another file -> we add stuff as an object or a method
// (for example, we will require this server file in our index and use it there)
module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server up: ${port}`);
    });
  }
}