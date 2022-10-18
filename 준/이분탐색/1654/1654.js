const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/이분탐색/1654/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input
  .shift()
  .split(" ")
  .map((a) => +a);

const lines = input.map((a) => +a).sort((a, b) => a - b);

let max = Math.max(...lines);
let min = 1;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);

  let line = lines
    .map((line) => Math.floor(line / mid))
    .reduce((acc, cur) => (acc += cur), 0);

  if (line >= k) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
