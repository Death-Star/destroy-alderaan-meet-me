var TinderAjax = (function() {
  'use strict';

  var _getJSON= function(url, cb) {
    var req = new XMLHttpRequest();
    req.onload = function() {
      cb(null, JSON.parse(this.response));
    };

    req.onerror = function() {
      cb(this.statusText);
    };

    req.open('get', url, true);
    req.send();
  };

  return function() {
    this.getJSON = _getJSON;
  };
})();
