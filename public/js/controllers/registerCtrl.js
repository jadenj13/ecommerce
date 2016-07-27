'use strict';

angular.module('ecommerceApp')
	.controller('registerCtrl', function($scope, $location, authenticationSvc) {

		$scope.credentials = {
			name: '',
			email: '',
			password: ''
		};

		$scope.onSubmit = function() {
			authenticationSvc.register($scope.credentials)
				.then(function() {
					$location.path('home');
				});
		};

	});