angular.module('ecommerceApp', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './views/home.html',
				controller: 'homeCtrl'
			})
			.state('gender', {
				url: '/:gender',
				templateUrl: './views/gender.html',
				controller: 'genderCtrl'
			})
			.state('category', {
				url: '/:gender/:category',
				templateUrl: './views/category.html',
				controller: 'categoryCtrl'
			})
			.state('product', {
				url: '/:gender/:category/:id',
				templateUrl: './views/product.html',
				controller: 'productCtrl'
			})

			.state('addProduct', {
				url: '/admin/add-product',
				templateUrl: './views/addProduct.html',
				controller: 'addProductCtrl'
			})

	});