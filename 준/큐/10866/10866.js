const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/10866/input.txt";

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
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push_front(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  push_back(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop_front() {
    if (!this.head) return -1;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
    }

    this.length--;

    return oldHead.value;
  }
  pop_back() {
    if (!this.length) return -1;

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail.value;
  }

  size() {
    return this.length;
  }
  empty() {
    return this.length > 0 ? 0 : 1;
  }
  front() {
    return this.head ? this.head.value : -1;
  }
  back() {
    return this.tail ? this.tail.value : -1;
  }
}

const queue = new Queue();

let answer = [];

for (let i = 0; i < n; i++) {
  let node = input[i].split(" ");

  switch (node[0]) {
    case "push_back":
      queue.push_back(node[1]);
      break;
    case "push_front":
      queue.push_front(node[1]);
      break;
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "pop_front":
      answer.push(queue.pop_front());
      break;
    case "pop_back":
      answer.push(queue.pop_back());
    default:
      break;
  }
}

console.log(answer.join("\n"));
