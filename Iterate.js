var Iterate = (function() {
  return function(obj, callback) {
    if (typeof callback === 'function') {
      for (prop in obj) {
        if (obj.hasOwnProperty(prop) && isNaN(prop)) {
          try {
            callback(prop, obj[prop]); } catch (error) {
          try {
            callback(prop); } catch (error) {
          try {
            callback(); } catch (error) { }}
          }
          Iterate(obj[prop], callback);
        }
      }
    } else {
      throw('Usage: Iterate(dictionary, function(key, value) { ... });');
    }
  };
})();
