myApp.config(function($routeProvider) {
	$routeProvider.when('/javascript', {
        templateUrl : baseViewPackage + 'javascript/javascript-page.html',
        controller : 'javascriptController'
    });
});