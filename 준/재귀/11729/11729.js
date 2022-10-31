const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/재귀/11729/input.txt";

const input = fs.readFileSync(filePath).toString();

let answer = [];
let count = 0;

const hanoi = (n, start, mid, end) => {
  if (n === 0) return;
  else {
    hanoi(n - 1, start, end, mid);
    answer.push([start, end]);
    hanoi(n - 1, mid, start, end);
  }
  count++;
};

const solution = (n) => {
  hanoi(n, 1, 2, 3);

  return answer;
};

solution(input);

console.log(count);
console.log(answer.map((e) => e.join(" ")).join("\n"));
