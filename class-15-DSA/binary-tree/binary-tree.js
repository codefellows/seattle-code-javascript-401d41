'use strict';

[1,2,3,4,5,6,7,87].sort();

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // DFS - depth first search traversal methods (recursive)
  // Legend:  D - data    L - left     R - right
  preOrder() {
    // Read, Left, Right
    let results = [];

    let _walk = node => {
      results.push(node.value) // read the data first (pre-order)
      if (node.left) _walk(node.left); // go left - if node.left is null, we are at a leaf
      if (node.right) _walk(node.right); // go right - if node.right is null, we are at a leaf
    }

    _walk(this.root); // kick off of our recursive _walk method
    return results;
  }

  inOrder() {
    // Left, Read, Right
    let results = [];

    let _walk = node => {
      // a recursive function calls itself
      if (node.left) _walk(node.left); // go left - if node.left is null, we are at a leaf
      results.push(node.value) // read the data in the middle (in-order)
      if (node.right) _walk(node.right); // go right - if node.right is null, we are at a leaf
    }

    _walk(this.root); // kick off of our recursive _walk method
    return results;
  }

  postOrder() {
    // Left, Right, Read
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left); // go left - if node.left is null, we are at a leaf
      if (node.right) _walk(node.right); // go right - if node.right is null, we are at a leaf
      results.push(node.value) // read the data after going left/right - post
    }

    _walk(this.root); // kick off of our recursive _walk method
    return results;
  }
}

module.exports = BinaryTree;