'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PollOption = require('./poll-option');

var Poll = new Schema({
  name: String,
  options: [{
    name: String,
    value: Number,
  }],
  created_by: Schema.ObjectId, //created_by user id
});

module.exports = mongoose.model('Poll', Poll);
