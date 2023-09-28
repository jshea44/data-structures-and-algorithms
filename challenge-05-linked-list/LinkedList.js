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

  findKthFromEnd(k) {
    if (k < 1 || !this.head) {
      return null;
    }

    let fastPointer = this.head;
    let slowPointer = this.head;

    for (let i = 0; i < k; i++) {
      if (fastPointer.next) {
        fastPointer = fastPointer.next;
      } else {
        return null;
      }
    }

    while (fastPointer.next) {
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
    }

    return slowPointer.value;
  }
}

function zipLists(list1, list2) {
  if (!list1.head) {
    return list2;
  }
  if (!list2.head) {
    return list1;
  }

  const result = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  let currentResult = null;

  while (current1 && current2) {
    if (!result.head) {
      result.head = new Node(current1.value);
      currentResult = result.head;
    } else {
      currentResult.next = new Node(current1.value);
      currentResult = currentResult.next;
    }

    currentResult.next = new Node(current2.value);
    currentResult = currentResult.next;

    current1 = current1.next;
    current2 = current2.next;
  }

  // If one list is longer than the other
  while (current1) {
    currentResult.next = new Node(current1.value);
    currentResult = currentResult.next;
    current1 = current1.next;
  }

  while (current2) {
    currentResult.next = new Node(current2.value);
    currentResult = currentResult.next;
    current2 = current2.next;
  }

  return result;
}

module.exports = { LinkedList, zipLists };
