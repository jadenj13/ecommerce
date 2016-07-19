angular.module('ecommerceApp')
	.service('categorySvc', function($http) {

		this.getProducts = function() {
			return $http.get('http://localhost:3000/api/products').then(function(result) {
				return result.data;
			})
		};

	});