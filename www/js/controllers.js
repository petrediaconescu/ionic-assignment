angular.module('starter.controllers', [])



.controller('DashCtrl', function($scope) {
  $scope.food_list = [
    { title: 'pears', id: 1 },
   { title: 'apple', id: 2 },
   { title: 'orange', id: 3 },
   ];
 })


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

.controller('BurnCtrl', function($scope){
function calculateCaloriesBurned() {
alert("test")
  var bw = document.getElementById('bodyWeight').value;
  var cals = (4 * 3.5 * bw)/200;
  document.getElementById('caloriesBurned').value = cals;
}
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
