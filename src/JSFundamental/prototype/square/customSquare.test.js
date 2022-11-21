import "./customSquare";

describe("Prototype - customSquare", () => {
  it("test case 1", () => {
    expect([1, 2, 3].square()).toEqual([1, 4, 9]);
  });

  it("test case 2", () => {
    expect([-1].square()).toEqual([1]);
  });

  it("test case 3", () => {
    expect([-2, -3].square()).toEqual([4, 9]);
  });

  it("test case 4", () => {
    expect([-1, "sd"].square()).toEqual(Error("Input must be a number"));
  });
});
