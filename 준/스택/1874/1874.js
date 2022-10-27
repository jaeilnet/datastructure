const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/1874/input.txt";

const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = [];
let stack = [];

let count = 1;

for (let i = 0; i < n; i++) {
  let num = arr[i];

  // 아무조건 없이 + 8개를 넣는다
  while (count <= num) {
    stack.push(count);
    count++;
    answer.push("+");
  }

  let stackpop = stack.pop();
  answer.push("-");

  if (stackpop !== num) {
    answer = ["NO"];
    break;
  }
}

console.log(answer.join("\n"));

// let stack = [];
// let num = [];

// let ary = arr.map(Number);

// let count = 0;
// let index = 0;

// while (count <= ary.length) {
//   if (!ary[index]) break;

//   if (count !== ary[index]) {
//     num.push(count + 1);
//     stack.push("+");
//     count++;
//   } else {
//     while (ary[index] && num[num.length - 1] === ary[index]) {
//       if (num.pop() === ary[index]) {
//         stack.push("-");
//         index++;
//       }
//     }
//   }
// }

// console.log(stack.join("\n"));
