'use strict';

// Dependencies
var express = require('express'),
	router = express.Router(),
	jwt = require('express-jwt');


// Middleware
var auth = jwt({
  	secret: process.env.SECRET,
  	userProperty: 'payload'
});


// Controllers
var profileCtrl = require('../controllers/profileCtrl'),
	authCtrl = require('../controllers/authCtrl');


// Routes
router.get('/profile', auth, profileCtrl.read);
router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);

module.exports = router;

