const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/이분탐색/10815/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, A, M, B] = input.map((v) => v.split(" ").map((x) => Number(x)));

const arys = A.sort((a, b) => a - b);

function binary(ary, target) {
  let start = 0;
  let end = ary.length - 1;

  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (ary[mid] >= target) {
      end = mid - 1;
    } else if (ary[mid] < target) {
      start = mid + 1;
    }

    if (ary[mid] === target) {
      result += 1;
    }
  }
  return result;
}

let answer = [];

B.forEach((num) => {
  answer.push(binary(arys, num));
});

console.log(answer.join(" "));
