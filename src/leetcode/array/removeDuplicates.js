// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// type removeDuplicates = (input: string | number ) => number

//No extra space
export const removeDuplicates = (input) => {
  const map = {};
  for (let i = 0; i < input.length; i++) {
    if (!map[input[i]]) {
      map[input[i]] = true;
    } else {
      input.splice(i, 1);
      i--;
    }
  }

  return input.length;
};

// Extra space using set
export const removeDuplicatesSet = (input) => {
  const newArray = new Set(input);
  return [...newArray].length;
};
