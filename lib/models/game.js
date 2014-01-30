'use strict'

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var GameSchema = new Schema({
  name: String
});

mongoose.model('Game', GameSchema);