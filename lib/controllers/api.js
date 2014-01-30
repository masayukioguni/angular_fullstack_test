'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Test = mongoose.model('Test'),
    Game = mongoose.model('Game');

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
    return Test.find(function(err, tests) {
        if (!err) {
            return res.json(tests);
        } else {
            return res.send(err);
        }
    });
};

exports.games = function(req, res) {
      return Game.find(function(err, tests) {
        if (!err) {
            return res.json(tests);
        } else {
            return res.send(err);
        }
    });
};

exports.createGame = function(req, res) {
	console.log(req);
	console.log(res);
    var Game = mongoose.model('Game');
    new Game({
        name: req.body.name
    }).save(function() {
        res.end();
    });
};