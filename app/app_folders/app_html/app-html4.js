myApp.config(function($routeProvider) {
	$routeProvider.when('/html4', {
        templateUrl : baseViewPackage + 'html/html4/html4-page.html',
        controller : 'html4Controller'
    });
});