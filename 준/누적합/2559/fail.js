const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/누적합/2559/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ");

let arr = input.shift().split(" ").map(Number);

let temp = 0;

for (let i = 0; i < arr.length; i++) {
  let start = i;
  let end = i + +M - 1;

  if (Number.isInteger(arr[i]) && Number.isInteger(arr[end])) {
    let slice = arr.reduce((acc, cur, i) => {
      if (start <= i && end >= i) {
        return (acc += cur);
      }

      return acc;
    }, 0);

    console.log(temp, slice);
    if (temp < slice) {
      temp = slice;
    }
  }
}
console.log(temp);
