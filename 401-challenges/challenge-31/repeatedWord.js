"use strict";
const LinkedList = require("../challenge-30-hashtable/linkedList.js");

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let string = JSON.stringify(key);
    let sum = 0;
    for (let char of string) {
      sum += char.charCodeAt(0);
    }
    let largeNum = sum * 599;
    let hash = largeNum % this.size;
    return hash;
  }

  set(key, value) {
    let hash = this.hash(key);
    let payload = `${key}:${value}`;
    let values = this.buckets[hash];
    if (!values) {
      let list = new LinkedList();
      list.add(payload);
      this.buckets[hash] = list;
    } else {
      values.add(payload);
    }
  }

  get(key) {
    let hash = this.hash(key);
    let list = this.buckets[hash];
    if (!list) {
      console.log("NO VALUES PRESENT FOR GIVEN KEY");
      return;
    } else {
      return list.values();
    }
  }

  has(key) {
    let hash = this.hash(key);
    let list = this.buckets[hash];
    return !!list;
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.size; i++) {
      let list = this.buckets[i];
      if (list) {
        let listKeys = list.values().map((entry) => {
          const [key, _] = entry.split(":");
          return key;
        });
        keys = keys.concat(listKeys);
      }
    }
    return keys;
  }

  repeatedWord(inputString) {
    const wordTable = new HashTable(this.size);
    const words = inputString.toLowerCase().split(/\s+/); // Split by whitespace and lowercase

    for (const word of words) {
      if (wordTable.has(word)) {
        return word; // Found a repeated word
      }
      wordTable.set(word, true);
    }

    return null; // No repeated words found
  }
}

module.exports = HashTable;
