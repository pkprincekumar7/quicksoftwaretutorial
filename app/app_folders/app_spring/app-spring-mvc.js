myApp.config(function($routeProvider) {
	$routeProvider.when('/springmvc', {
        templateUrl : baseViewPackage + 'spring/mvc/spring-mvc-page.html',
        controller : 'springMvcController'
    });
});