const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/15828/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }
  shift() {
    if (!this.first) return "emtpy";

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

const queue = new Queue();

for (let i = 0; i < input.length; i++) {
  if (input[i] === -1) break;

  if (input[i] !== 0 && queue.size < n) {
    queue.unshift(input[i]);
  } else if (input[i] === 0) {
    queue.shift();
  }
}

if (!queue.size) {
  return console.log("empty");
}

let answer = [];

for (let i = 0; i < queue.size; i++) {
  answer.push(queue.first.value);

  queue.first = queue.first.next;
}

console.log(answer.join(" "));
