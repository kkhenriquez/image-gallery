app.factory('photos', ['$http', function($http) {
	return $http.get('http://jsonplaceholder.typicode.com/photos')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
}]);