'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Poll = new Schema({
  name: String,
  author: String,
  options: [{
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      default: 0,
    }
  }],
});

module.exports = mongoose.model('Poll', Poll);
