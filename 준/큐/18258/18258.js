const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/18258/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

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
    let newNode = new Node(val);

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
    if (!this.first) return -1;

    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
  empty() {
    return !this.size ? 1 : 0;
  }
  back() {
    if (!this.last) return -1;

    return this.last.value;
  }
  front() {
    if (!this.first) return -1;

    return this.first.value;
  }
}

let answer = [];

const queue = new Queue();

for (let i = 0; i < n; i++) {
  switch (input[i]) {
    case "front":
      answer.push(queue.front());
      break;
    case "size":
      answer.push(queue.size);
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "pop":
      answer.push(queue.shift());
      break;
    case "back":
      answer.push(queue.back());
      break;
    default:
      queue.unshift(input[i].split(" ")[1]);
      break;
  }
}

console.log(answer.join("\n"));
