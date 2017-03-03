'use strict';

/**
 * @ngdoc function
 * @name mhsAngularApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the mhsAngularApp
 */
angular.module('mhsAngularApp')
  .controller('NavCtrl', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showUserNav = function() {
      if($location.path() === '/myaccount') {
        // console.log($location.path())
        return true;
      }
    };
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
