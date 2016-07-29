'use strict';

angular.module('ecommerceApp')
	.controller('categoryCtrl', function($scope, $stateParams, categorySvc, authenticationSvc, productSvc) {

		($scope.getProducts = function() {
			categorySvc.getProducts().then(function(results) {
				$scope.products = [];
				for (var i = 0; i < results.length; i++) {
					if (results[i].gender === $stateParams.gender && results[i].category === $stateParams.category) {
						$scope.products.push(results[i]);
					}
				}
			})
		})();

		$scope.postToCart = function(item_id) {
			productSvc.postToCart(authenticationSvc.currentUser().user_id, { item: item_id }).then(function(result) {
				console.log(result);
			});
		};

	});