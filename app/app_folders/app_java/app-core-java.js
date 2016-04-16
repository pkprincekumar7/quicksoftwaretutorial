myApp.config(function($routeProvider) {
	$routeProvider.when('/corejava', {
        templateUrl : baseViewPackage + 'java/core-java/core-java-page.html',
        controller : 'coreJavaController'
    }).when('/corejava/introduction', {
        templateUrl : baseViewPackage + 'java/core-java/introduction-page.html',
        controller : 'coreJavaIntroductionController'
    }).when('/corejava/dclraccessctrl', {
        templateUrl : baseViewPackage + 'java/core-java/declaration-access-control-page.html',
        controller : 'coreJavaDeclarationAccessControlController'
    });
});