const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/11866/input.txt";

const [N, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const arr = Array.from({ length: N }, (v, i) => i + 1);

let answer = [];
let count = 0;

while (arr.length > 0) {
  // console.log(count, K - 1, arr);
  count = (count + K - 1) % arr.length;
  answer.push(arr[count]);
  arr.splice(count, 1);
}

console.log(`<${answer.join(", ")}>`);
