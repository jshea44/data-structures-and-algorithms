"use strict";
const { HashTable } = require("../challenge-30-hashtable/hashtable.js");

function treeIntersection(tree1, tree2) {
  const hashTable = new HashTable(1024);

  tree1.traverse((node) => {
    hashTable.set(node.value, true);
  });

  const results = new Set();
  tree2.traverse((node) => {
    if (hashTable.get(node.value) !== null) {
      results.add(node.value);
    }
  });
  return Array.from(results);
}

module.exports = treeIntersection;
