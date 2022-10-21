const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/그리디/1931/input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let arr = input.map((e) => e.split(" ").map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let count = 0;
let prevEnd = 0;
let start = 0;
let end = 0;

for (let i = 0; i < N; i++) {
  start = arr[i][0];
  end = arr[i][1];

  if (start < prevEnd) {
    continue;
  } else {
    count++;
  }

  prevEnd = end;
}

console.log(count);
