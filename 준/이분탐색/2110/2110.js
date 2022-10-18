const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "./준/이분탐색/2110/input.txt";

const input = fs.readFileSync(filepath).toString().trim().split("\n");

const [A, B] = input.shift().split(" ").map(Number);

let ary = input.map(Number).sort((a, b) => a - b);

let answer = [];

function binary(ary, target) {
  let start = 0;
  let end = ary.length - 1;

  let short = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let startMid = ary[mid] - ary[start];
    let endMid = ary[end] - ary[mid];

    if (startMid < endMid) {
      end = end - 1;
    } else {
      start = start + 1;
    }

    short = Math.min(startMid, endMid);
    answer.push(short);
  }
}

binary(ary, B);

console.log(Math.max(...answer));
