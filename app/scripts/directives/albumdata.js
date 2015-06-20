'use strict';

/**
 * @ngdoc directive
 * @name thatcodecornerMusicApp.directive:albumData
 * @description
 * # albumData
 */
angular.module('thatcodecornerMusicApp')
  .directive('tccAlbumData', function () {
    return {
      restrict: 'E',
      scope: {
        album: '=data'
      },
      templateUrl: '../views/albumdata.html'
    };
  });
