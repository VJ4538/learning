export class Stack {
  constructor(initStack = []) {
    this.stack = initStack;
  }
  push(newItem) {
    this.stack.push(newItem);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
  display() {
    let result = "";
    for (let i = this.stack.length - 1; i >= 0; i--) {
      result += this.stack[i];
    }
    return result;
  }
  reset() {
    this.stack = [];
  }
}

export default Stack;
