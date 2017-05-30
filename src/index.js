export function off(target, type, callback) {
  if (target.removeEventListener) {
    target.removeEventListener(type, callback, false);
  } else if (target.detachEvent) {
    target.detachEvent(`on${type}`, callback);
  } else {
    if (target[`on${type}`] === callback) {
      target[`on${type}`] = null;
    }
  }
}

export function on(target, type, callback) {
  if (target.addEventListener) {
    target.addEventListener(type, callback, false);
  } else if (target.attachEvent) {
    target.attachEvent(`on${type}`, callback);
  } else {
    target[`on${type}`] = callback;
  }
  return {
    off() {
      off(target, type, callback);
    }
  };
}

export default {
  on,
  off
};
