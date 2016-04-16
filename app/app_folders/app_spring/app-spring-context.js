myApp.config(function($routeProvider) {
	$routeProvider.when('/springcontext', {
        templateUrl : baseViewPackage + 'spring/context/spring-context-page.html',
        controller : 'springContextController'
    });
});