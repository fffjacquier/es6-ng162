angular
	.module('core.map')
	.factory('LoadGoogleMap', ['$q','$window', function($q, $window) {
	    var defer = $q.defer();

	    // Load Google map API script
	    function loadScript() {  
	        // Use global document since Angular's $document is weak
	        var script = document.createElement('script');
	        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDx3sHYVHyOirYx8BoPyzyql6PA9GrNrLo&callback=initMap';

	        document.body.appendChild(script);
	    }

	    // Script loaded callback, send resolve
	    $window.initMap = function () {
	        defer.resolve();
	    }

	    loadScript();

	    return defer.promise;
	}]);