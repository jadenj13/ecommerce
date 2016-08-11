'use strict';

var User = require('../models/userModel');

module.exports = {

	postToCart: function(req, res) {
		User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},

	deleteFromCart: function(req, res) {
		User.findByIdAndUpdate(req.params.user_id, {$pull: {cart: {item: req.body}}}, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		})
	}

};
