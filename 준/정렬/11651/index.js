const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/11651/input.txt";

const [N, ...num] = fs.readFileSync(filePath).toString().trim().split("\n");

const xy = num.map((v) => v.split(" "));

let answer = "";

xy.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}).forEach((v) => {
  answer += `${v[0]} ${v[1]}\n`;
});

console.log(answer);
