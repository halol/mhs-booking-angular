'use strict';

/**
 * @ngdoc function
 * @name mhsAngularApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the mhsAngularApp
 */
angular.module('mhsAngularApp')
  .controller('ResultsCtrl', function ($scope, $http) {

    $scope.clickOnPanel = function(e) {
      e.stopPropagation();
      var element = e.currentTarget;
      angular.element('.panel.panel-success').removeClass('panel-success');
	     angular.element(element).toggleClass('panel-success');
    };
    // Or you can use $http
    var url = 'https://www.mockaroo.com/27947bb0/download?count=10&key=09976850';
    $http.get(url).then(function(response) {
      $scope.results = response.data;
      $scope.isloaded = true;
    }, function(response) {
       console.log(response.error);
    });
  });
