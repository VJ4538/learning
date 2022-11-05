
// type FindPivotIndex = (input: number[])=>number;

const findPivotIndex = (input) => {
  const sum = input.reduce((c, p) => c + p, 0);
  let left = 0;

  for (let i = 0; i < input.length; i++) {
    if (left === sum - left - input[i]) {
      return i;
    }
    left += input[i];
  }

  return -1;
};

export default findPivotIndex;
