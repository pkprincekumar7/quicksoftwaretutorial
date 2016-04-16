myApp.config(function($routeProvider) {
	$routeProvider.when('/struts', {
        templateUrl : baseViewPackage + 'struts/struts-page.html',
        controller : 'strutsController'
    });
});