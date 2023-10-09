"use strict";

const { BinarySearchTree } = require("./tree-max.js");

describe("BinarySearchTree", () => {
  it("should return undefined when the tree is empty", () => {
    const tree = new BinarySearchTree();
    expect(tree.findMax()).toBeUndefined();
  });

  it("should find the largest value correctly", () => {
    const tree = new BinarySearchTree();
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(12);
    tree.add(17);

    expect(tree.findMax()).toBe(17); // The largest value is 17
  });
});
