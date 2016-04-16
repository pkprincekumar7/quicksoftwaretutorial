myApp.config(function($routeProvider) {
	$routeProvider.when('/css3', {
        templateUrl : baseViewPackage + 'css/css3/css3-page.html',
        controller : 'css3Controller'
    });
});