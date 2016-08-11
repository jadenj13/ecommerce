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
		console.log(req.body);
		User.findByIdAndUpdate(req.params.user_id, {$pull: {cart: req.body}}, function(err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		})
	}

};
