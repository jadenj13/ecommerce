'use strict';

var User = require('../models/userModel');

module.exports = {

	postToCart: function(req, res) {
		User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(err, result) {
			console.log(req.body);
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	}

};
