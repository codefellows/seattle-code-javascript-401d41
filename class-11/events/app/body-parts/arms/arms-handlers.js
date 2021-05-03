'use strict';

function coverEyes(payload) {
  if (payload.brightness >= 10) {
    console.log('wow, it is bright, i am covering my eyes with my arms!')
  }
}

module.exports = { coverEyes };