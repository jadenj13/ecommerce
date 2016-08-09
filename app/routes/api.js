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


module.exports = router;

