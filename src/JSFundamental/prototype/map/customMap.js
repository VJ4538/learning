/* eslint-disable no-extend-native */
/* 
    Logic 1
    1. Create new array 
    2. Loop through current array and call callback on each element
    3. Push result of callback to new array
    4. Return new array
*/

Array.prototype.customMap = function (callbackFn) {
  const mapArray = [];
  for (let i = 0; i < this.length; i++) {
    mapArray.push(callbackFn(this[i]));
  }
  return mapArray;
};

/*
      Logic 2
      1. Loop through current array 
      2. Call callback on each element
      3. Modified each element
      4. Return modified current array
  
      Should use less memory because we are not creating a new array to hold the result
  */

Array.prototype.customMap2 = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callbackFn(this[i]);
  }
  return this;
};

export {};
