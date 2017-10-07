var markers = [];
var infowindows = [];
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 59.43914046, lng: 24.75219727 },
		zoom: 12,
		mapTypeControl: false,
		streetViewControl: false,
		styles: mapstyle
	});

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			map.setCenter(pos);
			map.setZoom(14);
            var marker = new google.maps.Marker({
				position: pos,
				map: map,
    			animation : google.maps.Animation.DROP
			});
		}, function() {
			handleLocationError(true, '', map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, '', map.getCenter());
	}

	for (var i = 0; i < burgers.length; i++) {
		infowindows[i] = new google.maps.InfoWindow({
			content : '<b>' + burgers[i][0] + '</b><br>' + burgers[i][3] + '<br><br>' + burgers[i][4] + ( ( burgers[i][2] != "" ) ? '<br><br><a href="' + burgers[i][2] + '" target="_blank">' + burgers[i][2] + '</a>' : "" )
		});
		markers[i] = new google.maps.Marker({
			position  : burgers[i][1],
			map       : map,
			icon: {
				path: fontawesome.markers.CUTLERY,
				scale: 0.3,
				strokeWeight: 0.2,
				strokeColor: 'black',
				strokeOpacity: 1,
				fillColor: '#f00',
				fillOpacity: 0.7,
			},
			animation : google.maps.Animation.DROP,
			infoWindowIndex : i
		});
		google.maps.event.addListener(markers[i], 'mouseover',
		function(event)
		{
			infowindows[this.infoWindowIndex].open(map, this);
		});
		google.maps.event.addListener(markers[i], 'mousedown',
		function(event)
		{
			infowindows[this.infoWindowIndex].open(map, this);
		});
		google.maps.event.addListener(markers[i], 'mouseout',
		function(event)
		{
			infowindows[this.infoWindowIndex].close(map, this);
		});

	}

}
