import isSubSequence from "./isSubSequence";

describe("Leetcode - valid parentheses", () => {
  it("test case 1", () => {
    expect(isSubSequence("acb", "ahbgdc")).toEqual(false);
  });

  it("test case 2", () => {
    expect(isSubSequence("adde", "bcc")).toEqual(false);
  });

  it("test case 3", () => {
    expect(isSubSequence("eee", "eeeee")).toEqual(true);
  });

  it("test case 4", () => {
    expect(isSubSequence("jack", "sdnajcweck")).toEqual(false);
  });
  it("test case 5", () => {
    expect(isSubSequence("aab", "ffab")).toEqual(false);
  });
});
