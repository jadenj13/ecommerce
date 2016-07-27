'use strict';

angular.module('ecommerceApp')
	.controller('addProductCtrl', function($scope, addProductSvc, profileSvc, $location) {

		profileSvc.getProfile().then(function(result) {
			$scope.user = result.data;
		}).catch(function() {
			$location.path('home');
		})

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

		$scope.getProduct = function() {
			if (addProductSvc.getProduct()) {
				addProductSvc.getProduct().then(function(result) {
					$scope.title = result.title;
					$scope.description = result.description;
					$scope.price = result.price;
					$scope.img = result.img;
					$scope.gender = result.gender;
					$scope.category = result.category;
				})
			}
		};

		$scope.getProduct();

		$scope.action = addProductSvc.action();

});