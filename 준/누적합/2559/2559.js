// 실패

const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/누적합/2559/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");

let arr = input.shift().split(" ").map(Number);
const abc = arr.filter((e) => Number.isInteger(e));
const max = Math.max(...abc);
const index = arr.findIndex((e) => e === max);

let left = 1;
let right = 1;

let count = 0;
let sum = arr[index];

while (count < M - 1) {
  if (
    Number.isInteger(arr[index + right]) &&
    arr[index - left] < arr[index + right]
  ) {
    sum += arr[index + right];
    right++;
  } else if (
    Number.isInteger(arr[index - left]) &&
    arr[index - left] > arr[index + right]
  ) {
    sum += arr[index - left];
    left++;
  } else {
    if (!arr[index - left]) {
      sum += arr[index + right];
      right++;
    } else if (!arr[index + right]) {
      sum += arr[index - left];
      left++;
    } else {
      // break;
    }
  }

  count++;
}

console.log(sum);
