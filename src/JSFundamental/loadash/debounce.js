/*
    Logic
    Debounce function will take in two params cb fn and delay
    clear the timeout when function is called again 
    settimeout will excute after a certain period
*/

export const debounce = (callbackFn, delay = 1500) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callbackFn(...args);
    }, delay);
  };
};

export const waitForXSec = (time) => new Promise((r) => setTimeout(r, time));
