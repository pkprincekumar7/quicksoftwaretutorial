myApp.config(function($routeProvider) {
	$routeProvider.when('/plsql', {
        templateUrl : baseViewPackage + 'plsql/plsql-page.html',
        controller : 'plsqlController'
    });
});