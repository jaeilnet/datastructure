const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/집합과 맵/1764/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);

// const newArr = input.splice(0, n);

const listen = new Set();
const showen = new Set();

for (let i = 0; i < input.length; i++) {
  if (i < n) {
    listen.add(input[i]);
  } else {
    showen.add(input[i]);
  }
}

let answer = [];

showen.forEach((e) => {
  if (listen.has(e)) {
    answer.push(e);
  }
});

answer.sort();
console.log(answer.length + "\n" + answer.join("\n"));
