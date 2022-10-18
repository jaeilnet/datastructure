const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/이분탐색/1300/input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const [N, k] = input;

let start = 1;
let end = k;

function counter(mid) {
  let cnt = 0;

  for (let i = 1; i <= N; i++) {
    cnt += Math.min(parseInt(mid / i), N);
  }

  return cnt;
}

let answer = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = counter(mid);

  if (count >= k) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(answer);

// N = 3 K = 6
// [1, 2, 3, 4, 5, 6]

// [([1, 2, 3], [2, 4, 6], [3, 6, 9])];
// [1, 2, 2, 3, 3, 4, 6, 6, 9]

// 1 3 6 left, mid, right
// 3 mid
// 1 3 3 3 for i, parseInt, N, count
// 2 1 3 4 for i, parseInt, N, count
// 3 1 3 5 for i, parseInt, N, count
// 5 cnt 3 mid

// 4 5 6 left, mid, right
// 5 mid
// 1 5 3 3 for i, parseInt, N, count
// 2 2 3 5 for i, parseInt, N, count
// 3 1 3 6 for i, parseInt, N, count
// 6 cnt 5 mid

// 4 4 4 left, mid, right
// 4 mid
// 1 4 3 3 for i, parseInt, N, count
// 2 2 3 5 for i, parseInt, N, count
// 3 1 3 6 for i, parseInt, N, count
// 6 cnt 4 mid

// 4 mid === answer
