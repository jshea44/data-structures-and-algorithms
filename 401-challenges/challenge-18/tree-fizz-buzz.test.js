"use strict";

const { Node, fizzBuzzTree } = require("./tree-fizz-buzz.js");

describe("fizzBuzzTree", () => {
  it("should handle an empty tree", () => {
    const tree = null;
    const result = fizzBuzzTree(tree);
    expect(result).toBeNull();
  });

  it("should replace values in the tree according to Fizz Buzz rules", () => {
    const tree = new Node(15, [
      new Node(3, [new Node(7), new Node(10)]),
      new Node(5, [new Node(9)]),
      new Node(4),
    ]);
    const result = fizzBuzzTree(tree);

    const expectedTree = new Node("FizzBuzz", [
      new Node("Fizz", [new Node("7"), new Node("Buzz")]),
      new Node("Buzz", [new Node("Fizz")]),
      new Node("4"),
    ]);

    console.log("Received:", JSON.stringify(result, null, 2));
    console.log("Expected:", JSON.stringify(expectedTree, null, 2));

    expect(result).toEqual(expectedTree);
  });

  it("should convert all non-divisible values to strings", () => {
    const tree = new Node(2, [new Node(7, [new Node(11)]), new Node(8)]);
    const result = fizzBuzzTree(tree);

    const expectedTree = new Node("2", [
      new Node("7", [new Node("11")]),
      new Node("8"),
    ]);

    expect(result).toEqual(expectedTree);
  });
});
