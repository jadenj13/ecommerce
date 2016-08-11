'use strict';

angular.module('ecommerceApp')
	.service('cartSvc', function($http) {

		this.removeFromCart = function(user_id, product) {
			$http.put('/api/cart/' + user_id, product).then(function(result) {
				return result;
			});
		};

	});