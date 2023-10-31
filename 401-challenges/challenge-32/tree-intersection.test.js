"use strict";
const { treeIntersection } = require("./tree-intersection.js");
class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  traverse(callback) {
    function inOrder(node) {
      if (node) {
        inOrder(node.left);
        callback(node);
        inOrder(node.right);
      }
    }

    inOrder(this.root);
  }
}

describe("tree intersection function", () => {
  // Test case 1: Trees have common values
  test("Returns common values between two trees", () => {
    const tree1 = new BinaryTree(new TreeNode(1));
    tree1.root.left = new TreeNode(2);
    tree1.root.right = new TreeNode(3);

    const tree2 = new BinaryTree(new TreeNode(2));
    tree2.root.left = new TreeNode(3);
    tree2.root.right = new TreeNode(4);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([2, 3]);
  });

  // Test case 2: No common values
  test("Returns an empty array when no common values", () => {
    const tree1 = new BinaryTree(new TreeNode(1));
    tree1.root.left = new TreeNode(2);

    const tree2 = new BinaryTree(new TreeNode(3));
    tree2.root.left = new TreeNode(4);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
  });

  // Test case 3: Empty trees
  test("Returns an empty array when both trees are empty", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
  });
});
