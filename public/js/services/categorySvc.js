'use strict';

angular.module('ecommerceApp')
	.service('categorySvc', function($http) {

		this.getProducts = function() {
			return $http.get('https://jadenj13-ecommerce.herokuapp.com/#/api/products').then(function(result) {
				return result.data;
			})
		};

	});