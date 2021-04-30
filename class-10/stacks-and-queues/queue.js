'use strict';

class Queue {
  constructor() {
    this.length = 0; // this length property is used to house the length AND is used as a way to enqueue/dequeue
    this.next = null; // this is important for dequeue - "next" hold the next value to dequeue
  }

  enqueue(value) {
    this[this.length] = value;
    this.length++;

    return this;
  }
}

let queue = new Queue();

console.log('empty queue', queue);
console.log('enqueue first', queue.enqueue(1));
console.log('enqueue second', queue.enqueue(2));
console.log('enqueue third', queue.enqueue(3));