const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/백트래킹/15649/input.txt";

const [N, M] = fs.readFileSync(filePath).toString().trim().split(" ");

function solution(N, M) {
  console.log(N, M);

  // while(){

  // }
}

solution(N, M);

// dfs 문제
