'use strict';

angular.module('ecommerceApp')
	.controller('productCtrl', function($scope, $stateParams, productSvc) {

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

	});