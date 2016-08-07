app.controller('AlbumController', function ($scope, $routeParams, photos, Lightbox) {

	// Get the photos from specified album
  photos.getPhotos($routeParams.id).success(function(data) {
    $scope.photos = data;
  });

  // Function to open Lightbox with full width picture when clicking a picture
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.photos, index);
  };
});