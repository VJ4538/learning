import "./customReduce";

// Test Command
// npx jest -t Custom Reduce

const array1 = [1, 2, 3];
const array1Callback = (prev, curr) => prev + curr;
const array2 = ["How", " are", " you", " John"];

describe("Prototype - Custom Reduce number", () => {
  it("Return expected result", () => {
    expect(array1.customReduce(array1Callback, 0)).toEqual(6);
  });

  it("Check against original reduce", () => {
    expect(array1.customReduce(array1Callback, 0)).toEqual(
      array1.reduce(array1Callback, 0),
    );
  });
});

describe("Prototype - Custom Reduce string", () => {
  it("Return expected result", () => {
    expect(array2.customReduce(array1Callback, "")).toEqual("How are you John");
  });

  it("Check against original reduce", () => {
    expect(array2.customReduce(array1Callback, "")).toEqual(
      array2.reduce(array1Callback, ""),
    );
  });
});
