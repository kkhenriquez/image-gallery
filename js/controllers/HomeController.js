app.controller('HomeController', ['$scope', 'albums', function($scope, albums) {

	albums.success(function(data) {
		$scope.albums = data;
	});

	$scope.doc_classes_colors = _.shuffle([
		'#E91E63',
		'#9C27B0',
		'#673AB7',
		'#3F51B5',
		'#2196F3',
		'#009688',
		'#43A047',
		'#FF5722',
		'#795548',
		'#607D8B',
		]);	
}]);