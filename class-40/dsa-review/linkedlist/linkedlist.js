const linkedlist = { head: { value: 'a', next: { value: 'b', next: { value: 'c', next: { value: 'd', next: null } } } } };

const traverse = (ll) => {
  // print (log) all values in the list

  let current = ll.head; // start our traversal at the first node -> we have that set as the head

  // traverse through the list, log the node, reset the node we are actively on to the next node
  while(current) {
    console.log('ll node:', JSON.stringify(current, true, 6));
    current = current.next;
  }
}

const search = (ll, find) => {
  // return the node that we are "finding"

  let current = ll.head;

  while(current) {
    if (current.value === find) {
      console.log(current);
      return current
    }
    current = current.next;
  }
}

const add = (ll, node) => {
  // add to the end of the linked list

  let current = ll.head;

  if (!ll.head) ll.head = node;

  while(current.next) {
    current = current.next;
  }

  current.next = node;
  // console.log(JSON.stringify(ll, true, 6));
}

traverse(linkedlist);
search(linkedlist, 'c');
// add(linkedlist, { value: 'e', next: null })