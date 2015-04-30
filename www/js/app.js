// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.add_new', {
    url: "/add_new",
    views: {
      'menuContent': {
        templateUrl: "templates/add_new.html"
      }
    }
  })

  .state('app.daily_calculator', {
    url: "/daily_calculator",
    views: {
      'menuContent': {
        templateUrl: "templates/daily_calculator.html"
      }
    }
  })
    .state('app.food_list', {
      url: "/food_list",
      views: {
        'menuContent': {
          templateUrl: "templates/food_list.html",
          controller: 'FoodListCtrl'
        }
      }
    })
/*  url: "/food_list/:playlistId" -- changed */
  .state('app.single', {
    url: "/food_list/:item_infoId",
    views: {
      'menuContent': {
        templateUrl: "templates/item_info.html",
        controller: 'ItemInfoCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/food_list');
});
