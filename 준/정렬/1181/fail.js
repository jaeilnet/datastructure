const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1181/input.txt";

const [N, ...arr] = fs.readFileSync(filePath).toString().trim().split("\n");

const charCode = arr
  .filter((e, i) => arr.indexOf(e) === i)
  .map((v) => {
    let sum = 0;
    for (let i = 0; i < v.length; i++) {
      sum += v.charCodeAt(i);
    }

    return [v.length, sum, v.charCodeAt(), v];

    // [
    //  글자길이 // 0번째 char 숫자 // 단어 char 합산 // 문자
    //   [1, 105, 105, "i"],
    //   [2, 214, 105, "im"],
    //   [2, 221, 105, "it"],
    //   [2, 221, 110, "no"],
    //   [3, 331, 98, "but"],
    //   [4, 435, 109, "more"],
    //   [4, 437, 119, "wait"],
    //   [4, 456, 119, "wont"],
    //   [5, 578, 121, "yours"],
    //   [6, 643, 99, "cannot"],
    //   [8, 855, 104, "hesitate"],
    // ];
  });

let answer = "";

charCode
  .sort((a, b) => {
    if (a[0] === b[0] && a[2] !== b[2]) {
      // 길이가 같고 첫글자가 겹치지 않을때 오름차순

      return a[2] - b[2];
    } else if (a[2] === b[2]) {
      // 첫번째 글자가 겹칠때 첫 글자 기준으로 사전순서로 나열

      return a[1] - b[1];
    } else {
      // 그냥 오름차순

      return a[0] - b[0];
    }
  })
  .forEach((e) => {
    answer += `${e[3]}\n`;
  });

console.log(charCode);
console.log(answer);
