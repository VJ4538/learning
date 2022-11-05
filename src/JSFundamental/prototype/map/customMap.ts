/* eslint-disable no-extend-native */
type CallbackFn<T> = (eachElement: T) => T;

declare global {
  interface Array<T> {
    customMap: (cb: CallbackFn<T>) => T[];
    customMap2: (cb: CallbackFn<T>) => T[];
  }
}

Array.prototype.customMap = function (callbackFn) {
  const mapArray = [];
  for (let i = 0; i < this.length; i++) {
    mapArray.push(callbackFn(this[i]));
  }
  return mapArray;
};

Array.prototype.customMap2 = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callbackFn(this[i]);
  }
  return this;
};

export {};
