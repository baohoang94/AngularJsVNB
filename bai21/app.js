var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
	$scope.username = '';
	$scope.lowercaseUsername = function(){
		return $filter('lowercase')($scope.username);
	}
	$scope.len5 = 5;
	$scope.rules = [
		{ruleName: 'Tai khoan co it nhat 5 ky tu'},
		{ruleName: 'Tai khoan chua duoc su dung'},
		{ruleName: 'Tai khoan co y nghia mot chut'}
	];
	console.log($scope.rules);
}]);
