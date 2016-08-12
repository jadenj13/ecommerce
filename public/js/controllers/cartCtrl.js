'use strict';

angular.module('ecommerceApp')
	.controller('cartCtrl', function($scope, $state, profileSvc, authenticationSvc, productSvc, cartSvc) {

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

		$scope.removeFromCart = function(product) {
			console.log(product);
			cartSvc.removeFromCart(authenticationSvc.currentUser().user_id, product).then(function(result) {
				$state.reload();
			});
		};
});
	