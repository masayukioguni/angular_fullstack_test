'use strict';

angular.module('angularFullstackTestApp')
  .controller('TestCtrl', function ($scope, $http) {
    $http.get('/api/tests').success(function(tests) {
      $scope.tests = tests;
    });
  });
