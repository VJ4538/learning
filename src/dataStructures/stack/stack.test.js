import Stack from "./stack";

//npx jest -t Stack JS
const newStack = new Stack();

describe("Test Stack JS", () => {
  beforeEach(() => {
    newStack.reset();
  });

  it("test push and pop", () => {
    newStack.push("item1");
    expect(newStack.pop()).toEqual("item1");
  });

  it("test empty pop", () => {
    const t = () => {
      newStack.pop();
    };
    expect(t).toThrow(Error);
    expect(t).toThrow("Stack is empty");
  });

  it("test peek", () => {
    newStack.push("item1");
    expect(newStack.peek()).toEqual("item1");
    expect(newStack.isEmpty()).toEqual(false);
  });

  it("test isEmpty", () => {
    expect(newStack.isEmpty()).toEqual(true);
    newStack.push("item1");
    expect(newStack.isEmpty()).toEqual(false);
  });

  it("test display", () => {
    newStack.push("item1");
    newStack.push("item2");
    expect(newStack.display()).toEqual("item2item1");
  });
});
