app.controller('HomeController', ['$scope', 'albums', function($scope, albums) {

	albums.success(function(data) {
		$scope.albums = data;
	});
	
}]);