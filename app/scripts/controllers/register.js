'use strict';

/**
 * @ngdoc function
 * @name recipepageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipepageApp
 */
 
angular.module('recipepageApp')
  .controller('RegisterCtrl', [ '$scope', '$uibModal', function ($scope, $uibModal) {
    $scope.title='Register';

	$scope.open = function () {
		var modalInstance = $uibModal.open({
			templateUrl: '../views/register.html',
			controller: 'ModalInstanceCtrl'
		});
	}
  }]);