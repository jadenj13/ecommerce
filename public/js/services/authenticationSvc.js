'use strict';

angular.module('ecommerceApp')
	.factory('authenticationSvc', function($http, $window) {

		var saveToken = function(token) {
			$window.localStorage['mean-token'] = token;
		};

		var getToken = function() {
			return $window.localStorage['mean-token'];
		};

		var isLoggedIn = function() {
			var token = getToken();
			var payload;

			if (token) {
				payload = token.split('.')[1];
        		payload = $window.atob(payload);
        		payload = JSON.parse(payload);

        		return (payload.exp > Date.now() / 1000);
			} else {
				return false;
			}
		};

		var currentUser = function() {
			if (isLoggedIn()) {
				var token = getToken();
				var payload = token.split('.')[1];
				payload = $window.atob(payload);
				payload = JSON.parse(payload);

				return {
					name: payload.name,
					email: payload.email,
					admin: payload.admin,
					user_id: payload._id
				};
			}
		};

		var register = function(user) {
			return $http.post('/api/register', user).then(function(result) {
				saveToken(result.data.token);
			});
		};

		var login = function(user) {
			return $http.post('/api/login', user).then(function(result) {
				saveToken(result.data.token);
			});
		};

		var logout = function() {
			$window.localStorage.removeItem('mean-token');
		};

		return {
			saveToken: saveToken,
			getToken: getToken,
			isLoggedIn: isLoggedIn,
			currentUser: currentUser,
			register: register,
			login: login,
			logout: logout
		};

	});


