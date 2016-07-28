'use strict';

// Dependencies
var mongooose = require('mongoose'),
	Schema = mongooose.Schema;

// Cart Schema
var cartSchema = new Schema({
	product: [{
		item: {
			type: Schema.Types.ObjectId,
			ref: 'Product',
			required: true
		},
		quantity: {
			type: Number,
			required: true,
			default: 1,
			min: 1
		}
	}]
});

// Export Cart Schema
module.exports = cartSchema;


