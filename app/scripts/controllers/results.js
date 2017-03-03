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
    var url = "https://www.mockaroo.com/27947bb0/download?count=10&key=09976850";
    $http.get(url).then(function(response) {
      $scope.results = response.data;
      $scope.isloaded = true;
    }, function() {
       alert("error");
    });

    $scope.filterTime = function(time) {
      var temp = time.split(':');
      var minutes = temp[1];
      var hours = function() {
        if(temp[0].length == 1) {
          return '0'+temp[0];
        }
      }
      return hours + ':' + temp[1];
    }
  });
