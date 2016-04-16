myApp.config(function($routeProvider) {
	$routeProvider.when('/gruntjs', {
        templateUrl : baseViewPackage + 'gruntjs/gruntjs-page.html',
        controller : 'gruntjsController'
    });
});