app.controller('AlbumController', function ($scope, $routeParams, photos, Lightbox) {

  photos.getPhotos($routeParams.id).success(function(data) {
    $scope.photos = data;
  });

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.photos, index);
  };
});