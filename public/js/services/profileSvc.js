'use strict';

angular.module('ecommerceApp')
	.service('profileSvc', function($http, authenticationSvc) {

		this.getProfile = function() {
			return $http.get('/api/profile', {
				headers: {
					Authorization: 'Bearer ' + authenticationSvc.getToken()
				}
			});
		};

	});
	