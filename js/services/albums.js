app.factory('albums', ['$http', function($http) {

	return $http.get('https://jsonplaceholder.typicode.com/albums')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
		
}]);