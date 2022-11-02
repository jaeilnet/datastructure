const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/1406/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const str = input.shift();
const n = input.shift();

const arr = input;

let leftStack = [...str];
let rightStack = [];
let ak = "";

for (let i = 0; i < arr.length; i++) {
  let split = arr[i].split(" ")[1];
  if (split) {
    ak = split;
  }

  switch (arr[i]) {
    case "L":
      if (leftStack.length !== 0) rightStack.push(leftStack.pop());
      break;
    case "D":
      if (rightStack.length !== 0) leftStack.push(rightStack.pop());
      break;
    case "B":
      if (leftStack.length !== 0) leftStack.pop();
      break;
    default:
      arr[i].split(" ")[0] === "P" ? leftStack.push(ak) : null;
      break;
  }
}

console.log([...leftStack, ...rightStack.reverse()].join(""));
