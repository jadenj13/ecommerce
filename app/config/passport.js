'use strict';

// Dependencies
var LocalStrategy = require('passport-local').Strategy,
	User = require('../models/userModel');

// Exporting Passport Middleware Function
module.exports = function(passport) {
  	passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(username, password, done) {
        User.findOne({ email: username }, function (err, user) {
        	if (err) { return done(err); }
        	// Return if user not found in database
        	if (!user) {
          	return done(null, false, {
            	message: 'User not found'
          	});
        }
        // Return if password is wrong
        if (!user.validPassword(password)) {
            return done(null, false, {
            	message: 'Incorrect Password'
          	});
        }
        // If credentials are correct, return the user object
        return done(null, user);
      	});
    }
  	));
};







