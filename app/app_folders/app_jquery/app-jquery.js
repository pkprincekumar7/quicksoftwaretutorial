myApp.config(function($routeProvider) {
	$routeProvider.when('/jquery', {
        templateUrl : baseViewPackage + 'jquery/jquery-page.html',
        controller : 'jqueryController'
    });
});