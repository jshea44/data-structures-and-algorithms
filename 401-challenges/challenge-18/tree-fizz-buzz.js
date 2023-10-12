"use strict";

class Node {
  constructor(value, children) {
    this.value = value;
    this.children = children || [];
  }
}

function fizzBuzzTree(root) {
  if (root === null) {
    return null;
  }

  function fizzBuzz(value) {
    if (value % 3 === 0 && value % 5 === 0) {
      return "FizzBuzz";
    } else if (value % 3 === 0) {
      return "Fizz";
    } else if (value % 5 === 0) {
      return "Buzz";
    } else {
      return value.toString();
    }
  }

  function traverse(node) {
    const newNode = new Node(fizzBuzz(node.value), []);

    for (const child of node.children) {
      newNode.children.push(traverse(child));
    }

    return newNode;
  }

  return traverse(root);
}

module.exports = { Node, fizzBuzzTree };
