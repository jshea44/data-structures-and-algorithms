"use strict";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {
  if (!root) return;

  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}

module.exports = { TreeNode, breadthFirstTraversal };
