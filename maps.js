var center = {
	'lat': 49.30,
	'lng': 20.05
} 

var tatrzanski_bor = {
	'position': {lat: 49.311799, lng: 20.061783},
	'label': 'Tatrzański Bór - przyjęcie',
}
var wiktorowki = {
	'position': {lat: 49.265404, lng: 20.086490},
	'label': 'Sanktuarium Wiktorówki - ślub',
}

function myMap() {
  var mapProp = {
    disableDefaultUI: true,
    center: new google.maps.LatLng(center['lat'], center['lng']),
    zoom: 12,
    zoomControl: true,
    scaleControl: true,
    rotateControl: true,
    mapTypeId: 'terrain',
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  var marker = new google.maps.Marker(
	  {
		position: tatrzanski_bor['position'],
		label: tatrzanski_bor['label'],
		map: map,
	  }
  ) 
  var marker = new google.maps.Marker(
	  {
		position: wiktorowki['position'],
		label: wiktorowki['label'], 
		map: map,
	  }
  ) 
}
