'use strict';

describe('Controller: ForgotpasswordCtrl', function () {

  // load the controller's module
  beforeEach(module('mhsAngularApp'));

  var ForgotpasswordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForgotpasswordCtrl = $controller('ForgotpasswordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForgotpasswordCtrl.awesomeThings.length).toBe(3);
  });
});
