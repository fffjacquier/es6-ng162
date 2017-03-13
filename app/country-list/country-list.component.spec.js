describe('country list', function () {

	beforeEach(module('countryList'));

	describe('countryListController', function () {

		var $httpBackend, ctrl;

		beforeEach(inject(function ($componentController, _$httpBackend_) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expect('GET','https://restcountries-v1.p.mashape.com/all')
						.respond([{name: 'Afghanistan'}, {name: 'Iran'}]);

			ctrl = $componentController('countryList');
		}));

		it('should set a default value for orderProp prop', function() {
			expect(ctrl.orderProp).toBe('name');
		});

		it('should create a country model with 2 countries fetched with $resource', function () {
			jasmine.addCustomEqualityTester(angular.equals);
		    expect(ctrl.countries).toEqual([]);

			$httpBackend.flush();
			expect(ctrl.countries).toEqual([{name: 'Afghanistan'}, {name: 'Iran'}]);
		});
	})
});
