'use strict';

exports.handler = async (event) => {
  console.log('trigger:', event);

  const a = event.body.a || 5;
  const b = event.body.b || 10;

  const sum = a + b;

  return JSON.stringify(`the sum of a + b is ${sum}`);
}

// TEST: put the following as your test event to test the above lambda
// 
// {
//   "body": {
//     "a": 100,
//     "b": 200
//   }
// }