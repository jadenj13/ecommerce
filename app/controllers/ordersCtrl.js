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
		User.findById(req.params.user_id, function(err, result) {
			if (err) return res.status(500).send(err);
			result.cart.forEach(function(cartItem, index) {
				if (req === cartItem.item) {
					result.cart.splice(index, 1);
				}
			});

			saveUser(result, req, res);

			function saveUser(userToSave, req, res) {
				userToSave.save(function(err, result) {
					if (err) res.status(500).send(err);
					else res.send(result);
				});
			}
		})
	}

};
