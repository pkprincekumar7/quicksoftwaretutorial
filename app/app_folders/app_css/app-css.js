myApp.config(function($routeProvider) {
	$routeProvider.when('/css', {
        templateUrl : baseViewPackage + 'css/css-page.html',
        controller : 'cssController'
    });
});