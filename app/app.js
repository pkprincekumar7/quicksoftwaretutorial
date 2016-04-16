var myApp = angular.module('myApp', ['ngRoute', 'angularTreeview']);
//var baseUrl = 'http://localhost:8080';
var baseViewPackage = './app/view/';

myApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : baseViewPackage + 'home-page.html',
		controller : 'homepageController'
	}).when('/homepage', {
        templateUrl : baseViewPackage + 'home-page.html',
        controller : 'homepageController'
    });
});
myApp.controller('mainController', function($scope) {

});

/*myApp.filter('num', function() {
    return function(input) {
      return parseInt(input, 10);
    }
});*/

var configureCollapsiblePanel = function() {
    var mousePrevX = 0,
        mouseCurrentX = 0,
        mouseDragFlag = false;

    $(".sidePanelForCode").hide();

    $(".sidePanelDivider").click(function() {
        $(".sidePanelForCode").toggle(500);
        if($(window).width() < 768) {
            if($("#codeBlock").is(":visible")){
                $("#codeBlock").hide();
                console.log(1)
            }else{
                $("#codeBlock").show();
                console.log(2)
            }
            //$(".sidePanelForCode").css({"width": "96%"});
        } else {
            $("#codeBlock").show();
            //$(".sidePanelForCode").css({"width": "50%"});
        }
    });

    $(".sidePanelDividerBlock").mousedown(function() {
        mouseDragFlag = true;
    });

    $(".sidePanelDividerBlock, body").mouseup(function() {
        mouseDragFlag = false;
    });

    $(".sidePanelForCodeBlock, .sidePanelForTreeBlock, .sidePanelDividerBlock").mousemove(function(event) {
        if($('.sidePanelForTreeBlock').width() <= 5) {
            var tempWidth = $('.sidePanelForCodeBlock').width() - 1;
            $('.sidePanelForCodeBlock').width(tempWidth);
        }
        if(mouseDragFlag && $('.sidePanelForTreeBlock').width() > 5) {
            mouseCurrentX = event.clientX;
            if(mousePrevX != undefined && mousePrevX != null & mousePrevX != 0) {
                var originalWidth = $(".sidePanelForCodeBlock").width();
                $(".sidePanelForCodeBlock").width(originalWidth + (mousePrevX - mouseCurrentX));
            }
            mousePrevX = event.clientX;
        }
    });

    /*$(document).off('click').on('click',"span[data-ng-class='node.selected']",function(){
        //alert($(this).text());
        //return $(this).text();
    });*/
}