const fs = require("fs");

const filePath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "./준/집합과 맵/10815/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr1 = input[1].split(" ");
let arr2 = input[3].split(" ");

let obj = {};

for (let i in arr1) {
  obj[arr1[i]] = 0;
}

let answer = [];

arr2.forEach((e) => {
  answer.push(obj[e] === 0 ? 1 : 0);
});

console.log(answer.join(" "));
