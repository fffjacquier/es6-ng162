angular
	.module('kplerApp')
	.config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider) {

		// $locationProvider.hashPrefix('!');

		$routeProvider
			.when('/countries', {
				template: '<country-list></country-list>',
				reloadOnSearch: false
			})
			.when('/countries/:name', {
				template: '<country-list></country-list>',
				reloadOnSearch: false
			})
			.otherwise('/countries');
	}]);
