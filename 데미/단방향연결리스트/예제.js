class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SiglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.count = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;

      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(count) {
    if (count < 0 || count >= this.length) return undefined;
    let current = this.head;

    let cnt = 0;

    while (count !== cnt) {
      current = current.next;
      cnt++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index, -1);
    let temp = prev.next;

    prev.next = newNode;

    newNode.next = temp;

    this.length++;
  }
}

// let first = new Node("HI");
// first.next = new Node("there");
// first.next.next = new Node("thee");

let list = new SiglyLinkedList();

list.push("Hello");
list.push("Goodbye");
list.push("Goodbye2");
list.push("Goodbye3");
list.push("Goodbye4");

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// console.log(list.unshift("HI"));
// console.log(list.unshift("NICE"));
// console.log(list.unshift("NIKE"));
// console.log(list);

console.log(list.get(2));
console.log(list.set(2, "!!!"));
console.log(list.get(2));
console.log(list.tail);

// list.pop();
// console.log(list, "\n");
// console.log(list.head.next, "next");
// console.log(list.traverse());
// console.log(list.head.next.next, "next");
