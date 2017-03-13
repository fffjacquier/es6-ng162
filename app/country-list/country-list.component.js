function countryListController(Country,$filter,LoadGoogleMap,$location,$routeParams,$timeout) {
	
	var self = this;

	var zoomLevel = 1;
	if ($routeParams.name) {
		// zoomLevel =
	}
	if (!self.countries) {
		self.countries = Country.query({}, function() {

			LoadGoogleMap.then(function() {

				self.map = new google.maps.Map(document.getElementById('map'), {
					zoom: zoomLevel,
					center: {lat:0,lng:0},
					mapTypeId: google.maps.MapTypeId.TERRAIN
		        });

		        self.setMarkersOnMap(self.countries);
			});
		});
	}
	self.model = {};
	self.orderProp = 'name';
	self.map;
	
	self.markers = [];
	var _addMarker = function(location, name) {
		var marker = new google.maps.Marker({
		  position: location,
		});
		marker.addListener('click', function() {
		  self.map.setCenter(location);
		  self.map.setZoom(4);
		  // needs $apply or create component
		  $timeout(function() {
		  	$location.search('name', name);
		  })
		  // 
		});
		self.markers.push(marker);
	};
	var _createMarkers = function(arr) {
		angular.forEach(arr, function(value, key) {
		  _addMarker({lat: parseFloat(value.latlng[0]), lng: parseFloat(value.latlng[1])}, value.name);
		});
	};
	var _setMapForMarkers = function(map) {
		for (var i = 0; i < self.markers.length; i++) {
	    	self.markers[i].setMap(map);
	  	} 
	};
	self.setMarkersOnMap = function(countries) {
		// remove all markers and redraw
		_setMapForMarkers(null);
		self.markers.length = 0;
		_createMarkers(countries);
		_setMapForMarkers(self.map);
	};

	self.updateList = function(name) {
    	var filteredCountries = $filter('filter')(self.countries, {name: name});
    	self.setMarkersOnMap(filteredCountries);
	};

	self.show = function(country) {
	    self.map.setCenter({ lat: country.latlng[0], lng: country.latlng[1] });
	    self.map.setZoom(4);
	    self.selected = country.name;
	    $location.search('name', self.selected);
	};
}

angular
	.module('countryList')
	.component('countryList', {
		templateUrl: 'country-list/country-list.template.html',
		controller: ['Country','$filter','LoadGoogleMap','$location','$routeParams','$timeout',countryListController]
	});
