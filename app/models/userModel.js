'use strict';

var mongoose = require('mongoose'),
	crypto = require('crypto'),
	jwt = require('jsonwebtoken'),
	jwtSecret = require('../../config/jwt'),
    //cart = require('./cartSchema');



var userSchema = new mongoose.Schema({
  	email: {
	    type: String,
	    unique: true,
	    required: true
  	},
  	name: {
    	type: String,
    	required: true
  	},
  	hash: String,
  	salt: String,
    cart: [{
        type: Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    }],
    orders: [],
    admin: Boolean
});


userSchema.methods.setPassword = function(password){
  	this.salt = crypto.randomBytes(16).toString('hex');
  	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  	return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  	var expiry = new Date();
  	expiry.setDate(expiry.getDate() + 7);

  	return jwt.sign({
	    _id: this._id,
	    email: this.email,
	    name: this.name,
      admin: this.admin,
	    exp: parseInt(expiry.getTime() / 1000),
	}, jwtSecret.secret);
};

module.exports = mongoose.model('User', userSchema);




