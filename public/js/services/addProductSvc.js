'use strict';

angular.module('ecommerceApp')
	.service('addProductSvc', function($http, $stateParams) {

		this.addProduct = function(product) {
			if ($stateParams.action === 'create') {
				return $http.post('https://jadenj13-ecommerce.herokuapp.com/#/api/products', product).then(function(response) {
					console.log(response);
				})
			} else if ($stateParams.action === 'update') {
				return $http.put('https://jadenj13-ecommerce.herokuapp.com/#/api/products/' + $stateParams.id, product).then(function(response) {
					console.log(response);
				})
			}
		};

		this.getProduct = function() {
			if ($stateParams.id) {
				return $http.get('https://jadenj13-ecommerce.herokuapp.com/#/api/products/' + $stateParams.id).then(function(result) {
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