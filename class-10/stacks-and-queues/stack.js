'use strict';

// our Stack constructor needs to keep track of how many items are in the stack
// STACK - FILO (first in last out)
function Stack() {
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this[this.length++] = value;
  return this;
}

Stack.prototype.pop = function() {
  if (this.length === 0) return 'sorry - empty stack';

  let result = this[--this.length];

  delete this[this.length];
  return result;
}

Stack.prototype.peek = function() {
  // TODO: show me the "top" item in the stack, just don't remove it - that's what .pop does
}

let stack = new Stack();

console.log('empty stack', stack);
console.log('stack with 1 item', stack.push('first'));
console.log('stack with 2 items', stack.push('second'));
console.log('stack with 3 items', stack.push('third'));

console.log('popped off the stack', stack.pop());

console.log('stack after pop:', stack);


console.log('popped off the stack', stack.pop());

console.log('popped off the stack', stack.pop());

console.log('empty stack', stack);

console.log('empty stack attempting to be popped', stack.pop());