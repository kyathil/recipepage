'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
angular.module('recipepageApp')
  .controller('RandomCtrl', [ '$scope', function ($scope) {
    $scope.title='Random Search';

    $scope.changeText = function() {
        $scope.title = 'Clicked!';
    };

  }]);