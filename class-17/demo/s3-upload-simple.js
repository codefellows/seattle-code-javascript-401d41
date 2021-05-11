'use strict';

exports.handler = (event, context, callback) => {
  console.log('event details', JSON.stringify(event, undefined, 2))
  return 's3 bucket trigger this';
}