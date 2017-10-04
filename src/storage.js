function MemoryStorage() {
  'use strict';

  var storage = {};

  function key(key) {
    var count = 0;
    for (var k in storage) {
      if (Object.prototype.hasOwnProperty.call(storage, k)) {
        if (count !== key) {
          count++;
        } else {
          return k;
        }
      }
    }
    return null;
  }

  function setItem(key, value) {
    storage[key] = value;
  }

  function getItem(key) {
    if (typeof storage[key] !== 'undefined') {
      return storage[key];
    }
    return null;
  }

  function removeItem(key) {
    delete storage[key];
  }

  function clear() {
    storage = {};
  }

  return {
    key: key,
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem,
    clear: clear
  };

  (function (window) {
    try {
      window.localStorage.setItem('_', '');
      window.localStorage.removeItem('_');
    } catch (e) {
      window.localStorage = new MemoryStorage();
    }
  })(this);
}
