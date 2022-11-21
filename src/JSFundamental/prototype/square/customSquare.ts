/* eslint-disable no-extend-native */

declare global {
  interface Array<T> {
    square: () => unknown;
  }
}

Array.prototype.square = function () {
  const newArray: number[] = [];
  try {
    this.forEach((each) => {
      if (typeof each !== "number" || typeof +each !== "number") {
        throw new Error("Input must be a number");
      }
      newArray.push(each * each);
    });

    return newArray;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export {};
