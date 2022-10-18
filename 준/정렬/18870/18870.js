const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/18870/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const arr = input.shift().split(" ").map(Number);

let set = new Set(arr);
let filter = [...set].sort((a, b) => a - b);

let obj = {};

for (let k in filter) {
  obj[filter[k]] = k;
}

let sum = "";
for (let i = 0; i < arr.length; i++) {
  sum += obj[arr[i]] + " ";
}

console.log(sum);
