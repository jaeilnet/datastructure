const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/정렬/1427/input.txt";

const [N, ...num] = fs.readFileSync(filePath).toString().trim().split("\n");

const xy = num.map((v) => v.split(" "));
let answer = "";

xy.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
}).forEach((arr) => (answer += `${arr[0]} ${arr[1]}\n`));

console.log(answer);
