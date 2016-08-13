'use strict';

angular.module('ecommerceApp')
	.controller('cartCtrl', function($scope, $state, profileSvc, authenticationSvc, productSvc, cartSvc) {

		$scope.emptyCart = true;

		if (authenticationSvc.isLoggedIn()) {
			profileSvc.getProfile().then(function(result) {
				$scope.cartProducts = [];
				for (var key in result.data.cart) {
					if (!isNaN(key)) {
						$scope.cartProducts.push(result.data.cart[key]);
						$scope.emptyCart = false
					}
				}

				$scope.total = $scope.cartProducts.reduce(function(total, current) {
					var price = current.item.price;
					return total + price;
				}, 0);
			});

			$scope.removeFromCart = function(product) {
				cartSvc.removeFromCart(authenticationSvc.currentUser().user_id, {item: product}).then(function(result) {
					$state.reload();
				});

			};
		} else {
			$scope.cartProducts = [];
			for (var key in localStorage) {
				productSvc.getProduct(localStorage.getItem(key)).then(function(result) {
					$scope.cartProducts.push({item: result[0]});

					$scope.emptyCart = false;

					$scope.total = $scope.cartProducts.reduce(function(total, current) {
						var price = current.item.price;
						return total + price;
					}, 0);

				});
			}

			$scope.removeFromCart = function(product) {
				$scope.cartProducts.forEach(function(item, index) {
					for (var key in localStorage) {
						if (localStorage[key] === product) {
							localStorage.removeItem(key);
						}
					}
					$state.reload();
				});
			}

		}

	});
	