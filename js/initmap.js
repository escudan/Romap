function initMap() {
	var mapDiv = document.getElementById('map');
	map = new google.maps.Map(mapDiv, {
		center: {
			lat: $data.lat,
			lng: $data.long
		},
		zoom: 12
	});

	// ADD MARKER TO MAP
	marker = new google.maps.Marker({
		position: {
			lat: $data.lat,
			lng: $data.long
		},
		map: map,
		title: 'Click to zoom back to center'
	});

	marker.addListener('click', function() {
		map.setZoom(12);
		map.setCenter(marker.getPosition());
	});
}