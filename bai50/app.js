var myApp = angular.module('myApp', []);

myApp.controller('parentController', ['$scope', function($scope) {
	this.message = 'Parent message!'
}]);
myApp.controller('childController', ['$scope', function($scope) {
	this.message = 'Child message!'
}]);