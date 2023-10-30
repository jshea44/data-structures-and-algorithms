const HashTable = require("./hashtable.js");

describe("Hash Table class", () => {
  test("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    const hashTable = new HashTable(10);
    hashTable.set("apple", "red");
    expect(hashTable.has("apple")).toBe(true);
  });

  test("Retrieving based on a key returns the value stored", () => {
    const hashTable = new HashTable(10);
    hashTable.set("apple", "red");
    expect(hashTable.get("apple")).toEqual(["apple:red"]);
  });

  test("Successfully returns null for a key that does not exist in the hashtable", () => {
    const hashTable = new HashTable(10);
    expect(hashTable.get("banana")).toBeUndefined();
  });

  test("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    const hashTable = new HashTable(10);
    hashTable.set("apple", "red");
    hashTable.set("banana", "yellow");
    hashTable.set("cherry", "red");
    expect(hashTable.keys()).toEqual(["apple", "banana", "cherry"]);
  });

  test("Successfully handle a collision within the hashtable", () => {
    const hashTable = new HashTable(10);
    hashTable.set("apple", "red");
    hashTable.set("elppa", "green"); // Hash collision with "apple"
    expect(hashTable.has("apple")).toBe(true);
    expect(hashTable.has("elppa")).toBe(true);
  });

  test("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const hashTable = new HashTable(10);
    hashTable.set("apple", "red");
    hashTable.set("elppa", "green"); // Hash collision with "apple"
    expect(hashTable.get("apple")).toEqual(["apple:red", "elppa:green"]);
  });

  test("Successfully hash a key to an in-range value", () => {
    const hashTable = new HashTable(10);
    const hashValue = hashTable.hash("example");
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(10);
  });
});
