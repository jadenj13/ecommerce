'use strict';

angular.module('ecommerceApp')
	.controller('cartCtrl', function($scope, profileSvc, authenticationSvc, productSvc) {

		if (authenticationSvc.isLoggedIn()) {
			profileSvc.getProfile().then(function(result) {
				$scope.cartProducts = [];
				for (var key in result.data.cart) {
					if (!isNaN(key)) {
						$scope.cartProducts.push(result.data.cart[key]);
					}
				}

				$scope.total = $scope.cartProducts.reduce(function(total, current) {
					var price = current.item.price;
					return total + price;
				}, 0);
			});
		} else {
			$scope.cartProducts = [];
			for (var key in localStorage) {
				productSvc.getProduct(localStorage.getItem(key)).then(function(result) {
					$scope.cartProducts.push({item: result[0]});
					console.log($scope.cartProducts);

					$scope.total = $scope.cartProducts.reduce(function(total, current) {
						var price = current.item.price;
						return total + price;
					}, 0);
					
				});
			}
		}
});
	