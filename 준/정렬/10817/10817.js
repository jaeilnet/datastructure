const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/10817/input.txt";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = input.sort((a, b) => a - b);

const total = arr.reduce((acc, cur) => acc + cur);

let answer = [];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum = arr[i] + arr[j];
    if (sum + 100 === total) {
      answer.push(arr[i], arr[j]);
    }
    if (answer.length > 0) break;
  }
}

const filter = arr.filter((e) => e !== answer[0] && e !== answer[1]);

console.log(filter.join("\n"));

// let arr;

// for (let i = 0; i < input.length; i++) {
//   for (let j = i + 1; j < input.length; j++) {
//     if (input.reduce((acc, cur) => acc + cur) === input[i] + input[j] + 100) {
//       arr = input.filter((e) => e !== input[i] && e !== input[j]);
//       break;
//     }
//   }
//   if (!!arr) break;
// }

// arr.sort((a, b) => a - b);

// console.log(arr.join("\n"));
