var myApp = angular.module('myApp', []);
myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
	$scope.username = '';
	$scope.lowercaseUsername = function(){
		return $filter('lowercase')($scope.username);
	}
	$scope.$watch('username', function(newValue, oldValue){
		console.log('Changed!');
		console.log('New value: '+newValue);
		console.log('Old value: '+oldValue);
	});
	$timeout(function(){
		$scope.username = 'Bao';
		console.log('Changed!');
	}, 3000);
}]);
