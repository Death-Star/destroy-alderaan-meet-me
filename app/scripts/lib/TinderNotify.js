var tinderNotify = (function() {
  'use strict';

  var instance;

  var initialize = function() {
    var _supported = function() {
      if (!('Notification' in window)) {
        console.log('Notification not supported!');
        return false;
      } else if (Notification.permission === 'granted') {
        return true;
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function(permission) {
          if (permission === 'granted') {
            return true;
          }
        });
      }
    };

    var _notificate = function(title, opts) {
      if (_supported()) {
        new Notification(title, { body: opts.body, icon: opts.url });
      }
    };

    return {
      notificate: _notificate
    };
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = initialize();
      }

      return instance;
    }
  };
})();
