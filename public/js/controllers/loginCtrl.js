'use strict';

angular.module('ecommerceApp')
	.controller('loginCtrl', function($scope, $location, authenticationSvc, productSvc) {

		$scope.credentials = {
			email: '',
			password: ''
		};

		$scope.onSubmit = function() {
			authenticationSvc.login($scope.credentials).then(function() {

				for (var key in localStorage) {
					productSvc.postToCart(authenticationSvc.currentUser().user_id, key).then(function(result) {
						console.log(result);
					});
				}

				$location.path('home');
			});
		};

	});