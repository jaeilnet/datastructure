const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/2587/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const mid = Math.floor(input.length / 2);

console.log(input.reduce((acc, cur) => acc + cur) / input.length);
console.log(input.sort((a, b) => a - b)[mid]);
