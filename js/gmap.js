;
(function() {
	// INITIALIAZE MAP COORDINATES
	$data = {
		lat: 44.42677,
		long: 26.10254
	}

	// APPEND SCRIPT
	var s = document.getElementsByTagName('script')[0];
	var script = document.createElement('script');
	script.src = api;
	script.defer = true
	script.async = true
	s.parentNode.insertBefore(script, s);
}())