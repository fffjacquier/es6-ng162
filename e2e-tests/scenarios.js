'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('kpler test app', function () {


	it('should redirect index.html to index.html#!/countries', function () {
		browser.get('index.html');
		expect(browser.getLocationAbsUrl()).toBe('/countries');
	})

	describe('view: countrylist', function () {

		beforeEach(function () {
	    	browser.get('index.html');
		});

		it('should filter the countries list as a user types into the search box', function () {

		  	var countryList = element.all(by.repeater('country in $ctrl.countries'));
		  	var query = element(by.model('$ctrl.model.countryName'));

		  	expect(countryList.count()).toBe(250);

		  	query.sendKeys('ind');
		  	expect(countryList.count()).toBe(3);

		  	query.clear();
		  	query.sendKeys('afg');
		  	expect(countryList.count()).toBe(1);
		});
	});

});
