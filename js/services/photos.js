app.factory('photos', ['$http', function($http) {

	return {
		// Function to get photos from specified album
		getPhotos: function(id) {
			return $http.get('https://jsonplaceholder.typicode.com/photos?albumId='+id) // id = album id
				.success(function(data) {
					return data;
				})
				.error(function(data) {
					return data;
				});
		}
	}
	
}]);