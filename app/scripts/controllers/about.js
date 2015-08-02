'use strict';

/**
 * @ngdoc function
 * @name addressBookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
