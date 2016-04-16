myApp.config(function($routeProvider) {
	$routeProvider.when('/html', {
        templateUrl : baseViewPackage + 'html/html-page.html',
        controller : 'htmlController'
    });
});