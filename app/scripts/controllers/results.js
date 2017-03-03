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
    //var url = 'https://www.mockaroo.com/27947bb0/download?count=10&key=09976850';
    var resultsJSON = [{
      "id": 1,
      "time": "14:06",
      "available": false,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 2,
      "time": "16:10",
      "available": false,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 3,
      "time": "16:29",
      "available": false,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 4,
      "time": "17:41",
      "available": true,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 5,
      "time": "19:23",
      "available": false,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 6,
      "time": "11:07",
      "available": false,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 7,
      "time": "15:02",
      "available": true,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 8,
      "time": "15:58",
      "available": true,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 9,
      "time": "14:53",
      "available": true,
      "type": "1 Round (2 Ball)"
    }, {
      "id": 10,
      "time": "11:22",
      "available": true,
      "type": "1 Round (2 Ball)"
    }];
    // $http.get(url).then(function(response) {
    //   $scope.resultsList = response.data;
    //   $scope.isloaded = true;
    // }, function(response) {
    //    console.log(response.error);
    // });

    $scope.resultsList = resultsJSON;
    $scope.isloaded = true;
  });
