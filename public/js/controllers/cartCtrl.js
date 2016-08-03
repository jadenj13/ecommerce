'use strict';

angular.module('ecommerceApp')
	.controller('cartCtrl', function($scope, profileSvc) {

		profileSvc.getProfile().then(function(result) {
			$scope.cartProducts = [];
			for (var key in result.data.cart) {
				if (!isNaN(key)) {
					$scope.cartProducts.push(result.data.cart[key]);
				}
			}

			$scope.total = $scope.cartProducts.reduce(function(total, current) {
				var price = current.item.price;
				var numTotal = total.item.price;
				return numTotal + price;
			});
		});

});
	