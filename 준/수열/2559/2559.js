const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/수열/2559/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input.shift().split(" ");

const arr = input.join(" ").split(" ").map(Number);

let right = 0;
let sum = 0;
let count = 0;
let temp = 0;

let cnt = 0;

function fsum(right, sum, count) {
  if (count === +k) return sum;

  sum += arr[right];

  console.log(cnt++, sum);

  return fsum(right + 1, sum, count + 1);
}

while (right <= arr.length - k) {
  let sums = fsum(right, sum, count);

  if (temp < sums) {
    temp = sums;
  }

  right++;
}

// console.log(temp);
