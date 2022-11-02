const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/10799/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");

let stack = [];
let answer = 0;

for (let i in input) {
  if (input[i] === "(") {
    stack.push(input[i]);
  } else {
    if (input[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer++;
    }
  }
}

console.log(answer);
