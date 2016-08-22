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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
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
      .otherwise({
        redirectTo: '/'
      });
  });
