import "./uniqueArray";

describe("Unique Array", () => {
  it("test case 1", () => {
    const testCase = [1, 1, 3, 2, 1].uniqueArray();
    expect(testCase).toEqual([1, 3, 2]);
    expect(testCase.isUniqueArray()).toEqual(true);
  });

  it("test case 2", () => {
    const testCase = [1, 1, 3, 2, 1];
    expect(testCase.isUniqueArray()).toEqual(false);
  });

  it("test case 3", () => {
    const testCase = [1, "s", 3, 2, { a: 1 }].uniqueArray();
    expect(testCase).toEqual([1, "s", 3, 2, { a: 1 }]);
    expect(testCase.isUniqueArray()).toEqual(true);
  });
});
