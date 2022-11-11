import { PQueueTs } from "./pQueueTs";

const stringQueue = new PQueueTs<string>();

describe("Test Queue ts", () => {
  it("enqueue", () => {
    stringQueue.enqueue("a", 1);
    stringQueue.enqueue("b", 2);
    stringQueue.enqueue("c", 3);

    expect(stringQueue.front()).toEqual({
      element: "a",
      priority: 1,
    });
    expect(stringQueue.rear()).toEqual({
      element: "c",
      priority: 3,
    });
  });

  it("dequeue", () => {
    stringQueue.dequeue();
    expect(stringQueue.front()).toEqual({
      element: "b",
      priority: 2,
    });
    expect(stringQueue.rear()).toEqual({
      element: "c",
      priority: 3,
    });
  });

  it("enqueue 2", () => {
    stringQueue.enqueue("ab", 1);
    expect(stringQueue.front()).toEqual({
      element: "ab",
      priority: 1,
    });
    expect(stringQueue.rear()).toEqual({
      element: "c",
      priority: 3,
    });
  });
});
