myApp.config(function($routeProvider) {
	$routeProvider.when('/requirejs', {
        templateUrl : baseViewPackage + 'requirejs/requirejs-page.html',
        controller : 'requirejsController'
    });
});