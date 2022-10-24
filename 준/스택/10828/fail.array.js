const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/10828/input.txt";

const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let stack = [];
let answer = [];

for (let i = 0; i < n; i++) {
  switch (arr[i]) {
    case "top":
      answer.push(stack[stack.length - 1] || -1);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      answer.push(stack.length <= 0 ? 1 : 0);
      break;
    case "pop":
      answer.push(stack.pop() || -1);
      break;
    default:
      stack.push(arr[i].split(" ")[1]);
      break;
  }
}

console.log(answer.join("\n"));
