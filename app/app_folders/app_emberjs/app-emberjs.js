myApp.config(function($routeProvider) {
	$routeProvider.when('/emberjs', {
        templateUrl : baseViewPackage + 'emberjs/emberjs-page.html',
        controller : 'emberjsController'
    });
});