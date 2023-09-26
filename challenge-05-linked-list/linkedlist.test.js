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

  test("Can successfully add a node to the end of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.append("test");
    expect(linkedList.toString()).toBe("{ 2 } -> { 1 } -> { test } -> NULL");
  });

  test("Can successfully add multiple nodes to the end of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.append("test");
    linkedList.append("test2");
    expect(linkedList.toString()).toBe(
      "{ 2 } -> { 1 } -> { test } -> { test2 } -> NULL"
    );
  });

  test("Can successfully insert a node before a node located in the middle of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertBefore(2, "test");
    expect(linkedList.toString()).toBe(
      "{ 3 } -> { test } -> { 2 } -> { 1 } -> NULL"
    );
  });

  test("Can successfully insert a node before the first node of a linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertBefore(3, "test");
    expect(linkedList.toString()).toBe(
      "{ test } -> { 3 } -> { 2 } -> { 1 } -> NULL"
    );
  });

  test("Can successfully insert after a node in the middle of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertAfter(2, "test");
    expect(linkedList.toString()).toBe(
      "{ 3 } -> { 2 } -> { test } -> { 1 } -> NULL"
    );
  });

  test("Can successfully insert a node after the last node of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insertAfter(1, "test");
    expect(linkedList.toString()).toBe(
      "{ 3 } -> { 2 } -> { 1 } -> { test } -> NULL"
    );
  });

  // linked-list-kth
  test("Where k is greater than the length of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.findKthFromEnd(4)).toBeNull();
  });

  test("Where k and the length of the list are the same", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.findKthFromEnd(3)).toBeNull();
  });

  test("Where k is not a positive integer", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.findKthFromEnd(-1)).toBeNull();
  });

  test("Where the linked list is of a size 1", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    expect(linkedList.findKthFromEnd(1)).toBeNull();
  });

  test("Happy Path where k is not at the end, but somewhere in the middle of the linked list", () => {
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);
    expect(linkedList.findKthFromEnd(3)).toBe(4);
  });
});
