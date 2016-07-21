'use strict';

angular.module('ecommerceApp')
	.controller('navigationCtrl', function($scope, $location, authenticationSvc, $state) {

		$scope.isLoggedIn = authenticationSvc.isLoggedIn();

		$scope.currentUser = authenticationSvc.currentUser();

		$scope.logout = function() {
			authenticationSvc.logout();
			$state.reload();
		};

	});