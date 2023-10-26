"use strict";

function mergeSort(arr) {
  let n = arr.lenth;

  if (n > 1) {
    let mid = n/2;
    let left = arr[0...mid]; //what is this
    let right = arr[mid...n]; // and this

    mergeSort(left);
    mergeSort(right);
    mergeSort(left, right, arr);
  }

  mergeSort(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;

    while(i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i = i + 1;
      } else {
        arr[k] = right[j];
        j = j + 1;
      }

      k = k + 1;
    }
    if (i === left.length) {
      // set remaining entries in arr to remaining values in right
    } else {
      // set remaining entries in arr to remaining values in left
    }
  }
}
