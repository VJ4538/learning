import { removeDuplicatesSet, removeDuplicates } from "./removeDuplicates";

// npx jest -t remove duplicate

describe("Leetcode - remove duplicate set", () => {
  it("test case 1", () => {
    expect(removeDuplicatesSet([1, 2, 1, 3, 1])).toEqual(3);
  });
  it("test case 2", () => {
    expect(removeDuplicatesSet(["a", "s", "a", "sa"])).toEqual(3);
  });
});

describe("Leetcode - remove duplicate", () => {
  it("test case 1", () => {
    expect(removeDuplicates([23, 23, 41, 1, 3, 5, 2, 3])).toEqual(6);
  });
  it("test case 2", () => {
    expect(removeDuplicates(["jack", "jason", "at", "sa"])).toEqual(4);
  });
});
