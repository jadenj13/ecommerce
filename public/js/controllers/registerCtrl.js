'use strict';

angular.module('ecommerceApp')
	.controller('registerCtrl', function($scope, $location, authenticationSvc) {

		// var vm = this;

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