myApp.config(function($routeProvider) {
	$routeProvider.when('/nodejs', {
        templateUrl : baseViewPackage + 'nodejs/nodejs-page.html',
        controller : 'nodejsController'
    });
});