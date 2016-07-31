app.controller('AlbumController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {


	$http.get('https://jsonplaceholder.typicode.com/photos?albumId='+$routeParams.id)
		.then(function(response) {
			$scope.photos = response.data;
		});

	
}]);