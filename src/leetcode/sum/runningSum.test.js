import runningSum from "./runningSum";
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// npx jest -t runningSum

describe("LeetCode - runningSum", () => {
  it("test case 1", () => {
    expect(runningSum([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
  });
  it("test case 2", () => {
    expect(runningSum([1, 1, 1, 1, 1])).toEqual([1, 2, 3, 4, 5]);
  });
  it("test case 3", () => {
    expect(runningSum([3, 1, 2, 10, 1])).toEqual([3, 4, 6, 16, 17]);
  });
});
