$('.carousel').carousel({
  interval: 2000
});

//Map script
	var MumbaiCST, AirportCST;
	function initMap() {
	var directionsService = new google.maps.DirectionsService();
	var directionsDisplay = new google.maps.DirectionsRenderer();
	MumbaiCST = new google.maps.LatLng(18.9402932, 72.8331067);
	AirportCST = new google.maps.LatLng(19.0895646, 72.8634257);

	var mapOptions = {
		zoom:7,
		center: MumbaiCST
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	directionsDisplay.setMap(map);
	calculateAndDisplayRoute(directionsService, directionsDisplay);
  }

	function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	 directionsService.route({
          origin: MumbaiCST,
          destination: AirportCST,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
	}
