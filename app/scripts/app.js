'use strict';

/**
 * @ngdoc overview
 * @name thatcodecornerMusicApp
 * @description
 * # thatcodecornerMusicApp
 *
 * Main module of the application.
 */
angular
  .module('thatcodecornerMusicApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
