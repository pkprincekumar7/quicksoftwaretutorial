myApp.config(function($routeProvider) {
	$routeProvider.when('/angularjs', {
        templateUrl : baseViewPackage + 'angularjs/angularjs-page.html',
        controller : 'angularjsController'
    });
});