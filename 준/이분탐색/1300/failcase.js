const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/이분탐색/1300/input.txt";

const [N, K] = fs.readFileSync(filePath).toString().trim().split("\n");

const ary = Array.from({ length: N }, (v, i) => {
  let result = [];
  let n = 1;
  let index = i + 1;

  for (let k = 0; k < N; k++) {
    result.push(n * index);
    n++;
  }

  return result;
});

let sort = [];

for (let i = 0; i < ary.length; i++) {
  for (let j = 0; j < ary.length; j++) {
    sort.push(ary[i][j]);
  }
}

sort.sort((a, b) => a - b);

function binary(ary, target) {
  let start = 0;
  let end = ary.length - 1;
  let answer = 0;

  let mid = Math.floor((start + end) / 2);
  while (ary[mid] !== target && start <= end) {
    if (target >= mid) {
      answer = ary[mid];
      start = mid + 1;
    } else {
      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  return answer;
}

console.log(binary(sort, K)); //6
console.log(sort, ary);
// ansewr 6
// sort [(1, 2, 2, 3, 3, 4, 6, 6, 9)]
// ary [([1, 2, 3], [2, 4, 6], [3, 6, 9])];

// A = [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9],
// ];
// B = [1, 2, 2, 3, 3, 4, 6, 6, 9];

// 메모리초과;
