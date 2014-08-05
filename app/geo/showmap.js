function formatQuery(coordsArray){
  var latitude = coordsArray[0];
  var longitude = coordsArray[1];
  var finalUrl = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=16&size=640x640";
  return finalUrl;
}