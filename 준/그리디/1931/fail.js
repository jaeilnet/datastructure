const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/그리디/1931/input.txt";

const [N, ...input] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input
  .map((e) => e.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

function reg(start, count, arr) {
  if (start >= arr.length) return count;

  for (let i = 1; i < arr.length; i++) {
    if (arr[start][1] <= arr[i][0]) {
      arr[start] = arr[i];
      count++;
    }
  }

  return count;
}

console.log(reg(0, 1, arr));
// reg(0, 1, arr);
