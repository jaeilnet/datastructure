const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/그리디/11047/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");

const filter = input.filter((e) => M / e >= 1);

let count = 0;
let answer = 0;
let num = M;

for (let i = filter.length - 1; i >= 0; i--) {
  if (num / filter[i]) {
    count = Math.floor(num / filter[i]);
    answer += count;
    num -= count * filter[i];
  }
}

console.log(answer);
