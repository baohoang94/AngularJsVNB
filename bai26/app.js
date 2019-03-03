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
})
myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
	$scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
	$scope.name = 'Second';
}]);
