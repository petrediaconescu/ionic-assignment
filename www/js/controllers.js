angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
 $scope.categories = ['add_new', 'daily_calculator', 'food_list'];
  
})

.controller('FoodListCtrl', function($scope) {
  $scope.food_list = [
    { title: 'pears', id: 1 },
    { title: 'apple', id: 2 },
    { title: 'orange', id: 3 },
  ];
})

.controller('ItemInfoCtrl', function($scope, $stateParams) {
});
