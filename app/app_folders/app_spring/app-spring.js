myApp.config(function($routeProvider) {
	$routeProvider.when('/spring', {
        templateUrl : baseViewPackage + 'spring/spring-page.html',
        controller : 'springController'
    });
});