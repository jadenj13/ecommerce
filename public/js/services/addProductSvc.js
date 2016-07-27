'use strict';

angular.module('ecommerceApp')
	.service('addProductSvc', function($http, $stateParams) {

		this.addProduct = function(product) {
			if ($stateParams.action === 'create') {
				return $http.post('http://localhost:3000/api/products', product).then(function(response) {
					console.log(response);
				})
			} else if ($stateParams.action === 'update') {
				return $http.put('http://localhost:3000/api/products/' + $stateParams.id, product).then(function(response) {
					console.log(response);
				})
			}
		};

		this.getProduct = function() {
			if ($stateParams.id) {
				return $http.get('http://localhost:3000/api/products/' + $stateParams.id).then(function(result) {
					return result.data[0];
				});
			}
		};

		this.action = function() {
			if ($stateParams.action === 'create') {
				return 'Add';
			} else if ($stateParams.action === 'update') {
				return 'Update';
			}
		};

	});