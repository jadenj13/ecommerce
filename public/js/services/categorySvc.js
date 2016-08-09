'use strict';

angular.module('ecommerceApp')
	.service('categorySvc', function($http) {

		this.getProducts = function() {
			return $http.get('/api/products').then(function(result) {
				return result.data;
			})
		};

	});