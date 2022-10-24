class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
  //   pop() {
  //     // size === 0
  //     if (this.size <= 0) return undefined;
  //     // size === 1
  //     if (this.size === 1) {
  //       this.first = null;
  //       this.last = null;
  //     } else {
  //       // size > 1
  //       let temp = this.first.next;
  //       this.first = temp;
  //       temp = null;
  //     }

  //     this.size--;

  //     return this;
  //   }
  pop() {
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

let stack = new Stack();

stack.push("ddd");
stack.push("ff");
stack.push("zz");
stack.push("qqq");
stack.push("rrr");

console.log(stack);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
// console.log(stack.pop());

console.log(stack);
