const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/기하수학/2477/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);

const arr = [];

input.map((e) => {
  arr.push(e.split(" ").map(Number));
});

function solution(n, arr) {
  let maxLen = 0;
  let minLen = 0;

  let idx = -1;

  for (let i = 0; i < 6; i++) {
    let curLen = arr[i][1];
    let nextLen = arr[(i + 1) % 6][1];

    let cur_length = curLen * nextLen;

    if (cur_length > maxLen) {
      maxLen = cur_length;
      idx = i;
    }
  }

  minLen = arr[(idx + 3) % 6][1] * arr[(idx + 4) % 6][1];

  console.log((maxLen - minLen) * n);
}

solution(n, arr);
