/* eslint-disable no-extend-native */

Array.prototype.square = function () {
  const newArray = [];
  try {
    this.forEach((each) => {
      if (typeof each !== "number" || typeof +each !== "number") {
        throw new Error("Input must be a number");
      }
      newArray.push(each * each);
    });
    return newArray;
  } catch (e) {
    return e;
  }
};
export {};
