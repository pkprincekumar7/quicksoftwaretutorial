myApp.config(function($routeProvider) {
	$routeProvider.when('/springrestwebservices', {
        templateUrl : baseViewPackage + 'spring/rest-webservices/spring-rest-webservices-page.html',
        controller : 'springRestWebservicesController'
    });
});