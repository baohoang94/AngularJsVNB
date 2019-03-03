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
myApp.directive('searchResult', function() {
	return {
		restrict: 'AECM',
		templateUrl: 'directives/searchResult.html',
		replace: true,
		scope: {
			personObject: '='
		}
	}
})
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
	$scope.person = {
		name: 'Hoa Le',
		address: '69 Lang Ha'
	}
}]);

myApp.controller('secondController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
	
}]);
