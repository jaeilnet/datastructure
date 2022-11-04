const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/투포인트/3273/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const arr = input[0]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
const x = input[1];

let left = 0;
let right = arr.length - 1;

let count = 0;

while (left !== right) {
  let sum = arr[left] + arr[right];

  console.log(arr[left], arr[right], sum, +x, count);
  if (sum === +x) {
    count++;
    left++;
  } else if (sum > +x) {
    right--;
  } else {
    left++;
  }
}

console.log(count);
