/* eslint-disable no-extend-native */

/* 
    Logic 1
    1. Declare result
    2. Loop x times ( x is the length of the array )
    3. Call callbackFn in every loop
    4. Set result to result of callbackFn
    5. Return result
*/

Array.prototype.customReduce = function (callbackFn, initialValue) {
  let result = initialValue;
  for (let i = 0; i < this.length; i++) {
    result = callbackFn(result, this[i]);
  }
  return result;
};

export {};
