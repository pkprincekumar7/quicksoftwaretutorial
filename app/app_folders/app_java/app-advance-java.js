myApp.config(function($routeProvider) {
	$routeProvider.when('/advancejava', {
        templateUrl : baseViewPackage + 'java/advance-java/advance-java-page.html',
        controller : 'advanceJavaController'
    });
});