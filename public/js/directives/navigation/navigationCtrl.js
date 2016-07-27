'use strict';

angular.module('ecommerceApp')
	.controller('navigationCtrl', function($scope, $location, authenticationSvc, $state) {

		$scope.isLoggedIn = authenticationSvc.isLoggedIn();

		$scope.currentUser = authenticationSvc.currentUser();

		$scope.logout = function() {
			authenticationSvc.logout();
			$state.reload();
		};

		$scope.isAdmin = function() {
			if($scope.currentUser) {
				if ($scope.currentUser.admin) {
					return true;
				} else {
					return false;
				}
			}
		};

	});