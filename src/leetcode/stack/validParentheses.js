export const isValid = (s) => {
  const map = {
    "(": 0,
    ")": 0,
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      map["("] += 1;
    } else {
      map[")"] += 1;
    }
  }

  return map["("] === map[")"];
};
