myApp.config(function($routeProvider) {
	$routeProvider.when('/springorm', {
        templateUrl : baseViewPackage + 'spring/orm/spring-orm-page.html',
        controller : 'springOrmController'
    });
});