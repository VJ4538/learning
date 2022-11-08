import { isValid } from "./validParentheses";

describe("Leetcode - valid parentheses", () => {
  it("test case 1", () => {
    expect(isValid("(()())")).toEqual(true);
  });

  it("test case 2", () => {
    expect(isValid("(()(())")).toEqual(false);
  });

  it("test case 3", () => {
    expect(isValid("()()()")).toEqual(true);
  });

  it("test case 4", () => {
    expect(isValid("(())())))")).toEqual(false);
  });
});
