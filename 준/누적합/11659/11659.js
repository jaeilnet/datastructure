const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/누적합/11659/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

input.shift();
const map = input.shift().split(" ").map(Number);
const tc = input.map((item) => item.split(" ").map(Number));

const arr = Array.from({ length: map.length + 1 }).fill(0);

map.forEach((e, i) => {
  arr[i + 1] = arr[i] + e;
});

let answer = "";

tc.forEach((e) => {
  answer += arr[e[1]] - arr[e[0] - 1] + "\n";
});

console.log(answer);

// const input = fs.readFileSync(filePath).toString().trim().split("\n");

// const [n, m] = input.shift().split(" ");
// const arr = input.shift().split(" ").map(Number);

// input.forEach((e) => {
//   const [start, end] = e.split(" ");

//   let left = start - 1;
//   let sum = 0;

//   for (let i = left; i < arr.length; i++) {
//     if (end <= i) {
//       break;
//     }
//     console.log(arr[left], start, end, i);

//     // 5 1 3 0
//     // 4 1 3 1
//     // 3 1 3 2
//     // 12

//     // 4 2 4 1
//     // 3 2 4 2
//     // 2 2 4 3
//     // 9

//     // 1 5 5 4
//     // 1

//     sum += arr[left];
//     left++;
//   }
//   console.log(sum, "\n");
// });

// const sumArr = Array.from({ length: map.length + 1 }).fill(0);
// map.forEach((v, i) => {
//   sumArr[i + 1] = sumArr[i] + v;
// });

// let answer = "";
// TCs.forEach((TC) => {
//   answer += sumArr[TC[1]] - sumArr[TC[0] - 1] + "\n";
// });
// console.log(answer);
