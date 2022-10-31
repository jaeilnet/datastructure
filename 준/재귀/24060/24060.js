const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/재귀/24060/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map((v) => +v));

const [[n, k], arr] = input;

const merge = (arr1, arr2) => {
  let result = [];
  let [i, j] = [0, 0];

  while (i < arr1.length && j < arr2.length) {
    if (arr2[i] > arr1[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }

    cnt++;
    if (cnt === k) target = result[result.length - 1];
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    cnt++;
    if (cnt === k) target = result[result.length - 1];
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    cnt++;
    if (cnt === k) target = result[result.length - 1];
  }

  return result;
};

let cnt = 0;
let target;

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

mergeSort(arr);

if (!target) target = -1;

console.log(target);
