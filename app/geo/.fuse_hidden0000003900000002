function hasGeoCapability() {
  if (navigator.geolocation) {
    return true;
  } else {
    return false;
  }
}

function requestLocation() {
  if (hasGeoCapability()) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    return false;
  }
}

function onSuccess(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var coordsArray = [latitude, longitude];
  var displayGeo = document.getElementById('coords');
  displayGeo.innerHTML = ("Lat: " + coordsArray[0] + "<br />Long: " + coordsArray[1]);
  loadDynamicMap(coordsArray);
}

function onError(error) {
  return error;
}

var btnGeo = document.getElementById('trigger_geolocation');
btnGeo.addEventListener("click", requestLocation);

function loadDynamicMap(coordsArray) {
  var latitude = coordsArray[0];
  var longitude = coordsArray[1];
  var mapOptions = {
   zoom: 16,
   center: new google.maps.LatLng(latitude, longitude)
 };
  var mapCanvas = document.getElementById('map-canvas');
  mapCanvas.classList.add('map-loaded');
  var map = new google.maps.Map(mapCanvas,mapOptions);
}