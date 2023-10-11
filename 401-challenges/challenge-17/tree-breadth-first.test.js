"use strict";

const { breadthFirstTraversal, TreeNode } = require("./tree-breadth-first.js");

describe("Breadth-First Tests", () => {
  test("Breadth-First Traversal: Empty Tree", () => {
    const root = null;

    const result = [];
    const originalLog = console.log;
    console.log = jest.fn((...args) => result.push(...args));

    breadthFirstTraversal(root);

    expect(result).toEqual([]);
    console.log = originalLog;
  });

  test("Breadth-First Traversal: Large Tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);
    root.right.left = new TreeNode(6);
    root.right.right = new TreeNode(7);

    const result = [];
    const originalLog = console.log;
    console.log = jest.fn((...args) => result.push(...args));

    breadthFirstTraversal(root);

    const expectedOutput = [1, 2, 3, 4, 5, 6, 7];

    expect(result).toEqual(expectedOutput);
  });
});
