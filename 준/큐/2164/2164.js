const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/2164/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let ary = Array.from({ length: input }, (v, i) => i + 1);

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

  push(val) {
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
    if (!this.first) return null;

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

let count = 0;

for (let i = 0; i < ary.length; i++) {
  queue.push(ary[i]);
}

while (queue.size !== 1) {
  queue.shift();

  let temp = queue.first.value;

  queue.push(temp);
  queue.shift();

  count++;
}

console.log(queue.first.value);
