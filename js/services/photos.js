app.factory('photos', ['$http', function($http) {

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