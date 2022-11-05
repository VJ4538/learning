/* eslint-disable no-extend-native */

type CallbackFn<T> = (prev: T, curr: T) => T;

declare global {
  interface Array<T> {
    customReduce: (cb: CallbackFn<T>, init: T) => T;
  }
}

Array.prototype.customReduce = function (callbackFn, initialValue) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = callbackFn(result, this[i]);
  }
  return result;
};

export {};
