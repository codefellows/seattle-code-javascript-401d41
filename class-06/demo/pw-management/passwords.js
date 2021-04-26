'use strict';

const base64 = require('base-64'); // this is for encoding and decoding -> passing over the internet (happens on FE and BE)
const bcrypt = require('bcrypt'); // this is for actual pw management -> hash it to save it -> compare hash with a reg pass to confirm it

// ======  ENCODING VIA BASE 64 ========== //

let passwordStr = 'username:coolpw'; // we build this on the client
let encoded = base64.encode(passwordStr); // this encodes our un/pw so we can pass it over the internet
let decoded = base64.decode(encoded);

// console.log('encoded username/password:', encoded);
// console.log('decoded username/password:', decoded);

// ======  ENCRYPTION VIA BCRYPT  ========== //

let pw = 'cool@pw1!';
let complexity = 5; // complexity is aka "salt"

encrypt(pw, complexity);

async function encrypt(password, rounds) {
  let hashed = await bcrypt.hash(password, rounds);
  console.log('hashed pw:', hashed);

  let compare = await bcrypt.compare(password, hashed);
  console.log('is hash the same as plain text password', compare);
}

