"use strict";

const Queue = require("./queue.js");

describe("Queue", () => {
  it("Can successfully enqueue into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
  });

  it("Can successfully enqueue multiple values into a queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    const queue = new Queue();
    queue.enqueue(1);
    const dequeuedValue = queue.dequeue();
    expect(dequeuedValue).toEqual(1);
    expect(queue.isEmpty()).toBe(true);
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("Can successfully instantiate an empty queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it("Calling dequeue on an empty queue raises an exception", () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });

  it("Calling peek on an empty queue raises an exception", () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow("Queue is empty");
  });
});
