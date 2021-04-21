'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const customRoutes = require('./routes/custom-routes.js');

const notFound = require('./errors/404.js');
const errors = require('./errors/500.js');

app.use(express.json());

app.use(logger);
app.use(customRoutes);

// these live at the bottom of your server
app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}