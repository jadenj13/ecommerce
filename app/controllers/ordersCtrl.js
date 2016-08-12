'use strict';

var User = require('../models/userModel');

function postToCart(req, res) {
	User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(err, result) {
		if (err) return res.status(500).send(err);
		else res.send(result);
	});
}

function deleteFromCart(req, res) {
	User.findByIdAndUpdate(req.params.user_id, {$pull: {cart: req.body}}, function(err, result) {
		if (err) return res.status(500).send(err);
		else res.send(result);
	});
}

module.exports = {
	postToCart: postToCart,
	deleteFromCart: deleteFromCart
}

