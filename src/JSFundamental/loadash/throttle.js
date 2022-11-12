// Logic you can only trigger the event one time with in a timedelay

const throttle = (callbackFn, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      callbackFn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

export default throttle;
