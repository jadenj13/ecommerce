angular.module('ecommerceApp')
	.controller('productCtrl', function($scope, $stateParams, productSvc) {

		($scope.getProduct = function() {
			productSvc.getProduct($stateParams.id).then(function(result) {
				$scope.product = result[0];
			});
		})();

	});