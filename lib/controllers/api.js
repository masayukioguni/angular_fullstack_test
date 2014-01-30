'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.tests = function(req, res) {
  return res.json([{name:'田中_1'},{name:'鈴木_1'}]);
};