const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/2108/input.txt";

const [N, ...num] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 풀이;
// [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// [0, 2, 2, 2, 1, 2, 0, 1, 0, 0];

// 답
// [1, 1, 2, 2, 3, 3, 4, 5, 5, 7];

// 1. 비교해서 중복 갯수 찾기
// 2. 중복 갯수 인덱스 만큼 배열을 다시 만들기

const obj = {};

for (let i = 0; i < N; i++) {
  let count = 0;

  for (let j = 0; j < N; j++) {
    if (i === num[j]) {
      count++;
    }
  }

  if (count) obj[i] = count;
}

// console.log(obj);

let answer = [];

Object.entries(obj).forEach((e, i) => {
  for (let k = 0; k < e[1]; k++) {
    answer.push(e[0]);
  }
});

// console.log(answer);

for (let i of answer) {
  console.log(+i);
}
