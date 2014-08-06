(function() {
  'use strict';
  var app = {
    run: function() {
      this.displayLocations();
    },
    displayLocations: function() {
      var locationSection = document.querySelector('#location-list');
      if (locationSection) {
        var el = document.createElement('ul');
        var data = this.getLocations();
        for (var i = 0; i < data.length; i++) {
          el.appendChild(this.createLocation(data[i]));
        }

        locationSection.innerHTML = '';
        locationSection.appendChild(el);
      }
    },
    createLocation: function(data) {
      var el = document.createElement('li');
      el.innerHTML = data.name + ' - ' + data.city + ' - ' + ' [' + data.coords.toString() + ']';
      return el;
    },
    getLocations: function() {
      return [{
        name: 'MOB',
        city: 'Barcelona',
        userId: '1',
        coords: [10, 10]
      }, {
        name: 'Big Building',
        city: 'Tokyo',
        userId: '1',
        coords: [10, 33]
      }, {
        name: 'Golden Bridge',
        city: 'San Francisco',
        userId: '1',
        coords: [40, 10]
      }, {
        name: 'Museu Dali',
        city: 'Girona',
        userId: '1',
        coords: [30, 10]
      }];
    }
  };

  app.run();
})(window, jQuery);
