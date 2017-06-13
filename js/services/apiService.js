myApp.factory('apiCall', function ($http, $q) {

	$apiUrl = 'json/projects.json';
	
	return {
		getProjects: function() {
            // the $http API is based on the deferred/promise API
            // so it returns a promise for us by default

            return $http({
					url: $apiUrl,
					dataType: 'jsonp',
					method: 'GET'
				})
            .then(function(response) {
						if (typeof response.data === 'object') {
							return response.data;

						} else {
							// invalid response
							return $q.reject(response.data);
						}
					}, function(response) {
							// something went wrong
							return $q.reject(response.data);
					});
            }
		}
});