'use strict';

angular.module('ecommerceApp')
	.controller('genderCtrl', function($scope, $stateParams) {

		$scope.gender = $stateParams.gender;

		var genderString = $stateParams.gender;
		$scope.genderCapitalized = genderString.charAt(0).toUpperCase() + genderString.slice(1);

	})