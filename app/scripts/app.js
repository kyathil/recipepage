'use strict';

/**
 * @ngdoc overview
 * @name recipepageApp
 * @description
 * # recipepageApp
 *
 * Main module of the application.
 */
angular
  .module('recipepageApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/random', {
        templateUrl: 'views/random.html',
        controller: 'RandomCtrl',
        controllerAs: 'random'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
