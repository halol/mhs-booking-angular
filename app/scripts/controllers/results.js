'use strict';

/**
 * @ngdoc function
 * @name mhsAngularApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the mhsAngularApp
 */
angular.module('mhsAngularApp')
  .controller('ResultsCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.clickOnPanel = function(e) {
      e.stopPropagation();
      var element = e.currentTarget;
      angular.element('.panel.panel-success').removeClass('panel-success');
	     angular.element(element).toggleClass('panel-success');
    }
      

  });
