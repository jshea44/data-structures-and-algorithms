"use strict";

const Stack = require("./stack.js");

describe("Stack tests", () => {
  it("Should push a value to a stack", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.peek()).toEqual(1);
  });
  it("Can successfully push multiple values onto a stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toEqual(3);
  });

  it("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push(1);
    const poppedValue = stack.pop();
    expect(poppedValue).toEqual(1);
    expect(stack.isEmpty()).toBe(true);
  });

  it("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it("Can successfully instantiate an empty stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it("Calling pop on an empty stack raises an exception", () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow("Stack is empty");
  });

  it("Calling peek on an empty stack raises an exception", () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow("Stack is empty");
  });
});
