'use strict'

var Product = require('../models/productModel');


module.exports = {

// Endpoint Callbacks
	create: function(req, res) {
		var newProduct = new Product(req.body);
		newProduct.save(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	readAll: function(req, res) {
		Product.find().exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	readById: function(req, res) {
		Product.find({_id: req.params.id}).exec(function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	update: function(req, res) {
		Product.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}, 

	delete: function(req, res) {
		Product.findByIdAndRemove(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}

}



