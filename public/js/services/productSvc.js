'use strict';

angular.module('ecommerceApp')
	.service('productSvc', function($http) {

		this.getProduct = function(id) {
			return $http.get('http://localhost:3000/api/products/' + id).then(function(result) {
				return result.data;
			});
		};

		this.removeProduct = function(id) {
			return $http.delete('http://localhost:3000/api/products/' + id).then(function(result) {
				return result;
			});
		};

		this.postToCart = function(userId, product) {
			return $http.post('http://localhost:3000/api/cart/' + userId, product).then(function(result) {
				return result;
			});
		};

	});
	