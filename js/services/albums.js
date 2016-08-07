app.factory('albums', ['$http', function($http) {
	
	// Make API call to get list of all albums
	return $http.get('https://jsonplaceholder.typicode.com/albums')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
		
}]);