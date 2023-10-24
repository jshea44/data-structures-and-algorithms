"use strict";

function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i = i + 1;
  }
  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i = i + 1;
  }
  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];
  for (let j = 1; j < input.length; j++) {
    insert(sorted, input[j]);
  }
  return sorted;
}

module.exports = { insert, insertionSort };
