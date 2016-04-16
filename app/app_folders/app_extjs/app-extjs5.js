myApp.config(function($routeProvider) {
	$routeProvider.when('/extjs5', {
        templateUrl : baseViewPackage + 'extjs/extjs5/extjs5-page.html',
        controller : 'extjs5Controller'
    });
});