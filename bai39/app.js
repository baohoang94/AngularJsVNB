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
		},
		link: function(scope, elements, attrs) {
			console.log('post-linkig...');
			console.log(scope);
			if (scope.personObject.name == 'Hoa Lan') {
				elements.removeAttr('class');
			}
			console.log(elements);
		}
	}
})
// ko chay duoc
myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $scope.people = [
	    {
	        name: 'Hoa Lê',
	        address: '59 Láng Hạ',
	        city: 'Hà Nội',
	        country: 'Việt Nam'
	    },
	    {
	        name: 'Hoa Lan',
	        address: '69 Láng Hạ',
	        city: 'Hà Nội',
	        country: 'Việt Nam'
	    },
	    {
	        name: 'Hoa Ly',
	        address: '79 Láng Hạ',
	        city: 'Hà Nội',
	        country: 'Việt Nam'
	    }
    ]
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.country;
    }
}]);

myApp.controller('secondController', ['$scope', '$log', '$http', '$routeParams', function($scope, $log, $http, $routeParams) {
	
}]);
