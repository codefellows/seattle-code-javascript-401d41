'use strict';

const { Consumer } = require('sqs-consumer');
 
const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/707851591631/queuetest',
  handleMessage: async (message) => {
    console.log(message.Body);
  }
});

app.start();
