var app = angular.module('GalleryApp', ['ngRoute', 'ui.bootstrap', 'bootstrapLightbox', 'ngSanitize']);

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

app.config(function (LightboxProvider) {
	LightboxProvider.templateUrl = 'views/box.html'
})


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