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
			personObject: '=',
			formattedAddressFunction: '&'
		}
	}
})
// ko chay duoc
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $scope.person = {
        name: 'Hoa Lê',
        address: '59 Láng Hạ',
        city: 'Hà Nội',
        country: 'Việt Nam'
    }
    $scope.formattedAddress = function(person) {
    	// 2 dong code giong y het nhau ma 1 dong ko chay dc con 1 dong thi chay duoc, kho hieu qua
        return person.address + ', ' + preson.city + ', ' + person.country; // ko chay duoc        
        return person.address + ', ' + person.city + ', ' + person.country; // chay duoc
    }
}]);

myApp.controller('secondController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
	
}]);
