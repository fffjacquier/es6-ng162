function countryController($location) {
	var self = this;
	console.log(this.country);

	this.$onInit = function() {
		console.log("$oninit", this);
		this.location = $location;
	}
}
countryController.prototype.show = function(c) {
	this.map.setCenter({ lat: c.latlng[0], lng: c.latlng[1] });
	this.map.setZoom(4);
	
	//$timeout(function() {
	this.location.search('name', c.name);

};
var test = 1;
(function(){
	
})()

angular.module('countryList')
.component('country', {
	templateUrl: 'country/country-template.js',
	controller: ['$location',countryController],
	bindings: {
		country: '<',
		map: '<'
	}
})