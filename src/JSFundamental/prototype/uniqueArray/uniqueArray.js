/* eslint-disable no-extend-native */

// Set way
Array.prototype.uniqueArray = function () {
  return Array.from(new Set(this));
};

Array.prototype.isUniqueArray = function () {
  const uniqueArray = new Set(this);
  return this.length === [...uniqueArray].length ? true : false;
};

export {};
