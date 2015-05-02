angular.module('starter.services', [])

.factory('Chats', function() {

  // Create an array of objects to store info about food
  // To be used a JSON resource or wikipedia.js for the next version 
  var chats = [{
    id: 0,
    name: "Back bacon",
    face: "img/meat/backbacon.jpg",
    calories: 120,
    lastText: "Back bacon is a cut of typically unsmoked bacon[1] sliced to include both the pork loin from the back and a bit of pork belly in the same cut. It is either wet or dry cured, and is completely unlike and much leaner than American style smoked side bacon made only from the pork belly."
  }, {
    id: 1,
    name: "Beef fillet",
    face: "img/meat/beeffillet.jpg", 
    calories: 140,
    lastText: "A beef tenderloin, known as an eye fillet in New Zealand and Australia, fillet in South Africa[1] and the UK, filet in France and Germany, is cut from the loin of beef."
  }, {
    id: 2,
    name: "Pork sausage",
    face: "img/meat/porksausage.jpg",
    calories: 200,
    lastText: "A sausage is a food usually made from ground meat with a skin around it. Some sausages are cooked during processing and the casing may be removed after. Sausage making is a traditional food preservation technique. Sausages may be preserved by curing, drying, or smoking."
  }, {
    id: 3,
    name: "Pork chop",
    face: "img/meat/porkchop.jpg",
    calories: 190,
    lastText: "A pork chop is a chop of pork (a meat chop) cut perpendicularly to the spine of the pig and usually containing a rib or part of a vertebra, served as an individual portion."
  }, {
    id: 4,
    name: "Pork fillet",
    face: "img/meat/porkfillet.jpg",
    calories: 246,
    lastText: "The pork tenderloin also in some countries called pork fillet, is a cut of pork. It is often sold as prepackaged products by large grocery stores. They are available plain (not seasoned) and flavored with a marinade."
  }, {
    id: 5,
    name: "Roast beef",
    face: "img/meat/roastbeef.jpg",
    calories: 294,
    lastText: "Roast beef is a dish of beef which is roasted in an oven. Essentially prepared as a main meal, the leftovers can be and are often served within sandwiches and sometimes are used to make hash. In the United Kingdom, United States, Canada, Ireland, and Australia, roast beef is one of the meats traditionally served at Sunday dinner, although it is also often served as a cold cut in delicatessen stores, usually in sandwiches."
  }, {
    id: 6,

    name: "Roast lamb",
    face: "img/meat/roastleglamb.jpg",
    calories: 165

    ,
    lastText: "Lamb, hogget, and mutton (UK, India, South Africa, Canada, New Zealand and Australia)[1] are terms for the meat of domestic sheep (species Ovis aries) at different ages. A sheep in its first year is called a lamb; and its meat is also called lamb. The meat of a juvenile sheep older than one year is hogget; outside North America this is also a term for the living animal.[2] The meat of an adult sheep is mutton, a term only used for the meat, not the living animals."
  }, {
    id: 7,
    name: "Sirloin steak",
    face: "img/meat/sirlionsteak.jpg",
    calories: 289

    ,
    lastText: "In U.S. butchery, the steak is cut from the rear back portion of the animal, continuing off the short loin from which T-bone, porterhouse, and club steaks are cut. The sirloin is actually divided into several types of steak. The top sirloin is the most prized of these and is specifically marked for sale under that name. The bottom sirloin, which is less tender and much larger, is typically marked for sale simply as \"sirloin steak\". The bottom sirloin in turn connects to the sirloin tip roast."
  }, {
    id: 8,
    name: "Streaky bacon",
    face: "img/meat/streakybacon.jpg",
    calories: 320,
    lastText: "Bacon is a meat product prepared from a pig and usually cured.[1][2] It is first cured using large quantities of salt,[2] either in a brine or in a dry packing; the result is fresh bacon (also known as green bacon).[3] Fresh bacon may then be further dried for weeks or months in cold air, or it may be boiled or smoked.[1] Fresh and dried bacon is typically cooked before eating. Boiled bacon is ready to eat, as is some smoked bacon, but may be cooked further before eating."
  }, {
    id: 9,

    name: "Asparagus",
    face: "img/vegetables/asparagus.jpg",
    calories: 65

    ,
    lastText: "Asparagus or garden asparagus, scientific name Asparagus officinalis, is a spring vegetable, a flowering perennial[1] plant species in the genus Asparagus. It was once classified in the lily family, like its Allium cousins, onions and garlic, but the Liliaceae have been split and the onion-like plants are now in the family Amaryllidaceae and asparagus in the Asparagaceae. Asparagus officinalis is native to most of Europe, northern Africa and western Asia,[2][3][4] and is widely cultivated as a vegetable crop."
  }, {
    id: 10,
    name: "Broccoli",
    face: "img/vegetables/broccoli.jpg",
    calories: 95

    ,
    lastText: "Broccoli is an edible green plant in the cabbage family whose large, flowering head is eaten as a vegetable. The word broccoli comes from the Italian plural of broccolo, which means \"the flowering crest of a cabbage\", and is the diminutive form of brocco, meaning \"small nail\" or \"sprout\".[3] Broccoli is often boiled or steamed but may be eaten raw.[4]"
  }, {
    id: 11,
    name: "Onion",
    face: "img/vegetables/onion.jpg",
    calories: 33

    ,
    lastText: "The onion (Allium cepa L.) (Latin 'cepa' = onion), also known as the bulb onion or common onion, is used as a vegetable and is the most widely cultivated species of the genus Allium. This genus also contains several other species variously referred to as onions and cultivated for food, such as the Japanese bunching onion (A. fistulosum), the Egyptian onion (A. ×proliferum), and the Canada onion (A. canadense). The name \"wild onion\" is applied to a number of Allium species but A. cepa is exclusively known from cultivation and its ancestral wild original form is not known, although escapes from cultivation have become established in some regions.[2] The onion is most frequently a biennial or a perennial plant, but is usually treated as an annual and harvested in its first growing season."
  }, {
    name: "Cabbage",
    face: "img/vegetables/cabbage.jpg",
    calories: 67

    ,
    lastText: "Cabbage (Brassica oleracea or variants) is a leafy green or purple biennial plant, grown as an annual vegetable crop for its dense-leaved heads. Closely related to other cole crops, such as broccoli, cauliflower, and brussels sprouts, it descends from B. oleracea var. oleracea, a wild field cabbage. Cabbage heads generally range from 0.5 to 4 kilograms (1 to 9 lb), and can be green, purple and white. Smooth-leafed firm-headed green cabbages are the most common, with smooth-leafed red and crinkle-leafed savoy cabbages of both colors seen more rarely. It is a multi-layered vegetable. Under conditions of long sunlit days such as are found at high northern latitudes in summer, cabbages can grow much larger. Some records are discussed at the end of the history section."
  }, {
    id: 13,
    name: "Carrot",
    face: "img/vegetables/carrot.jpg",
    calories: 109

    ,
    lastText: "The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in colour, though purple, red, white, and yellow varieties exist. It has a crisp texture when fresh. The most commonly eaten part of a carrot is a taproot, although the greens are sometimes eaten as well. It is a domesticated form of the wild carrot Daucus carota, native to Europe and southwestern Asia. The domestic carrot has been selectively bred for its greatly enlarged and more palatable, less woody-textured edible taproot. The Food and Agriculture Organization of the United Nations (FAO) reports that world production of carrots and turnips (these plants are combined by the FAO for reporting purposes) for calendar year 2011 was almost 35.658 million tonnes. Almost half were grown in China. Carrots are widely used in many cuisines, especially in the preparation of salads, and carrot salads are a tradition in many regional cuisines."
  }, {
    id: 14,
    name: "Courgette",
    face: "img/vegetables/courgette.jpg",
    calories: 129

    ,
    lastText: "Zucchini or courgette is a summer squash which can reach nearly a meter in length, but which is usually harvested at half that size or less. Along with certain other squashes and pumpkins, it belongs to the species Cucurbita pepo. Zucchini can be dark or light green. A related hybrid, the golden zucchini, is a deep yellow or orange color. In a culinary context, zucchini is treated as a vegetable; it is usually cooked and presented as a savory dish or accompaniment. Botanically, however, zucchini is a fruit, being the swollen ovary of the zucchini flower. Zucchini, like all squash, has its ancestry in the Americas. However, the varieties of squash typically called \"zucchini\" were developed in Italy, many generations after their introduction from the Americas."
  }, {
    id: 15,
    name: "Greenbeans",
    face: "img/vegetables/greenbeans.jpg",
    calories: 44

    ,
    lastText: "Green beans, also known as string beans, or snap beans in the northeastern and western United States, are the unripe fruit of various cultivars of the common bean (Phaseolus vulgaris). Green bean cultivars have been selected especially for the fleshiness, flavor, or sweetness of their pods."
  }, {
    id: 16,
    name: "Parsnip",
    face: "img/vegetables/parsnip.jpg",
    calories: 76

    ,
    lastText: "The parsnip (Pastinaca sativa) is a root vegetable closely related to the carrot and parsley. It is a biennial plant usually grown as an annual. Its long tuberous root has cream-colored skin and flesh and can be left in the ground when mature as it becomes sweeter in flavor after winter frosts. In its first growing season, the plant has a rosette of pinnate, mid-green leaves. If unharvested, it produces its flowering stem, topped by an umbel of small yellow flowers, in its second growing season. By this time the stem is woody and the tuber inedible. The seeds are pale brown, flat and winged."
  }, {
    id: 17,
    name: "Red Pepper",
    face: "img/vegetables/redpepper.jpg",
    calories: 120

    ,
    lastText: "The chili pepper (also chile pepper or chilli pepper, from Nahuatl chīlli /ˈt͡ʃiːli/) is the fruit[1] of plants from the genus Capsicum, members of the nightshade family, Solanaceae. In Britain, Australia, New Zealand, South Africa, India,[2] and other Asian countries, the word \"pepper\" is usually omitted."
  }, {
    id: 18,
    name: "Tomato",
    face: "img/vegetables/tomato.jpg",
    calories: 102

    ,
    lastText: "The tomato is the edible, often red fruit/berry of the nightshade Solanum lycopersicum,[1][2] commonly known as a tomato plant. The species originated in the South American Andes[2] and its use as a food originated in Mexico, and spread throughout the world following the Spanish colonization of the Americas. Its many varieties are now widely grown, sometimes in greenhouses in cooler climates."
  }, {
    id: 19,
    name: "Apple",
    face: "img/fruit/apple.jpg",
    calories: 78

    ,
    lastText: "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions."
  }, {
    id: 20,
    name: "Banana",
    face: "img/fruit/banana.jpg",
    calories: 121

    ,
    lastText: "A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used."
  }, {
    id: 21,
    name: "Blueberries",
    face: "img/fruit/blueberries.jpg",
    calories: 25

    ,
    lastText: "Blueberries are perennial flowering plants with indigo-colored berries from the section Cyanococcus within the genus Vaccinium (a genus that also includes cranberries and bilberries). Species in the section Cyanococcus are the most common[1] fruits sold as \"blueberries\" and are native to North America (commercially cultivated highbush blueberries were not introduced into Europe until the 1930s).[2]"
  }, {
    id: 22,
    name: "Kiwi",
    face: "img/fruit/kiwi.jpg",
    calories: 76

    ,
    lastText: "The kiwifruit or Chinese gooseberry (sometimes shortened to kiwi) is the edible berry of a woody vine in the genus Actinidia.[1][2] The most common cultivar group of kiwifruit ('Hayward')[3] is oval, about the size of a large hen's egg (5–8 cm (2.0–3.1 in) in length and 4.5–5.5 cm (1.8–2.2 in) in diameter). It has a fibrous, dull greenish-brown skin and bright green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft texture and a sweet but unique flavor, and today is a commercial crop in several countries, such as Italy, New Zealand, Chile, Greece, and France."
  }, {
    id: 23,
    name: "Orange",
    face: "img/fruit/orange.jpg",
    calories: 89

    ,
    lastText: "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.[2] The fruit of the Citrus × sinensis is considered a sweet orange, (whereas the fruit of the Citrus × aurantium is considered a bitter orange). The orange is a hybrid, between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin;[3][4] however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations.[5] The chloroplast genes, and therefore the maternal line, seem to be pomelo."
  }, {
    id: 24,
    name: "Peach",
    face: "img/fruit/peach.jpg",
    calories: 109

    ,
    lastText: "The peach (Prunus persica) is a deciduous tree, native to Northwest China, in the region between the Tarim Basin and the north slopes of the Kunlun Shan mountains, where it was first domesticated and cultivated.[2] It bears an edible juicy fruit also called a peach."
  }, {
    id: 25,
    name: "Pear",
    face: "img/fruit/pear.jpg",
    calories: 132

    ,
    lastText: "The pear is any of several tree and shrub species of genus Pyrus /ˈpaɪrəs/, in the family Rosaceae. It is also the name of the pomaceous fruit of these trees. Several species of pear are valued for their edible fruit, while others are cultivated as ornamental trees."
  }, {
    id: 26,
    name: "Pineapple",
    face: "img/fruit/pineapple.jpg",
    calories: 105

    ,
    lastText: "The pineapple (Ananas comosus) is a tropical plant with edible multiple fruit consisting of coalesced berries,[2][3] and the most economically significant plant in the Bromeliaceae family.[4] Pineapples may be cultivated from a crown cutting of the fruit,[2][5] possibly flowering in 20–24 months and fruiting in the following six months.[5][6] Pineapple does not ripen significantly post-harvest."
  }, {
    id: 27,
    name: "Strawberry",
    face: "img/fruit/strawberry.jpg",
    calories: 102

    ,
    lastText: "The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa)[1] is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries). It is cultivated worldwide for its fruit. The fruit (which is not a botanical berry, but an aggregate accessory fruit) is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as preserves, fruit juice, pies, ice creams, milkshakes, and chocolates. Artificial strawberry flavorings and aromas are also widely used in many products like lip gloss, candy, hand sanitizer, perfume, and many others."
  }, {
    id: 28,
    name: "Chicken breast",
    face: "img/fish/chicken.jpg",
    calories: 135

    ,
    lastText: "Chicken is the most common type of poultry in the world.[1] In developed countries, chickens are usually subject to intensive farming methods."
  }, {
    id: 29,
    name: "Duck breast",
    face: "img/fish/duck.jpg",
    calories: 325

    ,
    lastText: "Duck (aka duckling) refers to the meat of several species of bird in the Anatidae family, found in both fresh and salt water; a species of freshwater duck, the Mallard, has been domesticated and is a common livestock bird in many parts of the world. Duck is eaten in many cuisines around the world."
  }, {
    id: 30,

    name: "Prawn",
    face: "img/fish/prawn.jpg",
    calories: 76

    ,
    lastText: "Prawn is a common name, used particularly in the United Kingdom, Ireland and Commonwealth nations, for large swimming crustaceans or shrimp, especially those with commercial significance in the seafood industry. Shrimp that fall in this category often belong to the suborder Dendrobranchiata. In North America, the term is used less frequently, typically for freshwater shrimp."
  }, {
    id: 31,

    name: "Lobster",
    face: "img/fish/lobster.jpg",
    calories: 225

    ,
    lastText: "Clawed lobsters comprise a family (Nephropidae, sometimes also Homaridae) of large marine crustaceans. They have long bodies with muscular tails, and live in crevices or burrows on the sea floor. Three of their five pairs of legs have claws, including the first pair, which are usually much larger than the others. Highly prized as seafood, lobsters are economically important, and are often one of the most profitable commodities in coastal areas they populate.[2] Commercially important species include two species of Homarus from the northern Atlantic Ocean, and scampi – the northern-hemisphere genus Nephrops and the southern-hemisphere genus Metanephrops. Although several other groups of crustaceans have the word \"lobster\" in their names, the unqualified term \"lobster\" generally refers to the clawed lobsters of the family Nephropidae.[3] Clawed lobsters are not closely related to spiny lobsters or slipper lobsters, which have no claws (chelae), or to squat lobsters. The closest living relatives of clawed lobsters are the reef lobsters and the three families of freshwater crayfish."
  }, {
    id: 32,

    name: "Salmon",
    face: "img/fish/salmon.jpg",
    calories: 134

    ,
    lastText: "Salmon is the common name for several species of fish in the family Salmonidae. Other fish in the same family include trout, char, grayling and whitefish. Salmon are native to tributaries of the North Atlantic (genus Salmo) and Pacific Ocean (genus Oncorhynchus). Many species of salmon have been introduced into non-native environments such as the Great Lakes of North America and Patagonia in South America. Salmon are intensively produced in aquaculture in many parts of the world."
  }, {
    id: 33,
    name: "Swordfish",
    face: "img/fish/swordfish.jpg",
    calories: 101

    ,
    lastText: "Swordfish (Xiphias gladius; from Greek ξίφος: sword, and Latin gladius: sword), also known as broadbills in some countries, are large, highly migratory, predatory fish characterized by a long, flat bill. They are a popular sport fish of the billfish category, though elusive. Swordfish are elongated, round-bodied, and lose all teeth and scales by adulthood. These fish are found widely in tropical and temperate parts of the Atlantic, Pacific, and Indian Oceans, and can typically be found from near the surface to a depth of 550 m (1,800 ft).[2] They commonly reach 3 m (9.8 ft) in length, and the maximum reported is 4.55 m (14.9 ft) in length and 650 kg (1,430 lb) in weight."
  }, {
    id: 34,
    name: "Tuna",
    face: "img/fish/tuna.jpg",
    calories: 138

    ,
    lastText: "A tuna is a saltwater finfish that belongs to the tribe Thunnini, a sub-grouping of the mackerel family (Scombridae) – which together with the tunas, also includes the bonitos, mackerels, and Spanish mackerels. Thunnini comprises fifteen species across five genera,[1] the sizes of which vary greatly, ranging from the bullet tuna (max. length: 50 cm (1.6 ft), weight: 1.8 kg (4 lb)) up to the Atlantic bluefin tuna (max. length: 4.6 m (15 ft), weight: 684 kg (1,508 lb)). The bluefin averages 2 m (6.6 ft), and is believed to live for up to 50 years."
  }, {
    id: 35,
    name: "Turkey",
    face: "img/fish/turkey.jpg",
    calories: 165

    ,
    lastText: "Turkey meat is the meat from turkeys, typically domesticated turkeys. It is a popular poultry product used in a number of culturally significant events such as: Thanksgiving and Christmas, as well as for everyday nourishment."
  }, {
    id: 36,
    name: "Fizzy drink",
    face: "img/drink/fizzydrink.jpg",
    calories: 625

    ,
    lastText: "A soft drink (also called soda, pop, soda pop, coke,[1] fizzy drink, seltzer, mineral,[2] lolly water[3] or carbonated beverage) is a beverage that typically contains carbonated water, a sweetener and a flavoring. The sweetener may be sugar, high-fructose corn syrup, fruit juice, sugar substitutes (in the case of diet drinks) or some combination of these. Soft drinks may also contain caffeine, colorings, preservatives and other ingredients."
  }, {
    id: 37,

    name: "Champagne",
    face: "img/drink/champagne.jpg",
    calories: 175

    ,
    lastText: "Champagne is a sparkling wine produced from grapes grown in the Champagne region of France following rules that demand secondary fermentation of the wine in the bottle to create carbonation.[1] Some use the term Champagne as a generic term for sparkling wine,[2][3] but the majority of countries reserve the term exclusively for sparkling wines that come from Champagne and are produced under the rules of the appellation.[4]"
  }, {
    id: 38,
    name: "Cider",
    face: "img/drink/cider.jpg",
    calories: 525

    ,
    lastText: "Cider or Hard Cider is a fermented alcoholic beverage made from the juice of apples. Cider alcohol content varies from 1.2% ABV to 8.5% or more in traditional English ciders, and 3.5% to 12% in continental ciders.[1] In UK law, it must contain at least 35% apple juice (fresh or from concentrate),[2] although CAMRA says that \"real cider\" must be at least 90% fresh apple juice.[3] In the US, there is a 50% minimum.[4] In France, cider must be made solely from apples.[5] In 2014, a study by The Daily Telegraph found that a pint of mass-market cider (Bulmers) contained five teaspoons (20.5 g) of sugar, nearly as much as the WHO recommends as an adult's daily allowance of added sugar, and 5–10 times the amount of sugar in lager or ale.[6]"
  }, {
    id: 39,
    name: "Stout",
    face: "img/drink/stout.jpg",
    calories: 333

    ,
    lastText: "Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast. Stouts were traditionally the generic term for the strongest or stoutest porters, typically 7% or 8%, produced by a brewery.[1][2] There are a number of variations including Baltic porter, dry stout and imperial stout. The first known use of the word stout for beer was in a document dated 1677 found in the Egerton Manuscript, the sense being that a stout beer was a strong beer not a dark beer.[3] The name porter was first used in 1721 to describe a dark brown beer that had been made with roasted malts. Because of the huge popularity of porters, brewers made them in a variety of strengths. The beers with higher gravities were called \"stout porters\", so the history and development of stout and porter are intertwined, and the term stout has since become firmly associated with dark beer, rather than just strong beer.[2][4]"
  }, {
    id: 40,
    name: "White wine",
    face: "img/drink/whitewine.jpg",
    calories: 420

    ,
    lastText: "White wine is a wine whose color can be straw-yellow, yellow-green, or yellow-gold coloured. It is produced by the alcoholic fermentation of the non-colored pulp of grapes which may have a white or black skin. It is treated so as to maintain a yellow transparent color in the final product. The wide variety of white wines comes from the large number of varieties, methods of winemaking, and also the ratio of residual sugar."
  }, {
    id: 41,
    name: "Red wine",
    face: "img/drink/redwine.jpg",
    calories: 203

    ,
    lastText: "Red wine is a type of wine made from dark-coloured (black) grape varieties. The actual colour of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. The juice from most purple grapes is greenish-white; the red colour comes from anthocyan pigments (also called anthocyanins) present in the skin of the grape; exceptions are the relatively uncommon teinturier varieties, which produce a red colored juice. Much of the red-wine production process therefore involves extraction of colour and flavour components from the grape skin."
  }, {
    id: 42,

    name: "Beer",
    face: "img/drink/beer.jpg",
    calories: 179

    ,
    lastText: "Beer is an alcoholic beverage produced by the saccharification of starch and fermentation of the resulting sugar. The starch and saccharification enzymes are often derived from malted cereal grains, most commonly malted barley and malted wheat.[1] Most beer is also flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as herbs or fruit may occasionally be included. The preparation of beer is called brewing."
  }];

  return {
    all: function() {
      return chats;
    },
    addCalories: function(chat, $rootScope, $scope) {
	$rootScope.count = $scope.count + calories;
		  Chats.save($rootScope.count);
      chats.splice(chats.indexOf(chat), 1);
    },
	save: function(chats) {
      window.localStorage['chats'] = angular.toJson(chats);
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