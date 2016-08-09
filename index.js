'use strict';

// Installing Dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	productCtrl = require('./app/controllers/productCtrl'),
	ordersCtrl = require('./app/controllers/ordersCtrl');


// Passport Middleware
require('./app/config/passport')(passport);


// Routes
var routesApi = require('./app/routes/api');


// Configuration
var port = require('./config/port');


// Express
var app = express();


// Middleware
app.use('/', bodyParser.json());
app.use('/', express.static('./public'));
app.use(passport.initialize());
app.use('/api', routesApi);


// Connections
var port = process.env.PORT || port.port,
	mongoUri = process.env.MONGODB_URI;

app.listen(port, function() {
	console.log('Listening on port: ', port);
});

mongoose.connect(mongoUri);





