myApp.config(function($routeProvider) {
	$routeProvider.when('/ajax', {
        templateUrl : baseViewPackage + 'ajax/ajax-page.html',
        controller : 'ajaxController'
    });
});