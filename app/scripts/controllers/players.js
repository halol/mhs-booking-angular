'use strict';

/**
 * @ngdoc function
 * @name mhsAngularApp.controller:PlayersCtrl
 * @description
 * # PlayersCtrl
 * Controller of the mhsAngularApp
 */
angular.module('mhsAngularApp')
  .controller('PlayersCtrl', function ($scope, $http) {



    $scope.playersList = [];

    $scope.guests = [{
        "id": 1,
        "section": "Ladies",
        "forename": "Wayne",
        "surname": "Kelly",
        "title": "Mrs",
        "handicap": -3
      }, {
        "id": 2,
        "section": "Mens",
        "forename": "Anthony",
        "surname": "Johnston",
        "title": "Mrs",
        "handicap": 6
      }, {
        "id": 3,
        "section": "Ladies",
        "forename": "Ruby",
        "surname": "Hall",
        "title": "Dr",
        "handicap": 9
      }, {
        "id": 4,
        "section": "Mens",
        "forename": "Robert",
        "surname": "Young",
        "title": "Mr",
        "handicap": 5
      }, {
        "id": 5,
        "section": "Ladies",
        "forename": "Jean",
        "surname": "Nelson",
        "title": "Ms",
        "handicap": -8
      }];

    // Too many req
    // var url = 'https://www.mockaroo.com/a6b2c080/download?count=5&key=09976850';
    // $http.get(url).then(function(response) {
    //   // $scope.playersList = response.data;
    //   $scope.guests = response.data;
    //   $scope.isloaded = true;
    // }, function(response) {
    //    console.log(response.error);
    // });
    $scope.isloaded = true;
    $scope.funAddPlayer = function(object) {
      if(object) {
        console.log(object);
        $scope.playersList.push(object);
        $scope.guests.splice(object.$index, 1);
      }
      // $scope.players.push(object);
    };
    $scope.removePlayer = function(object) {
      if(object) {
        console.log(object);
        $scope.guests.push(object);
        $scope.playersList.splice(object.$index, 1);
      }
      // $scope.players.push(object);
    };
  });
