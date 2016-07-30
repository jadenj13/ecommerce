'use strict';

angular.module('ecommerceApp')
	.service('productSvc', function($http) {

		this.getProduct = function(id) {
			return $http.get('/api/products/' + id).then(function(result) {
				return result.data;
			});
		};

		this.removeProduct = function(id) {
			return $http.delete('/api/products/' + id).then(function(result) {
				return result;
			});
		};

		this.postToCart = function(userId, product) {
			return $http.post('/api/cart/' + userId, product).then(function(result) {
				return result;
			});
		};

	});
	