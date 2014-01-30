'use strict';

angular.module('angularFullstackTestApp')
  .controller('GameCtrl', function ($scope, $http) {
    $http.get('/api/games').success(function(res) {
      $scope.games = res;
    });

    $scope.createGame = function() {
      console.log($scope.game);
      if ($scope.game && $scope.game.name) {
        $http({
          method: 'POST',
          url: '/api/game',
          data: $scope.game
        }).success(function() {
          $scope.games.push({
            name: $scope.game.name
          });
          $scope.game.name = '';
        });
      }
    };
  });
