const isSubSequence = (s: string, t: string) => {
  let count = 0;
  for (let i = 0; i < t.length; i++) {
    if (count === s.length) {
      return true;
    }
    if (s[count] === t[i]) {
      count++;
    }
  }
  return count === s.length;
};

export default isSubSequence;
