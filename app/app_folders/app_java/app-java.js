myApp.config(function($routeProvider) {
	$routeProvider.when('/java', {
		templateUrl : baseViewPackage + 'java/java-page.html',
		controller : 'javaController'
	});
});