import "./customMap.ts";

// Test Command
// npx jest -t custom Map

const array1 = [1, 2, 3, 4];
const array1Expected = [2, 3, 4, 5];
const array1Callback = (each: number) => each + 1;

const array2 = ["john", "jack", "jimmy"];
const array2Expected = ["Hi john", "Hi jack", "Hi jimmy"];
const array2Callback = (each: string) => `Hi ${each}`;

describe("Prototype - Custom Map", () => {
  it("Return expected array", () => {
    expect(array1.customMap(array1Callback)).toEqual(
      expect.arrayContaining(array1Expected),
    );
  });

  it("Return expected lenegth for array", () => {
    expect(array1.customMap(array1Callback)).toHaveLength(4);
  });
});

describe("Prototype - Custom Map2", () => {
  it("Return expected array", () => {
    expect(array2.customMap2(array2Callback)).toEqual(
      expect.arrayContaining(array2Expected),
    );
  });

  it("Return expected lenegth for array", () => {
    expect(array2.customMap2(array2Callback)).toHaveLength(3);
  });
});
