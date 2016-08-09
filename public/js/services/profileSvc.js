'use strict';

angular.module('ecommerceApp')
	.service('profileSvc', function($http, authenticationSvc) {

		this.getProfile = function() {
			return $http.get('https://jadenj13-ecommerce.herokuapp.com/#/api/profile', {
				headers: {
					Authorization: 'Bearer ' + authenticationSvc.getToken()
				}
			});
		};

	});
	