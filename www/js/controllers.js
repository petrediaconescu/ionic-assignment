angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $rootScope, Chats) {

	$rootScope.count = 0;
	
	$scope.chats = Chats.all();
	$scope.addCalories = function(chat, $rootScope, $scope) {
      Chats.addCalories(chat, $rootScope, $scope);
  }
  
  	//adds up the total calories each time calories are added
	$scope.function1 = function(calories) {
	     
		 $rootScope.count = $scope.count + calories;
		  Chats.save($rootScope.count);
	};
	
	//resets the calories to 0	//called by the reset button
	$scope.functionReset = function() {
	   
		 $rootScope.count = 0;
	};
	//shows the total in an alert box // called by the done button
	$scope.functionDone = function(tot){
		alert(tot);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
