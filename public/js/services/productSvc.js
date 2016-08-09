'use strict';

angular.module('ecommerceApp')
	.service('productSvc', function($http) {

		this.getProduct = function(id) {
			return $http.get('https://jadenj13-ecommerce.herokuapp.com/#/api/products/' + id).then(function(result) {
				return result.data;
			});
		};

		this.removeProduct = function(id) {
			return $http.delete('https://jadenj13-ecommerce.herokuapp.com/#/api/products/' + id).then(function(result) {
				return result;
			});
		};

		this.postToCart = function(userId, product) {
			return $http.post('https://jadenj13-ecommerce.herokuapp.com/#/api/cart/' + userId, product).then(function(result) {
				return result;
			});
		};

	});
	