myApp.config(function($routeProvider) {
	$routeProvider.when('/springdao', {
        templateUrl : baseViewPackage + 'spring/dao/spring-dao-page.html',
        controller : 'springDaoController'
    });
});