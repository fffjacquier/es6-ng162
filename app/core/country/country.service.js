angular
	.module('core.country')
	.factory('Country',['$resource',function($resource) {
		return $resource('https://restcountries-v1.p.mashape.com/all', {}, {
			query: {
        		headers: {
          			'X-Mashape-Key': 'l5eMXwY6d3mshmvnljsx6GVH9YWxp1IsKhsjsnSAZ5yXpYiGRl'
        		},
        		isArray: true,
        		method: 'GET'
      		},
		});
	}]);