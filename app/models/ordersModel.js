'use strict';

// Dependencies
var mongoose = require('mongoose'),
	productSchema = require('./productModel'),
	Schema = mongoose.Schema;

// Orders Schema
var ordersSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	products: {
		item: productSchema,
		quantity: {
			type: Number,
			min: 1,
			required: true
		},
		orderDate: {
			type: Date,
			default: new Date()
		}
	}
})

// Export schema as a model
module.exports = mongoose.model('Orders', ordersSchema);


