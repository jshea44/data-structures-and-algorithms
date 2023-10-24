"use strict";

const { insert, insertionSort } = require("./insertion-sort.js");

describe("Testing the functionality of insert and insertionSort functions.", () => {
  it("Should sort an array of integers.", () => {
    //code goes here
    const arr = [8, 4, 23, 42, 16, 15];
    const result = insertionSort(arr);
    const expected = [4, 8, 15, 16, 23, 42];
    expect(result).toEqual(expected);
  });

  it("Should return undefined when given an empty array in the input.", () => {
    const arr = [];
    const result = insertionSort(arr);
    expect(result).toEqual([undefined]);
  });
});
