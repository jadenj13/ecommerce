'use strict';

// Dependencies
var mongooose = require('mongoose'),
	Schema = mongooose.Schema;

// Cart Schema
var cartSchema = new Schema({
	item: {
		type: Schema.Types.ObjectId,
		ref: 'Products',
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		default: 1,
		min: 1
	}
});

// Export Cart Schema
module.exports = cartSchema;


