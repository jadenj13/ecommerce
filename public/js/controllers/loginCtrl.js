'use strict';

angular.module('ecommerceApp')
	.controller('loginCtrl', function($scope, $location, authenticationSvc) {

		$scope.credentials = {
			email: '',
			password: ''
		};

		$scope.onSubmit = function() {
			authenticationSvc.login($scope.credentials).then(function() {
				$location.path('home');
			});
		};

	});