'use strict';

describe('', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('angularStartupLibrary');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('angularStartupLibrary.config')).to.be.ok;
  });

  
  it('should load filters module', function() {
    expect(hasModule('angularStartupLibrary.filters')).to.be.ok;
  });
  

  
  it('should load directives module', function() {
    expect(hasModule('angularStartupLibrary.directives')).to.be.ok;
  });
  

  
  it('should load services module', function() {
    expect(hasModule('angularStartupLibrary.services')).to.be.ok;
  });
  

});