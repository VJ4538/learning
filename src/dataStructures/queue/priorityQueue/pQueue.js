class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

export class PQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(element, priority) {
    const qElement = new QElement(element, priority);
    let contain = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority > qElement.priority) {
        this.queue.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.queue.push(qElement);
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.queue.shift();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  front() {
    if (this.isEmpty()) {
      return "No elements in queue";
    }
    return this.queue[0];
  }
  rear() {
    if (this.isEmpty()) {
      return "No elements in queue";
    }
    return this.queue[this.queue.length - 1];
  }
}
