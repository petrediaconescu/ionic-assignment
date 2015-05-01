angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: "Back bacon",
	face: "img/meat/backbacon.jpg",
	calories: 120,
	lastText: "Back bacon is a traditional British cut of typically unsmoked bacon[1] sliced to include both the pork loin from the back and a bit of pork belly in the same cut. It is either wet or dry cured, and is completely unlike and much leaner than American style smoked side bacon made only from the pork belly."
  }, {
    id: 1,
    name: "Beef fillet", 
	imgsrc: "img/meat/beeffillet.jpg", 
	calories: 140,
	lastText: "text from services.js"
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  
  
  
  
  
  
  
  
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
