'use strict';

// Dependencies
var User = require('../models/userModel');

function read(req, res) {
  	if (!req.payload._id) {
    	res.status(401).json({
      		"message" : "UnauthorizedError: private profile"
    	});
  	} else {
    	User
            .findById(req.payload._id)
            .populate('cart.item')
      		.exec(function(err, user) {
        		res.status(200).json(user);
      	});
  	}
}

module.exports = {
	read: read
};
