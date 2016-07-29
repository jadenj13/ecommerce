'use strict';

// Installing Dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	productCtrl = require('./app/controllers/productCtrl'),
	ordersCtrl = require('./app/controllers/ordersCtrl');


// Passport Middleware
require('./app/config/passport')(passport);


// Routes
var routesApi = require('./app/routes/api');


// Configuration
var db = require('./config/db'),
	port = require('./config/port');


// Express
var app = express();


// Middleware
app.use('/', bodyParser.json());
app.use('/', cors());
app.use('/', express.static('./public'));
app.use(passport.initialize());
app.use('/api', routesApi);


// Endpoints
app.post('/api/products', productCtrl.create);
app.get('/api/products', productCtrl.readAll);
app.get('/api/products/:id', productCtrl.readById);
app.put('/api/products/:id', productCtrl.update);
app.delete('/api/products/:id', productCtrl.delete);

app.post('/api/cart/:user_id', ordersCtrl.postToCart);


// Connections
var port = process.env.PORT || port.port,
	mongoUri = process.env.MONGODB_URI;

app.listen(port, function() {
	console.log('Listening on port: ', port);
});

mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
	console.log('Connected to MondoDB at: ', mongoUri);
});




