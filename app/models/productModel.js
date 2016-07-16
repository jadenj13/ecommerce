'use strict';

// Create Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	title: {
		type: String,
		required: true,
		index: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true,
		min: 0
	},
	img: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		enum: ['male', 'female', 'neutral'],
		required: true,
	},
	category: {
		type: String,
		required: true
	}
});


// Export Schema as model
module.exports = mongoose.model('Products', productSchema);




