'use strict';

angular.module('angularFullstackTestApp')
  .controller('GameCtrl', function ($scope, $http) {
    $http.get('/api/games').success(function(res) {
      $scope.games = res;
    });
  });
