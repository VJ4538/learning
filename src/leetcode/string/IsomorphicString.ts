const isomorphicString = (input: string, input2: string) => {
  if (input.length !== input2.length) return false;
  const map1: {
    [key: string]: string;
  } = {};
  const map2: {
    [key: string]: string;
  } = {};

  let inputArray = input.split("");
  let inputArray2 = input2.split("");

  for (let i = 0; i < inputArray.length; i++) {
    if (!map1[inputArray[i]]) {
      map1[inputArray[i]] = inputArray2[i];
    } else {
      if (map1[inputArray[i]] !== inputArray2[i]) {
        return false;
      }
    }
    if (!map2[inputArray2[i]]) {
      map2[inputArray2[i]] = inputArray[i];
    } else {
      if (map2[inputArray2[i]] !== inputArray[i]) {
        return false;
      }
    }
  }

  return true;
};

export default isomorphicString;
