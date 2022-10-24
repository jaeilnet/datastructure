const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/그리디/13305/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const km = input
  .shift()
  .split(" ")
  .map((i) => BigInt(i));
const city = input
  .shift()
  .split(" ")
  .map((i) => BigInt(i));

let result = 0n;
let temp = city[0];

for (let i = 1; i < city.length; i++) {
  result += temp * km[i - 1];

  //  2 < 5
  if (city[i] < temp) {
    temp = city[i];
  }
}

console.log(String(result));
