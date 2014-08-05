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
    console.log(coordsArray);

  var displayGeo = document.getElementById('coords');
  displayGeo.innerHTML = ("Lat: " + coordsArray[0] + "<br />Long: " + coordsArray[1]);
  showTheMap(coordsArray);
}

function onError(error) {
  return error;
}

var btnGeo = document.getElementById('trigger_geolocation');
btnGeo.addEventListener("click", requestLocation);
