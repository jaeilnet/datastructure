const fs = require("fs");

const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./준/큐/1021/input.txt";

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");

const arr = input.join(" ").split(" ").map(Number);

// n 은 길이 m 은 뽑으려는 숫자 갯수 input 은 뽑으려는 수의 위치
// 10 [1,2,..10] m 개를 input 의 위쳉서 뽑는다.

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

  push(val) {
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
    return this.head.value;
  }
  pop() {
    if (!this.tail) return null;

    const oldTail = this.tail;

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
  shift() {
    if (!this.head) return null;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead.value;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this.head.value;
  }
}

const queue = new Queue();

for (let i = 0; i < n; i++) {
  queue.push(i + 1);
}

let answer = [];

for (let i = 0; i < queue.length; i++) {
  if (!arr[i]) break;
  let currentQueue = 0;
  let count = 0;
  let leftCount = 0;
  let rightCount = 0;

  while (true) {
    currentQueue = queue.shift();

    if (currentQueue === arr[i]) {
      answer.push(count);
    } else {
      if (queue.push(currentQueue) !== arr[i]) leftCount++;
      if (queue.unshift(queue.pop()) !== arr[i]) rightCount++;

      console.log(queue, leftCount, rightCount, arr[i]);
    }

    // cnt++;
    break;
  }
}

console.log(answer);

console.log(Math.min(...answer));
