import { twoSum, twoSumHash } from "./twoSum";

describe("Leetcode - two sum", () => {
  it("test case 1", () => {
    expect(twoSumHash([2, 7, 11, 15], 9)).toEqual(
      expect.arrayContaining([0, 1]),
    );
  });

  it("test case 2", () => {
    expect(twoSumHash([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
  });

  it("test case 3", () => {
    expect(twoSumHash([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
  });

  it("test case 4", () => {
    expect(twoSumHash([2, 7, 11, -4], 7)).toEqual(
      expect.arrayContaining([2, 3]),
    );
  });
});
