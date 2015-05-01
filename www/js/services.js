angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: "Back bacon",
    face: "img/meat/backbacon.jpg",
    calories: 120,
    lastText: "Back bacon is a cut of typically unsmoked bacon[1] sliced to include both the pork loin from the back and a bit of pork belly in the same cut. It is either wet or dry cured, and is completely unlike and much leaner than American style smoked side bacon made only from the pork belly."
  }, {
    id: 1,
    name: "Beef fillet",
    imgsrc: "img/meat/beeffillet.jpg", 
    calories: 140,
    lastText: "text from services.js"
  }, {
    id: 2,
    name: "Pork sausage",
    imgsrc: "img/meat/porksausage.jpg",
    calories: 200,
    lastText: ""
  }, {
    id: 3,
    name: "Pork chop",
    imgsrc: "img/meat/porkchop.jpg",
    calories: 190,
    lastText: ""
  }, {
    id: 4,
    name: "Pork fillet",
    imgsrc: "img/meat/porkfillet.jpg",
    calories: 246,
    lastText: ""
  }, {
    id: 5,
    name: "Roast beef",
    imgsrc: "img/meat/roastbeef.jpg",
    calories: 294,
    lastText: ""
  }, {
    id: 6,

    name: "Roast lamb",
    imgsrc: "img/meat/roastleglamb.jpg",
    calories: 165

    ,
    lastText: ""
  }, {
    id: 7,
    name: "Sirlion steak",
    imgsrc: "img/meat/sirlionsteak.jpg",
    calories: 289

    ,
    lastText: ""
  }, {
    id: 8,
    name: "Streaky bacon",
    imgsrc: "img/meat/streakybacon.jpg",
    calories: 320,
    lastText: ""
  }, {
    id: 9,

    name: "Asparagus",
    imgsrc: "img/vegetables/asparagus.jpg",
    calories: 65

    ,
    lastText: ""
  }, {
    id: 10,
    name: "Broccoli",
    imgsrc: "img/vegetables/broccoli.jpg",
    calories: 95

    ,
    lastText: ""
  }, {
    id: 11,
    name: "Onion",
    imgsrc: "img/vegetables/onion.jpg",
    calories: 33

    ,
    lastText: ""
  }, {
    name: "Cabbage",
    imgsrc: "img/vegetables/cabbage.jpg",
    calories: 67

    ,
    lastText: ""
  }, {
    id: 13,
    name: "Carrot",
    imgsrc: "img/vegetables/carrot.jpg",
    calories: 109

    ,
    lastText: ""
  }, {
    id: 14,
    name: "Courgette",
    imgsrc: "img/vegetables/courgette.jpg",
    calories: 129

    ,
    lastText: ""
  }, {
    id: 15,
    name: "Greenbeans",
    imgsrc: "img/vegetables/greenbeans.jpg",
    calories: 44

    ,
    lastText: ""
  }, {
    id: 16,
    name: "Parsnip",
    imgsrc: "img/vegetables/parsnip.jpg",
    calories: 76

    ,
    lastText: ""
  }, {
    id: 17,
    name: "Red Pepper",
    imgsrc: "img/vegetables/redpepper.jpg",
    calories: 120

    ,
    lastText: ""
  }, {
    id: 18,
    name: "Tomato",
    imgsrc: "img/vegetables/tomato.jpg",
    calories: 102

    ,
    lastText: ""
  }, {
    id: 19,
    name: "Apple",
    imgsrc: "img/fruits/apple.jpg",
    calories: 78

    ,
    lastText: ""
  }, {
    id: 20,
    name: "Banana",
    imgsrc: "img/fruits/banana.jpg",
    calories: 121

    ,
    lastText: ""
  }, {
    id: 21,
    name: "Blueberries",
    imgsrc: "img/fruits/blueberries1.jpg",
    calories: 25

    ,
    lastText: ""
  }, {
    id: 22,
    name: "Kiwi",
    imgsrc: "img/fruits/kiwi.jpg",
    calories: 76

    ,
    lastText: ""
  }, {
    id: 23,
    name: "Orange",
    imgsrc: "img/fruits/orange.jpg",
    calories: 89

    ,
    lastText: ""
  }, {
    id: 24,
    name: "Peach",
    imgsrc: "img/fruits/peach.jpg",
    calories: 109

    ,
    lastText: ""
  }, {
    id: 25,
    name: "Pear",
    imgsrc: "img/fruits/pear.jpg",
    calories: 132

    ,
    lastText: ""
  }, {
    id: 26,
    name: "Pineapple",
    imgsrc: "img/fruits/pineapple.jpg",
    calories: 105

    ,
    lastText: ""
  }, {
    id: 27,
    name: "Strawberry",
    imgsrc: "img/fruits/strawberry.jpg",
    calories: 102

    ,
    lastText: ""
  }, {
    id: 28,
    name: "Chicken breast",
    imgsrc: "img/fish/chicken.jpg",
    calories: 135

    ,
    lastText: ""
  }, {
    id: 29,
    name: "Duck breast",
    imgsrc: "img/fish/duck.jpg",
    calories: 325

    ,
    lastText: ""
  }, {
    id: 30,

    name: "Prawn",
    imgsrc: "img/fish/prawn.jpg",
    calories: 76

    ,
    lastText: ""
  }, {
    id: 31,

    name: "Lobster",
    imgsrc: "img/fish/lobster.jpg",
    calories: 225

    ,
    lastText: ""
  }, {
    id: 32,

    name: "Salmon",
    imgsrc: "img/fish/salmon.jpg",
    calories: 134

    ,
    lastText: ""
  }, {
    id: 33,
    name: "Swordfish",
    imgsrc: "img/fish/swordfish.jpg",
    calories: 101

    ,
    lastText: ""
  }, {
    id: 34,
    name: "Tuna",
    imgsrc: "img/fish/tuna.jpg",
    calories: 138

    ,
    lastText: ""
  }, {
    id: 35,
    name: "Turkey",
    imgsrc: "img/fish/turkey.jpg",
    calories: 165

    ,
    lastText: ""
  }, {
    id: 36,
    name: "Fizzy drink",
    imgsrc: "img/drink/fizzydrink.jpg",
    calories: 625

    ,
    lastText: ""
  }, {
    id: 37,

    name: "Champagne",
    imgsrc: "img/drink/champagne.jpg",
    calories: 175

    ,
    lastText: ""
  }, {
    id: 38,
    name: "Cider",
    imgsrc: "img/drink/cider.jpg",
    calories: 525

    ,
    lastText: ""
  }, {
    id: 39,
    name: "Stout",
    imgsrc: "img/drink/stout.jpg",
    calories: 333

    ,
    lastText: ""
  }, {
    id: 40,
    name: "White wine",
    imgsrc: "img/drink/whitewine.jpg",
    calories: 420

    ,
    lastText: ""
  }, {
    id: 41,
    name: "Red wine",
    imgsrc: "img/drink/redwine.jpg",
    calories: 203

    ,
    lastText: ""
  }, {
    id: 42,

    name: "Beer",
    imgsrc: "img/drink/beer.jpg",
    calories: 179

    ,
    lastText: ""
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