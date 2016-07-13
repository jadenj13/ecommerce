'use strict';

// Installing Dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	productCtrl = require('./server/controllers/productCtrl');

var app = express();


// Middleware
app.use('/', bodyParser.json());
app.use('/', cors());


// Endpoints
app.post('/api/products', productCtrl.create);

app.get('/api/products', productCtrl.readAll);

app.get('/api/products/:id', productCtrl.readById);

app.put('/api/products/:id', productCtrl.update);

app.delete('/api/products/:id', productCtrl.delete);


// Connections
var port = process.env.PORT || 3000,
	mongoUri = 'mongodb://localhost:27017/ecommerce';

app.listen(port, function() {
	console.log('Listening on port: ', port);
});

mongoose.connect(mongoUri);

mongoose.connection.once('open', function() {
	console.log('Connected to MondoDB at: ', mongoUri);
});



