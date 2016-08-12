'use strict';

var User = require('../models/userModel');

function postToCart(req, res) {
	User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(err, result) {
		if (err) return res.status(500).send(err);
		else res.send(result);
	});
}

function deleteFromCart(req, res) {
	User.findByIdAndUpdate(req.params.user_id, {$pull: {cart: req.body.item}}, function(err, result) {
		if (err) return res.status(500).send(err);
		else res.send(result);


		// function(err, result) {
		// if (err) { res.status(500).send(err) }
		// var myUser = res;
		// var foundItem = -1;
		// myUser.cart.forEach(function(cartItem, index) {
		// 	if (cartItem._id.toString() === req.body) {
		// 		foundItem = index;				
		// 	}
		// });
		// if (foundItem >= 0) {
		// 	console.log('Found Item: ', foundItem);
		// 	myUser.cart.splice(foundItem, 1);
		// }
		// saveUser(myUser, req, res);
	});
	// function saveUser(userToSave, req, res) {
	// 	userToSave.save(function(err, result) {
	// 		if (err) { res.status(500).send(err) }
	// 		else { res.send(result) }
	// 	})
	// }
}

module.exports = {
	postToCart: postToCart,
	deleteFromCart: deleteFromCart
}

