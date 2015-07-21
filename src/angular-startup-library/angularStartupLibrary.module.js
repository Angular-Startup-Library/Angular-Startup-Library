(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularStartupLibrary.config', [])
      .value('angularStartupLibrary.config', {
          debug: true
      });

  // Modules
  angular.module('angularStartupLibrary.directives', []);
  angular.module('angularStartupLibrary.directives', []);
  angular.module('angularStartupLibrary.filters', []);
  angular.module('angularStartupLibrary.services', []);
  angular.module('angularStartupLibrary',
      [
          'angularStartupLibrary.config',
          'angularStartupLibrary.directives',
          'angularStartupLibrary.filters',
          'angularStartupLibrary.services',
          'ngResource',
          'ngCookies',
          'ngSanitize',
          'aslPartials'
      ]);

})(angular);
