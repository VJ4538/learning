import findPivotIndex from "./pivotIndex";

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// npx jest -t pivotIndex

describe("Leetcode - pivotIndex", () => {
  it("test case 1", () => {
    expect(findPivotIndex([1, 10, 3, 6, 8, 6])).toEqual(3);
  });
  it("test case 2", () => {
    expect(findPivotIndex([8, 2, 7])).toEqual(-1);
  });
  it("test case 3", () => {
    expect(findPivotIndex([2, 1, -1, 5, -2])).toEqual(1);
  });
});
