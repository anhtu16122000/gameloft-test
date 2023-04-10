let first = true;
function throttle(func, delay) {
  let timeoutId;
  return function (...args) {
    if (first) {
      func.apply(this, args);
      first = false
    } else {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          timeoutId = null;
        }, delay);
      }
    }

  };
}
export default throttle