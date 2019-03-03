var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);
weatherApp.run(['$rootScope', function($rootScope) {
	// config
	$rootScope.$on('$locationChangeStart', function(event, next, current) {
		console.log('Current: ' + current);
		console.log('Next: ' + next);
	})
}])