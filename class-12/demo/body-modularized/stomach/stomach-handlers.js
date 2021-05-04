'use strict';


const handlers = {};

handlers.smell = (payload) => {
  if (payload.scent === "vomit") { console.log('coming out the way it came in') }
};

handlers.swallow = (payload) => {
  console.log(`System Processing ${payload.item}`);
};

handlers.highSugar = (payload) => {
  if (payload.count >= 160) { console.log('Pancreas get to work') }
  if (payload.count <= 40) { console.log('Take a sugar pill') }
};

module.exports = handlers;
