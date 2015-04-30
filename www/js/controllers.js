angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
 $scope.categories = ['add_new', 'daily_calculator', 'food_list'];
  
})

.controller('FoodListCtrl', function($scope, $stateParams) {
  $scope.food_list = [
    { title: 'pears', imgsrc: "img/ionic.png", id: 1, calories: 10},
    { title: 'apple', imgsrc: "img/ionic.png", id: 2 , calories: 15},
    { title: 'orange', imgsrc: "img/ionic.png", id: 3 , calories: 12},
  ];
})

.controller('ItemInfoCtrl', function($scope, $stateParams) {
});
