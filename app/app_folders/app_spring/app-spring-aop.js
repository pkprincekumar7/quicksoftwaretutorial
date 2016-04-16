myApp.config(function($routeProvider) {
	$routeProvider.when('/springaop', {
        templateUrl : baseViewPackage + 'spring/aop/spring-aop-page.html',
        controller : 'springAopController'
    });
});