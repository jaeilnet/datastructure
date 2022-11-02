const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/1406/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.shift();
const n = input.shift();

const arr = input;

// console.log(str, n, arr);

let stack = [...str];
let cursor = stack.length - 1;
arr.forEach((type) => {
  switch (type) {
    case "L":
      cursor >= 0 ? (cursor -= 1) : (cursor = 0);
      break;
    case "D":
      cursor >= 0 ? (cursor += 1) : (cursor = 0);
      break;
    case "B":
      if (cursor >= 0) {
        stack.splice(cursor, 1);
        cursor -= 1;
      }
      break;
    default:
      type[0] === "P" && stack.splice(cursor + 1, 0, type[2]);
      cursor += 1;
      break;
  }
});

console.log(stack.join(""));
