const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/1996/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
// console.log(input);

let answer = "";

for (let i = 1; i < input.length; i += 2) {
  let tc = input[i].split(" ").map(Number);

  let [j, k] = input[i - 1].split(" ").map(Number);

  let count = 0;

  while (true) {
    let max = Math.max(...tc);
    let num = tc.shift();

    if (max === num) {
      count++;

      if (k === 0) {
        answer += count + "\n";
        break;
      }
    } else {
      tc.push(num);
    }

    if (k === 0) {
      k = tc.length - 1;
    } else {
      k--;
    }
  }
}

console.log(answer.trim());
