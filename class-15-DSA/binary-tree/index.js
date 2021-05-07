'use strict';

const BT = require('./binary-tree.js');
const Node = require('./node.js');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

one.left = two; // root node - all things cascade off of this
one.right = three; // this is our initial root node's right now
three.left = four;
three.right = five; 

let tree = new BT(one);

console.log('my binary tree:', tree);