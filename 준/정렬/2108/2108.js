const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/2108/input.txt";

const [N, ...num] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// [1, 3, 8, -2, 2];
// [-2, 1, 2, 3, 8];

const sort = num.sort((a, b) => a - b);

const answer = {};
const obj = {};

for (let key of sort) {
  if (obj[key]) obj[key] = obj[key] + 1;
  else obj[key] = 1;
}

let max = Math.max(...Object.values(obj));
let maxArray = [];

for (let key in obj) {
  if (obj[key] === max) {
    maxArray.push(key);
  }
}

maxArray.sort((a, b) => a - b);
const avg = Math.round(sort.reduce((acc, cur) => acc + cur, 0) / N);

answer["avg"] = avg || 0;
answer["mid"] = sort[Math.floor(sort.length / 2)];
answer["maxmin"] = maxArray.length > 1 ? maxArray[1] : maxArray[0];
answer["maxNum"] = sort[sort.length - 1] - sort[0];

Object.values(answer).map((e) => console.log(Number(e)));
