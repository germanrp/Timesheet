myApp.controller('mainController',['$scope', '$http', 'apiCall', function($scope, $http, apiCall){

	//  We'll load our list of projects from our JSON into this variable

    $scope.listOfProjects = null;  
    
    fetchInitialData();
    
    /**
     * Let's bring all our projects.
     * @returns {*}
     */
    
    // As the initial data loaded by default
    
    function fetchInitialData(){    	
        apiCall.getProjects()
          .then(function(response) {
        	  $scope.userData = response;
        	  $scope.listOfProjects = response.projects;
            }, function(error) {
                // promise rejected
                console.log("Couldn't load the list of projects, error # " + error);
        });
    };
}]);