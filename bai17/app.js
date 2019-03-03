var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.name = 'Bao';
	$timeout(function(){
		$scope.name = 'Boy';
	},5000);
}]);
