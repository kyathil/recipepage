'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
angular.module('recipepageApp')
  .controller('MainController', [ '$scope', function ($scope, $location) {
    $scope.title='Hello App';

    $scope.goLogin = function() {
        var path = "views/about.html";
 		window.location.href = path;
    };

    console.log(jQuery.fn.jquery);
  }]);
