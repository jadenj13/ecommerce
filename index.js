'use strict';

// Installing Dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	cors = require('cors'),
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
app.put('/api/cart/:user_id', function(req, res) {
		User.findById(req.params._id, function(err, result) {
			if (err) { res.status(500).send(err) }
			var myUser = res;
			var foundItem = -1;
			myUser.cart.forEach(function(cartItem, index) {
				if (cartItem._id.toString() === req.body) {
					foundItem = index;
				}
			});
			if (foundItem >= 0) {
				console.log('Found Item: ', foundItem);
				myUser.cart.splice(foundItem, 1);
			}
			saveUser(myUser, req, res);
		});
		function saveUser(userToSave, req, res) {
			userToSave.save(function(err, result) {
				if (err) { res.status(500).send(err) }
				else { res.send(result) }
			})
		});
	});


// Connections
var port = process.env.PORT || port.port,
	mongoUri = process.env.MONGODB_URI;

app.listen(port, function() {
	console.log('Listening on port: ', port);
});

mongoose.connect(mongoUri);





