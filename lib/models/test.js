'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var TestSchema = new Schema({
  name: String
});

mongoose.model('Test', TestSchema);