const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/집합과 맵/1620/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);

const name = new Map();
const num = new Map();

for (let i = 0; i < n; i++) {
  name.set(i + 1, input[i]);
  num.set(input[i], i + 1);
}

const quiz = input.slice(n, input.length);

// console.log(quiz);
let answer = "";
quiz.forEach((e) => {
  if (isNaN(e)) {
    answer += num.get(e) + "\n";
  } else {
    answer += name.get(+e) + "\n";
  }
});

console.log(answer);
