'use strict';

/**
 * @ngdoc function
 * @name thatcodecornerMusicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thatcodecornerMusicApp
 */
angular.module('thatcodecornerMusicApp')
  .controller('MainCtrl', function ($scope) {

    $scope.albumData = {
      'albums' :
        [
          {
            'name' : 'Thriller',
            'artist' : 'Micheal Jackson',
            'released' : '1982',
            'instock' : true
          },
          {
            'name' : 'The Dark Side of the Moon',
            'artist' : 'Pink Floyd',
            'released' : '1973',
            'instock' : true
          },
          {
            'name' : 'Bat Out of Hell',
            'artist' : 'Meat Loaf',
            'released' : '1977',
            'instock' : false
          },
          {
            'name' : 'Their Greatest Hits',
            'artist' : 'Eagles',
            'released' : '1976',
            'instock' : true
          }
        ]
    };

  });
