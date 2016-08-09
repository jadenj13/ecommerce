'use strict';

angular.module('ecommerceApp')
	.service('addProductSvc', function($http, $stateParams) {

		this.addProduct = function(product) {
			if ($stateParams.action === 'create') {
				return $http.post('/api/products', product).then(function(response) {
					console.log(response);
				})
			} else if ($stateParams.action === 'update') {
				return $http.put('/api/products/' + $stateParams.id, product).then(function(response) {
					console.log(response);
				})
			}
		};

		this.getProduct = function() {
			if ($stateParams.id) {
				return $http.get('/api/products/' + $stateParams.id).then(function(result) {
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