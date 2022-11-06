import { bestTimeToSell } from "./bestTimeToSell";
// npx jest -t remove bestTimeToSell

describe("Leetcode - best time to sell", () => {
  it("test case 1", () => {
    expect(bestTimeToSell([1, 3, 6, 5, 3])).toEqual(5);
  });
  it("test case 2", () => {
    expect(bestTimeToSell([1, 7, 6, 3, 4, 1])).toEqual(7);
  });
  it("test case 3", () => {
    expect(bestTimeToSell([3, 7, 8, 3, 4, 1])).toEqual(6);
  });
});
