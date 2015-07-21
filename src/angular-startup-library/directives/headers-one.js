/**
 * @ngdoc function
 * @name headerOne
 * @description
 * This directive will output a navbar onto the screen.
 *
 * The data to pass into the model attribute should look like this:
 * {
 * 	header: {
 * 		logo: 'url to image',
 * 		title: 'Name of site(optional)',
 * 		links: [
 * 			{
 * 				text: 'Home',
 * 				click: function(){
 * 					$location.path('/');
 * 				}
 * 			},
 * 			{
 * 				text: 'About',
 * 				click: function(){
 * 					$location.path('/about');
 * 				}
 * 			}
 * 		]
 * 	}
 * }
 *
 */
angular.module('angularStartupLibrary.directives')
.directive('headerOne', function($location) {
  return {
    templateUrl: 'angular-startup-library/partials/header-one.html',
    scope: {
      header: '='
    },
    restrict: 'EA',
    link: function(scope){
      scope.location = $location;
    }

  };
});
