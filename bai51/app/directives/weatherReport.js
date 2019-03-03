weatherApp.directive('weatherReport', function(){
	return {
		restrict: 'E',
		templateUrl: 'http://localhost:8888/agljsvnb/bai51/app/views/weatherReport.html',
		// templateUrl: './../views/weatherReport.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});