myApp.config(function($routeProvider) {
	$routeProvider.when('/sql', {
        templateUrl : baseViewPackage + 'sql/sql-page.html',
        controller : 'sqlController'
    });
});