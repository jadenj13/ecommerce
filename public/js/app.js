'use strict';

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
				url: '/products/:gender',
				templateUrl: './views/gender.html',
				controller: 'genderCtrl'
			})
			.state('category', {
				url: '/products/:gender/:category',
				templateUrl: './views/category.html',
				controller: 'categoryCtrl'
			})
			.state('product', {
				url: '/products/:gender/:category/:id',
				templateUrl: './views/product.html',
				controller: 'productCtrl'
			})
			.state('register', {
				url: '/register',
				templateUrl: './views/register.html',
				controller: 'registerCtrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: './views/login.html',
				controller: 'loginCtrl'
			})
			.state('profile', {
				url: '/profile',
				templateUrl: './views/profile.html',
				controller: 'profileCtrl'
			})
			.state('add-product', {
				url: '/admin/:action/:id',
				templateUrl: './views/addProduct.html',
				controller: 'addProductCtrl'
			})
			.state('cart', {
				url: '/cart',
				templateUrl: './views/cart.html',
				controller: 'cartCtrl'
			});

	});