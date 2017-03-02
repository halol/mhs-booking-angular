'use strict';

describe('Controller: SignupDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('mhsAngularApp'));

  var SignupDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignupDetailsCtrl = $controller('SignupDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SignupDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
