angular.module('starter.controllers', [])

.controller('ChatsCtrl', function($scope, $rootScope, Chats) {

	$rootScope.count = 0;
	
	// returns all the objects from chats array (created in services.js factory)
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

// get one item at the time, depending on the ID
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

// function to calculate the burning calories, not used for the moment, to be added in the next version
.controller('BurnCtrl', function($scope){
function calculateCaloriesBurned() {
alert("test")
  var bw = document.getElementById('bodyWeight').value;
  var cals = (4 * 3.5 * bw)/200;
  document.getElementById('caloriesBurned').value = cals;
}
})