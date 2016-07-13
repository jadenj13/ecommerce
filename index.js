// Installing Dependencies
var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose');


var app = express();


// Endpoints


// Connections
var port = 3000,
	mongoUri = 'mongodb://localhost:27017/ecommerce';

app.listen(port, function() {
	console.log('Listening on port: ', port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('Connected to MondoDB at: ', mongoUri);
});