"use strict";

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    // this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
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
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    return result + "NULL";
  }

  append(value) {
    let current = this.head;
    let newNode = new Node(value);

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    current.next = newNode;
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    current.next = newNode;
  }
}

module.exports = LinkedList;
