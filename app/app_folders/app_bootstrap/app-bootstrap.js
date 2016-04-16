myApp.config(function($routeProvider) {
	$routeProvider.when('/bootstrap', {
        templateUrl : baseViewPackage + 'bootstrap/bootstrap-page.html',
        controller : 'bootstrapController'
    });
});