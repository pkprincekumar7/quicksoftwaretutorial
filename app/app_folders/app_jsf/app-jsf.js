myApp.config(function($routeProvider) {
	$routeProvider.when('/jsf', {
        templateUrl : baseViewPackage + 'jsf/jsf-page.html',
        controller : 'jsfController'
    });
});