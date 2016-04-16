myApp.config(function($routeProvider) {
	$routeProvider.when('/extjs', {
        templateUrl : baseViewPackage + 'extjs/extjs-page.html',
        controller : 'extjsController'
    });
});