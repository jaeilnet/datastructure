const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/25305/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, k] = input[0].split(" ").map(Number);
const x = input[1].split(" ").map(Number);

let temp = x[0];

let answer = [];

for (let i = 0; i < N; i++) {
  let result = 0;

  for (let j = 1; j < N - 1; j++) {
    console.log(x[i], x[j]);
    if (temp > x[j]) {
      result = x[i];
    } else {
      temp = x[i];
    }
  }

  console.log(result, "res");
}
