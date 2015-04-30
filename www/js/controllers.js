angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
 $scope.categories = ['Add new', 'Total for today', 'Reccommended'];
  
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Test', id: 1 },
    { title: 'Test', id: 2 },
    { title: 'Test', id: 3 },
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
