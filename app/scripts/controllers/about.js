'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
angular.module('recipepageApp')
  .controller('AdminCtrl', [ '$scope', function ($scope, $location) {
    $scope.title='Admin';

    $scope.goLogin = function() {
        var path = "views/admin.html";
 		window.location.href = path;
    };

    console.log(jQuery.fn.jquery);
  }]);
