var app = angular.module('GalleryApp', ['ngRoute', 'angularModalService', 'ui.bootstrap']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/albums/:id', {
			controller: 'AlbumController',
			templateUrl: 'views/album.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

var makeService = function(module, identifier) {
	module.factory('photos-'+identifier, ['$http', function($http) {
		return $http.get('https://jsonplaceholder.typicode.com/albums/identifier/photos')
			.success(function(data) {
				return data;
			})
			.error(function(data) {
				return data;
			});
	}]);
};