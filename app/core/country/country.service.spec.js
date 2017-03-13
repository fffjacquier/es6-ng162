'use strict';

describe('Country service', function() {

	var $httpBackend,
		Country,
		countriesData = [
			{name: 'Afghanistan'},
			{name: 'Pakistan'},
			{name: 'Tadjikistan'}
		];

	// Add a custom equality tester before each test to ignore functions and $-prefix 
	beforeEach(function() {
    	jasmine.addCustomEqualityTester(angular.equals);
  	});

  	beforeEach(module('core.country'));

  	beforeEach(inject(function (_$httpBackend_, _Country_) {
  		$httpBackend = _$httpBackend_;
  		$httpBackend.expect('GET','https://restcountries-v1.p.mashape.com/all').respond(countriesData);
  		
  		Country = _Country_;
  	}));

  	afterEach(function () {
	    $httpBackend.verifyNoOutstandingExpectation();
	    $httpBackend.verifyNoOutstandingRequest();
	});

	it('should fetch the countries data from `https://restcountries-v1.p.mashape.com/all`', function() {
	    var countries = Country.query();

	    expect(countries).toEqual([]);

	    $httpBackend.flush();
	    expect(countries).toEqual(countriesData);
  	});
});
