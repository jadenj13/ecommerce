angular.module('ecommerceApp')
	.service('addProductSvc', function($http) {

		this.addProduct = function(product) {
			return $http.post('http://localhost:3000/api/products', product).then(function(response) {
				console.log(response);
			})
		}

	});