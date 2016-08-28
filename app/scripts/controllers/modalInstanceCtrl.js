'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
 
angular.module('recipepageApp')
  .controller('ModalInstanceCtrl', [ '$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };
  }]);