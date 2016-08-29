'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
angular.module('recipepageApp')
  .controller('RandomCtrl', [ '$scope', '$uibModal', function ($scope, $uibModal) {
    $scope.title='Random Search';

	$scope.open = function () {
		var modalInstance = $uibModal.open({
			templateUrl: '../views/random.html',
			controller: 'ModalInstanceCtrl'
		});
	}
  }]);