'use strict';

angular.module('ecommerceApp')
	.service('addProductSvc', function($http, $stateParams) {

		this.addProduct = function(product) {
			if ($stateParams.action === 'create') {
				return $http.post('http://localhost:3000/api/products', product).then(function(response) {
					console.log(response);
				})
			} else if ($stateParams.action === 'update') {
				return $http.put('http://localhost:3000/api/products', product).then(function(response) {
					console.log(response);
				})
			}
		}

	});