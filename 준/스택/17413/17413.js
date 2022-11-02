const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/17413/input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("");

let stack = [];

let isOpen = false;
let size = input.length;
let temp = "";
let str = "";
let index = 0;

for (let i = 0; i < size; i++) {
  if (input[i] === "<") {
    isOpen = true;
    stack.push(input[i]);
  } else if (input[i] === ">") {
    isOpen = false;
    stack.push(input[i]);
  } else if (!isOpen) {
    temp += input[i];
    index = i + 1;
  } else {
    stack.push(input[i]);
    if (temp.includes(" ")) {
      const space = temp.split(" ");
      for (let key of space) {
        str += key.split("").reverse().join("") + " ";
      }
    } else {
      str = temp.split("").reverse().join("");
    }
  }
}
stack.splice(index - temp.length, 0, str);

console.log(stack.join(""));
