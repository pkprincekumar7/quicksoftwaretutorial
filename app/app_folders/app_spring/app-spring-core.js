myApp.config(function($routeProvider) {
	$routeProvider.when('/springcore', {
        templateUrl : baseViewPackage + 'spring/core/spring-core-page.html',
        controller : 'springCoreController'
    });
});