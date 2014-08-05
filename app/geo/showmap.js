function formatQuery(coordsArray){
  var latitude = coordsArray[0];
  var longitude = coordsArray[1];
  var finalUrl = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=16&size=640x640";
  return finalUrl;
}

function showTheMap(coordsArray){
  console.log(coordsArray);
  var displayMap = document.getElementById('show_map');
  displayMap.src = formatQuery(coordsArray);
}