'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
angular.module('recipepageApp')
  .controller('SearchCtrl', [ '$scope', function ($scope) {
    $scope.title='Search Recipies';

    $scope.changeText = function() {
        $scope.title = 'Nothing yet!';
    };

  }]);