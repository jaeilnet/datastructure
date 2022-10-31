const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/재귀/2447/input.txt";

const input = fs.readFileSync(filePath).toString().trim();

console.log(input);
