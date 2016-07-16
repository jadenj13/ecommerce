angular.module('ecommerceApp')
	.directive('navigation', function() {
		return {
			restrict: 'E',
			templateUrl: './js/directives/navigation/navigationView.html',
			//controller: 'navigationCtrl as navvm'
		}
	});