const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/누적합/11399/input.txt";

const [n, tc] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// const N = input.shift();
const arr = tc
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let time = 0;
let result = 0;

for (let el of arr) {
  console.log(el, time, result);
  time += el;
  result += time;
}

console.log(result);
