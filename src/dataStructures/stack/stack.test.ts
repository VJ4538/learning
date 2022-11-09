import StackTs from "./stackts";

const stringStack = new StackTs<string>();
const numberStack = new StackTs<number>();

describe("Test Stack JS", () => {
  beforeEach(() => {
    stringStack.reset();
    numberStack.reset();
  });

  it("test push and pop", () => {
    stringStack.push("item1");
    expect(stringStack.pop()).toEqual("item1");
  });

  it("test empty pop", () => {
    const t = () => {
      stringStack.pop();
    };
    expect(t).toThrow(Error);
    expect(t).toThrow("Stack is empty");
  });

  it("test peek", () => {
    numberStack.push(5);
    numberStack.push(5);
    numberStack.push(3);
    expect(numberStack.peek()).toEqual(3);
    expect(numberStack.isEmpty()).toEqual(false);
  });

  it("test isEmpty", () => {
    expect(stringStack.isEmpty()).toEqual(true);
    stringStack.push("item1");
    expect(stringStack.isEmpty()).toEqual(false);
  });

  it("test display", () => {
    numberStack.push(2);
    numberStack.push(4);
    expect(numberStack.display()).toEqual("42");
  });
});
