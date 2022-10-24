const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/10773/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = input.shift();

let stack = [];

for (let i = 0; i < n; i++) {
  if (!+input[i]) {
    stack.pop();
  } else {
    stack.push(input[i]);
  }
}

console.log(stack.reduce((acc, cur) => +acc + +cur, 0));
