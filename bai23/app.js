var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
	$scope.username = '';
	$scope.lowercaseUsername = function(){
		return $filter('lowercase')($scope.username);
	}
	$scope.len5 = 5;
	$scope.rules = [];
	$http.get('http://superdev.sondn.com/api/v1/lessons') // http://vunb.herokuapp.com/api/demo
	.success(function(result) {
		$scope.rules = result;
		console.log(result);
	}).error(function(data, status) {
		console.log(data);
		console.log(status);
	})
	
}]);
