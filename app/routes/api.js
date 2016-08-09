'use strict';

// Dependencies
var express = require('express'),
	router = express.Router(),
	jwt = require('express-jwt'),
	secret = require('../../config/jwt');

var app = express();

// Middleware
var auth = jwt({
  	secret: process.env.SECRET || secret.secret,
  	userProperty: 'payload'
});


// Controllers
var profileCtrl = require('../controllers/profileCtrl'),
	authCtrl = require('../controllers/authCtrl'),
	productCtrl = require('../controllers/productCtrl'),
	ordersCtrl = require('../controllers/ordersCtrl');


// Routes
router.get('/profile', auth, profileCtrl.read);
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
// router.post('/api/products', productCtrl.create);
// router.get('/api/products', productCtrl.readAll);
// router.get('/api/products/:id', productCtrl.readById);
// router.put('/api/products/:id', productCtrl.update);
// router.delete('/api/products/:id', productCtrl.delete);
// router.post('/api/cart/:user_id', ordersCtrl.postToCart);

module.exports = router;

