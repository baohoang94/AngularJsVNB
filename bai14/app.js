var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);
myApp.controller('mainController', function($log, $scope, $filter, $resource) {
	// console.log($scope);
	// console.log($log);
	// $log.log('Hello');
	// $log.info('Hello info');
	// $log.warn('Hello cảnh báo');
	// $log.debug('Hello detail');
	// $log.error('Hello lỗi');

	// $scope.name = 'Hoa Le';
	// $scope.uppercaseName = $filter('uppercase')($scope.name);
	// $log.info($scope.name);
	// $log.info($scope.uppercaseName);

	console.log($resource);
});
