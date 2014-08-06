var TinderGeolocation = (function() {
  this._coordsArray = [];

  var _hasGeoCapability = function()  {
    if (navigator.geolocation) {
      return true;
    } else {
      return false;
    }
  }

  var _requestLocation = function(callback) {
    if (_hasGeoCapability()) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        callback([latitude, longitude]);
      }, _onError);
    } else {
      return false;
    }
  }

  // var _onSuccess = function(position) {
  //   var latitude = position.coords.latitude;
  //   var longitude = position.coords.longitude;
  //   callback([latitude, longitude]);
  // }

  var _onError = function(error) {
    return error;
  }

  var _getCoords = function(callback) {
    _requestLocation(callback);

  }

  return function() {
    this.getCoords = _getCoords;
  }


})();

var drawMap =function(coords) {
   var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(coords[0], coords[1])
  };
   var mapCanvas = document.getElementById('map-canvas');
   mapCanvas.classList.add('map-loaded');
   var map = new google.maps.Map(mapCanvas,mapOptions);
}

var tg = new TinderGeolocation();

tg.getCoords(drawMap);
