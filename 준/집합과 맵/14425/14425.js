const fs = require("fs");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./준/집합과 맵/14425/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);

const list = input.splice(0, n);

const set = new Set(list);

let count = 0;

input.forEach((e) => {
  if (set.has(e)) ++count;
});

console.log(count);
