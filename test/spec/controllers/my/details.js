'use strict';

describe('Controller: MyDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('mhsAngularApp'));

  var MyDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyDetailsCtrl = $controller('MyDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
