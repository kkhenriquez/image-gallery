app.factory('albums', ['$http', function($http) {
	return $http.get('https://jsonplaceholder.typicode.com/albums')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
}]);

app.factory('fotos', ['$http', function($http) {
	return {
		getPhotos: function(id) {
			return $http.get('https://jsonplaceholder.typicode.com/photos?albumId='+id)
				.success(function(data) {
					return data;
				})
				.error(function(data) {
					return data;
				});
		}
	}
}]);