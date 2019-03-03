var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/second', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
	.when('/second/:num', {
		templateUrl: 'pages/second.html',
		controller: 'secondController'
	})
})
myApp.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http) {
	$scope.name = 'Main';
	$log.main = 'Variable from main';
	$log.info($scope);
}]);

myApp.controller('secondController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
	$scope.num = $routeParams.num || 1;
	$log.second = 'Variable from second';
	$log.info($scope);
}]);
