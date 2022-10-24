const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/스택/10828/input.txt";

const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class Node {
  constructor(val) {
    this.val = val;
    this.next = 0;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }

    this.size++;
    return this;
  }
  pop() {
    if (!this.first) return -1;
    let temp = this.first;

    if (this.first === this.last) {
      this.last = -1;
    }

    this.first = this.first.next;
    this.size--;

    return +temp.val;
  }
  top() {
    if (!this.first) return -1;

    return +this.first.val;
  }
  empty() {
    return !this.size ? 1 : 0;
  }
}

const stack = new Stack();

let answer = [];

arr.forEach((e) => {
  switch (e) {
    case "top":
      answer.push(stack.top());
      break;
    case "size":
      answer.push(stack.size);
      break;
    case "empty":
      answer.push(stack.empty());
      break;
    case "pop":
      answer.push(stack.pop());
      break;
    default:
      stack.push(e.split(" ")[1]);
      break;
  }
});

console.log(answer.join("\n"));
