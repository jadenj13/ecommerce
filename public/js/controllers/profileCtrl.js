'use strict';

angular.module('ecommerceApp')
	.controller('profileCtrl', function($scope, $location, profileSvc) {

		profileSvc.getProfile().then(function(result) {
			$scope.user = result.data;
		}).catch(function() {
			$location.path('home');
		})

	});
