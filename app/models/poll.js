'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PollOption = require('./poll-option');

var Poll = new Schema({
  name: String,
  options: [{
    name: String,
    value: {
      type: Number,
      default: 0,
    }
  }],
  created_by_user_id: Schema.ObjectId, //created_by user id
});

module.exports = mongoose.model('Poll', Poll);
