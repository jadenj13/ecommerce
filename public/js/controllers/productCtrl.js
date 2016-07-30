'use strict';

angular.module('ecommerceApp')
	.controller('productCtrl', function($scope, $stateParams, productSvc, authenticationSvc) {

		// Get Products
		(function() {
			productSvc.getProduct($stateParams.id).then(function(result) {
				$scope.product = result[0];
			});
		})();

		// Remove Product
		$scope.removeProduct = function() {
			productSvc.removeProduct($stateParams.id).then(function(result) {
				alert('Product removed');
			})
		};

		$scope.id = $stateParams.id;

		$scope.isAdmin = function() {
			if (authenticationSvc.currentUser().admin) {
				return true;
			} else {
				return false;
			}
		};

		var productForCart = {	
			item: $stateParams.id
		};

		$scope.postToCart = function() {
			if (authenticationSvc.isLoggedIn()) {
				productSvc.postToCart(authenticationSvc.currentUser().user_id, productForCart).then(function(result) {
					console.log(result);
				});
			} else {
				localStorage.setItem(productForCart, productForCart);
			}
		};

	});
	