myApp.config(function($routeProvider) {
	$routeProvider.when('/extjs4', {
        templateUrl : baseViewPackage + 'extjs/extjs4/extjs4-page.html',
        controller : 'extjs4Controller'
    });
});