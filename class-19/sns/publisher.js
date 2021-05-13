'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:707851591631:testsns';

const payload = {
  Message: 'test message from our test sns service',
  TopicArn: topic,
};

// sns is a instance from the AWS SNS module
// and it gives us the ability to publish a message
// with details from up above (payload)
sns.publish(payload).promise()
  .then(data => {
    console.log(data);
  })
  .catch(console.error);
