'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	social: {
		facebook: String
	},
	name: String,
	polls: [{
		type: Schema.Types.ObjectId,
		ref: 'Poll',
	}]
});

module.exports = mongoose.model('User', User);
