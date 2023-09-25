"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = head;
    head = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current) {
      result += `{ ${currrent.value} } -> `;
      current = current.next;
    }
    return result + "NULL";
  }
}

module.exports = LinkedList;
