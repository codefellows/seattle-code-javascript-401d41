'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    // instantiate a new node to add to our LL
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      // traversal happens here
      let current = this.head; // start the traversal at the beginning (head) of the LL

      while(current.next) { // this is the actual traversal
        current = current.next; // this moves you along in your traversal
      }

      current.next = node;
    }

    return this;
  }
}

module.exports = LinkedList;