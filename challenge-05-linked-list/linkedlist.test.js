"use strict";

const LinkedList = require("./LinkedList.js");

describe("Testing Linked List class", () => {
  test("Can successfully instantiate an empty linked list", () => {
    let linkedList = new LinkedList();

    expect(linkedList.head).toEqual(null);
  });

  test("Can properly insert into the linked list", () => {
    let linkedList = new LinkedList();
    const value = "test";
    linkedList.insert(value);
    expect(linkedList.includes(value)).toBe(true);
  });

  test("The head property will properly point to the first node in the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.head.value).toBe(1);
  });

  test("Can properly insert multiple nodes into the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.toString()).toBe("{ 3 } -> { 2 } -> { 1 } -> NULL");
  });

  test("Will return true when finding a value within the linked list that exists", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.includes(2)).toBe(true);
  });

  test("Will return false when searching for a value in the linked list that does not exist", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.includes(4)).toBe(false);
  });

  test("Can properly return a collection of all the values that exist in the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.toString()).toBe("{ 3 } -> { 2 } -> { 1 } -> NULL");
  });
});
