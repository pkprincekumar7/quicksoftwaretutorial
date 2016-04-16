myApp.config(function($routeProvider) {
	$routeProvider.when('/html5', {
        templateUrl : baseViewPackage + 'html/html5/html5-page.html',
        controller : 'html5Controller'
    });
});