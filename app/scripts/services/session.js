'use strict';

angular.module('angularFullstackTestApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
