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
					if (key !== 'mean-token') {
						productSvc.postToCart(authenticationSvc.currentUser().user_id, { item: localStorage[key]} ).then(function(result) {
							return result
						});
						localStorage.removeItem(key);
					}
				}

				$location.path('home');
			});
		};

	});