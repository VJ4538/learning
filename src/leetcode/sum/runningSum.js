// type RunningSum = (input:number[])=>number[]

const runningSum = (input) => {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
    input[i] = sum;
  }
  return input;
};

export default runningSum;
