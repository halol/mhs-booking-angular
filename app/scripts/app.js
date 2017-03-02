'use strict';

/**
 * @ngdoc overview
 * @name mhsAngularApp
 * @description
 * # mhsAngularApp
 *
 * Main module of the application.
 */
angular
  .module('mhsAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results'
      })
      .when('/booking', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl',
        controllerAs: 'booking'
      })
      .when('/summary', {
        templateUrl: 'views/summary.html',
        controller: 'SummaryCtrl',
        controllerAs: 'summary'
      })
      .when('/payments', {
        templateUrl: 'views/payments.html',
        controller: 'PaymentsCtrl',
        controllerAs: 'payments'
      })
      .when('/confirmation', {
        templateUrl: 'views/confirmation.html',
        controller: 'ConfirmationCtrl',
        controllerAs: 'confirmation'
      })
      .when('/myaccount', {
        templateUrl: 'views/myaccount.html',
        controller: 'MyaccountCtrl',
        controllerAs: 'myaccount'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  $(function () {

    $('.panel').click(function(e) {
      console.log("click");
    });

  });
