'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Poll = new Schema({
  name: String,
  options: [{
    name: {
      type: String,
      unique: true,
      required: true, 
      dropDups: true,
    },
    value: {
      type: Number,
      default: 0,
    }
  }],
});

module.exports = mongoose.model('Poll', Poll);
