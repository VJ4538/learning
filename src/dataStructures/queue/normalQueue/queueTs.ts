import { Queue } from "./queue";

export class QueueTs<T> extends Queue {
  constructor(initQueue: T[] = []) {
    super(initQueue);
  }
}
