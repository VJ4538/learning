export class Queue {
  constructor(initQueue = []) {
    this.queue = initQueue;
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.queue[0];
  }
  reset() {
    this.queue = [];
  }
}
