myApp.controller('coreJavaDeclarationAccessControlController', function($scope, $http) {

	//$("#codeBlock").hide();
	//$(".sidePanelForCode").css({"width": "96%"});

	configureCollapsiblePanel();

	$(document).off('click').on('click',"span[data-ng-class='node.selected']",function() {
		$scope.fileToShow = $(this).text();
		alert($scope.fileToShow);
	});

	// test tree view - start
	$scope.roleList = [
		{ label : "DclrAccessCtrl", id : "role1", children : [
			{ label : "web.xml", id : "role11", children : [] },
			{ label : "src", id : "role12", children : [
				{ label : "com", id : "role121", children : [
					{ label : "DeclarationAccessCtrl.java", id : "role1211", children : [] },
					{ label : "Employee.java", id : "role1212", children : [] },
					{ label : "Student.java", id : "role1212", children : [] },
					{ label : "Admin.java", id : "role1212", children : [] }
				]}
			]}
		]},

		{ label : "StepsToExecute.txt", id : "role2", children : [] },

		{ label : "README.TXT", id : "role3", children : [] }
	];
	// test tree view - end

});
