'use strict';

angular.module('angularFullstackTestApp')
  .controller('GameCtrl', function ($scope, $http,$routeParams) {
    $http.get('/api/games').success(function(res) {
      console.log($routeParams);
      $scope.games = res;
    });

    $scope.createGame = function() {

      
      if ($scope.game && $scope.game.name) {
        $http({
          method: 'POST',
          url: '/api/game',
          data: $scope.game
        }).success(function() {
          $scope.games.push({
            name: $scope.game.name,
            url: $scope.game.url
          });
          $scope.game.name = '';
          $scope.game.url = '';
        });
      }
    };
  });
