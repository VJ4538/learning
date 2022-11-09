//Approach 1: Brute Force
//Time complexity O(n^2)
//Space complexity O(1)
export const twoSum = (inputArray: number[], target: number) => {
  for (let i = 0; i < inputArray.length; i++) {
    const resultIndex = inputArray.indexOf(target - inputArray[i]);
    if (resultIndex !== -1 && resultIndex !== i) {
      return [resultIndex, i];
    }
  }
};

//Approach 2:  One-pass Hash Table
//Time complexity O(n)
//Space complexity O(n)

export const twoSumHash = (inputArray: number[], target: number) => {
  const hashMap: {
    [key: number]: number;
  } = {};

  for (let i = 0; i < inputArray.length; i++) {
    const targetNumber = target - inputArray[i];
    if (String(hashMap[targetNumber]) !== "undefined") {
      return [hashMap[targetNumber], i];
    }
    hashMap[inputArray[i]] = i;
  }
};
