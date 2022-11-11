interface QElementType<T> {
  element: T;
  priority: number;
}

class QElement<T> {
  priority: number;
  element: T;
  constructor(element: T, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

export class PQueueTs<T> {
  queue: QElementType<T>[];
  constructor() {
    this.queue = [];
  }
  enqueue(element: T, priority: number) {
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
  reset() {
    this.queue = [];
  }
}
