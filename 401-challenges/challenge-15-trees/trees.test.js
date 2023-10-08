"use strict";

const { Node, BinaryTree, BinarySearchTree } = require("./trees.js");

describe("Binary Tree and Binary Search Tree Tests", () => {
  let binaryTree;
  let binarySearchTree;

  beforeEach(() => {
    binaryTree = new BinaryTree();
    binarySearchTree = new BinarySearchTree();
  });

  test("Can successfully instantiate an empty tree", () => {
    expect(binaryTree.root).toBeNull();
    expect(binarySearchTree.root).toBeNull();
  });

  test("Can successfully instantiate a tree with a single root node", () => {
    binaryTree.root = new Node(1);
    binarySearchTree.root = new Node(1);

    expect(binaryTree.root.value).toBe(1);
    expect(binarySearchTree.root.value).toBe(1);
  });

  test("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
    binarySearchTree.add(2);
    binarySearchTree.add(1);
    binarySearchTree.add(3);

    expect(binarySearchTree.root.value).toBe(2);
    expect(binarySearchTree.root.left.value).toBe(1);
    expect(binarySearchTree.root.right.value).toBe(3);
  });

  test("Can successfully return a collection from a pre-order traversal", () => {
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);

    expect(binaryTree.preOrder()).toEqual([1, 2, 3]);
  });

  test("Can successfully return a collection from an in-order traversal", () => {
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);

    expect(binaryTree.inOrder()).toEqual([2, 1, 3]);
  });

  test("Can successfully return a collection from a post-order traversal", () => {
    binaryTree.root = new Node(1);
    binaryTree.root.left = new Node(2);
    binaryTree.root.right = new Node(3);

    expect(binaryTree.postOrder()).toEqual([2, 3, 1]);
  });
});
