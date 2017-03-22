var ForEach = (function() {
  return function(array, callback) {
    if (typeof callback === 'function') {
      for (var a = 0; a < array.length; a++) {
        try {
          callback(a, array[a]); } catch (error) {
        try {
          callback(a); } catch (error) {
        try {
          callback(); } catch (error) { }}
        }
      }
    } else {
      throw('Usage: ForEach(array, function(index, value) { ... });');
    }
  };
})();
