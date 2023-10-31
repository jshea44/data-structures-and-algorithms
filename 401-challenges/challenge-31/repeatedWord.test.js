const HashTable = require("./repeatedWord.js");

describe("Hash Table class", () => {
  test("Finding the first repeated word in a string", () => {
    const hashTable = new HashTable(10);

    // Test when there's a repeated word
    const inputStringWithRepeat = "This is a test. This is a test.";
    expect(hashTable.repeatedWord(inputStringWithRepeat)).toBe("this");

    // Test when there's no repeated word
    const inputStringNoRepeat = "No repeated words in this string.";
    expect(hashTable.repeatedWord(inputStringNoRepeat)).toBe(null);

    // Test with case-insensitive repeated word
    const inputStringCaseInsensitive = "Repeated Word repeated Word";
    expect(hashTable.repeatedWord(inputStringCaseInsensitive)).toBe("repeated");
  });
});
