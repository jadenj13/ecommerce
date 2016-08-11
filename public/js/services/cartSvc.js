'use strict';

angular.module('ecommerceApp')
	.service('cartSvc', function($http) {

		this.removeFromCart = function(user_id, product) {
			return $http.put('/api/cart/' + JSON.stringify(user_id), product).then(function(result) {
				return result;
			});
		};

	});