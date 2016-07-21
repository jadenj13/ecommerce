'use strict';

angular.module('ecommerceApp')
	.controller('categoryCtrl', function($scope, $stateParams, categorySvc) {

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

	});