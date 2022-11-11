import isomorphicString from "./IsomorphicString";

describe("Leetcode - valid parentheses", () => {
  it("test case 1", () => {
    expect(isomorphicString("add", "bcc")).toEqual(true);
  });

  it("test case 2", () => {
    expect(isomorphicString("adde", "bcc")).toEqual(false);
  });

  it("test case 3", () => {
    expect(isomorphicString("addd", "bcec")).toEqual(false);
  });

  it("test case 4", () => {
    expect(isomorphicString("abcd", "efgh")).toEqual(true);
  });
  it("test case 5", () => {
    expect(isomorphicString("abcd", "ffgh")).toEqual(false);
  });
});
