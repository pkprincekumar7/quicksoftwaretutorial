myApp.config(function($routeProvider) {
	$routeProvider.when('/jsp', {
        templateUrl : baseViewPackage + 'jsp/jsp-page.html',
        controller : 'jspController'
    });
});