'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollOption = new Schema();

module.exports = mongoose.model('PollOption', PollOption);
