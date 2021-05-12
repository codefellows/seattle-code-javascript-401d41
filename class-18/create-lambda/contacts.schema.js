'use strict';

const dynamoose = require('dynamoose');

const contactSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String
});

module.exports = dynamoose.model('contacts', contactSchema);