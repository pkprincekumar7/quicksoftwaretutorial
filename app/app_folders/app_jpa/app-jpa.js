myApp.config(function($routeProvider) {
	$routeProvider.when('/jpa', {
        templateUrl : baseViewPackage + 'jpa/jpa-page.html',
        controller : 'jpaController'
    });
});