const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/9012/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = input.shift();

let answer = [];

for (let i = 0; i < n; i++) {
  let cnt = 0;

  for (let j = 0; j < input[i].length; j++) {
    cnt += input[i][j] === "(" ? 1 : -1;

    if (cnt < 0) break;
  }

  !cnt ? answer.push("YES") : answer.push("NO");
}

console.log(answer.join("\n"));
