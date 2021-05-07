'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left; // left sub tree
    this.right = right; // right sub tree (not a right "value")
  }
}

module.exports = Node;