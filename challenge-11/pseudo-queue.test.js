"use strict";

const PseudoQueue = require("./pseudo-queue.js");

describe("PseudoQueue", () => {
  it("should enqueue and dequeue elements in a first-in, first-out order", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);

    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
    expect(() => pseudoQueue.dequeue()).toThrowError("PseudoQueue is empty");
  });

  it("should handle enqueue and dequeue operations on an empty PseudoQueue", () => {
    const pseudoQueue = new PseudoQueue();

    expect(() => pseudoQueue.dequeue()).toThrowError("PseudoQueue is empty");

    pseudoQueue.enqueue(1);
    expect(pseudoQueue.dequeue()).toBe(1);
    expect(() => pseudoQueue.dequeue()).toThrowError("PseudoQueue is empty");
  });

  it("should correctly transfer elements between stacks when needed", () => {
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);

    expect(pseudoQueue.dequeue()).toBe(1);

    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(4);

    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
    expect(pseudoQueue.dequeue()).toBe(4);
    expect(() => pseudoQueue.dequeue()).toThrowError("PseudoQueue is empty");
  });
});
