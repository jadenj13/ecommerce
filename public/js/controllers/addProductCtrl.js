'use strict';

angular.module('ecommerceApp')
	.controller('addProductCtrl', function($scope, addProductSvc) {

		$scope.addProduct = function() {
			var product = {
				title: $scope.title,
				description: $scope.description,
				price: $scope.price,
				img: $scope.img,
				gender: $scope.gender,
				category: $scope.category
			};

			addProductSvc.addProduct(product).then(function(results) {
				$scope.title = '';
				$scope.description = '';
				$scope.price = '';
				$scope.img = '';
				$scope.gender = '';
				$scope.category = '';
			});
		}

});