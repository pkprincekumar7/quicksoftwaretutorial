myApp.config(function($routeProvider) {
	$routeProvider.when('/servlet', {
        templateUrl : baseViewPackage + 'servlet/servlet-page.html',
        controller : 'servletController'
    });
});