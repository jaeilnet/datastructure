const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/그리디/1541/input.txt";

const input = require("fs").readFileSync(filePath).toString().trim();

function solution(arr) {
  const numbers = arr.split("-").map((e) =>
    e
      .split("+")
      .map(Number)
      .reduce((acc, cur) => acc + cur)
  );

  let answer = numbers[0] * 2 - numbers.reduce((acc, cur) => acc + cur);
  return answer;
}

console.log(solution(input));
