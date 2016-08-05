var app = angular.module('GalleryApp', ['ngRoute', 'bootstrapLightbox', 'ngSanitize']);

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
});