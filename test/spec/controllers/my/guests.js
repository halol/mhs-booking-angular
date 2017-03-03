'use strict';

describe('Controller: MyGuestsCtrl', function () {

  // load the controller's module
  beforeEach(module('mhsAngularApp'));

  var MyGuestsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyGuestsCtrl = $controller('MyGuestsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyGuestsCtrl.awesomeThings.length).toBe(3);
  });
});
