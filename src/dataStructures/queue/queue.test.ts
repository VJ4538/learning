import { QueueTs } from "./queueTs";

const stringQueue = new QueueTs<string>();
const numberQueue = new QueueTs<number>();

describe("Test Stack JS", () => {
  beforeEach(() => {
    stringQueue.reset();
    numberQueue.reset();
  });

  it("test enqueue and dequeue", () => {
    stringQueue.enqueue("item1");
    expect(stringQueue.dequeue()).toEqual("item1");
  });

  it("test empty dequeue", () => {
    const t = () => {
      stringQueue.dequeue();
    };
    expect(t).toThrow(Error);
    expect(t).toThrow("Stack is empty");
  });

  it("test peek", () => {
    numberQueue.enqueue(5);
    numberQueue.enqueue(3);
    expect(numberQueue.peek()).toEqual(5);
    expect(numberQueue.isEmpty()).toEqual(false);
  });

  it("test isEmpty", () => {
    expect(stringQueue.isEmpty()).toEqual(true);
    stringQueue.enqueue("item1");
    expect(stringQueue.isEmpty()).toEqual(false);
  });
});
