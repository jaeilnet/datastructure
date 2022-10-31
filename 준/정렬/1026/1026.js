const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1026/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const [arr1, arr2] = input.map((e) => e.split(" ").map(Number));

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i] * arr2[i];
}

console.log(sum);
