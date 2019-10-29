		 
function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

let aaa
let aab
let aac
let aad
let i = 0
let x = 0
let y = 0
let z = 0
let w = 0
let v = 0
let four
let roll
let limit

let team1 = [
//vanilla humans
	{name: "Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Archer", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Swordsman", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Heavy Infantry", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Crossbowman", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Catapult", num: 1, gold: 25, iron: 50, chance: 100},	
	{name: "Bandit", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Slinger", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Scout", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Halberdier", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Pikeneer", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Longbowman", num: 4, gold: 50, iron: 0, chance: 100},	
	{name: "Tower Guard", num: 5, gold: 50, iron: 15, chance: 100},	
	{name: "Trebuchet", num: 1, gold: 50, iron: 50, chance: 100},	
	{name: "War Dog", num: 4, gold: 25, iron: 0, chance: 100},	
	{name: "Zweihander", num: 5, gold: 50, iron: 10, chance: 100},
	
//El	
	{name: "Flagellant", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Templar", num: 3, gold: 50, iron: 25, chance: 100},
	{name: "Temple Guard", num: 5, gold: 50, iron: 5, chance: 100},
// troll
	{name: "Ettin", num: 1, gold: 75, iron: 0, chance: 10},
	{name: "Forest Giant", num: 1, gold: 80, iron: 0, chance: 10},
	{name: "Forest Troll", num: 1, gold: 40, iron: 10, chance: 10},	
	{name: "Goblin Archer", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Goblin", num: 15, gold: 50, iron: 0, chance: 100},	
	{name: "Goblin Spearman", num: 15, gold: 50, iron: 0, chance: 100},	
	{name: "Ogre", num: 1, gold: 25, iron: 0, chance: 100},	
	{name: "Hill Giant", num: 1, gold: 100, iron: 0, chance: 10},
	{name: "Rock Troll", num: 1, gold: 50, iron: 60, chance: 10},
	{name: "Troll", num: 1, gold: 50, iron: 20, chance: 10},
	{name: "Wolf Kin", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Wolf Kin Reaver", num: 7, gold: 50, iron: 10, chance: 100},
//bakemono
	{name: "Bakemono Archer", num: 5, gold: 25, iron: 1, chance: 100},
	{name: "Bakemono Soldier", num: 5, gold: 25, iron: 1, chance: 100},
	{name: "Bakemono Swordsman", num: 5, gold: 25, iron: 3, chance: 100},
	{name: "O Bakemono", num: 1, gold: 25, iron: 0, chance: 100},
	{name: "Dai Bakemono", num: 3, gold: 50, iron: 15, chance: 100},
	{name: "Dai Bakemono Archer", num: 3, gold: 50, iron: 15, chance: 100},
	{name: "Aka Oni", num: 2, gold: 50, iron: 0, chance: 100},
	{name: "Ao Oni", num: 2, gold: 50, iron: 0, chance: 100},
	{name: "Kappa", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Karasu Tengu", num: 2, gold: 50, iron: 10, chance: 100},
	{name: "Mezu", num: 1, gold: 25, iron: 5, chance: 10},
	
//barbarian
	{name: "Barbarian Bowman", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Barbarian Cavalry", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Barbarian Lancer", num: 7, gold: 50, iron: 10, chance: 100},
	{name: "Barbarian Swordsman", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Barbarian Lancer", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Barbarian Warrior", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Crystal Amazon", num: 8, gold: 50, iron: 0, chance: 100},
	{name: "Garnet Amazon", num: 8, gold: 50, iron: 0, chance: 100},
	{name: "Jade Amazon", num: 8, gold: 50, iron: 0, chance: 100},
	{name: "Onyx Amazon", num: 8, gold: 50, iron: 0, chance: 100},
	
//Hoburg
	{name: "Burgmeister Guard", num: 10, gold: 40, iron: 10, chance: 100},
	{name: "Hoburg Crossbow", num: 15, gold: 50, iron: 5, chance: 100},
	{name: "Hoburg Defender", num: 15, gold: 50, iron: 10, chance: 100},
	{name: "Hoburg Militia", num: 15, gold: 50, iron: 0, chance: 100},
	{name: "Hoburg Pikeneer", num: 10, gold: 30, iron: 5, chance: 100},
	{name: "Hoburg Slinger", num: 15, gold: 50, iron: 0, chance: 100},
	{name: "Hoburg Soldier", num: 15, gold: 50, iron: 5, chance: 100},
	{name: "Hog Knight", num: 5, gold: 50, iron: 10, chance: 100},
	
//Demon
	{name: "Imp", num: 5, gold: 50, iron: 0, chance: 100},	
	
//Druid
	{name: "Barechested Slinger", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barechested Swordsman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barechested Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Beast Cavalry", num: 3, gold: 50, iron: 5, chance: 100},	
	{name: "Boar Warrior", num: 4, gold: 50, iron: 10, chance: 100},
	{name: "Hornblower", num: 1, gold: 30, iron: 0, chance: 100},
	{name: "Barechested Slinger", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barechested Swordsman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barechested Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Beast Cavalry", num: 3, gold: 50, iron: 5, chance: 100},	
	{name: "Boar Warrior", num: 4, gold: 50, iron: 10, chance: 100},
	{name: "Hornblower", num: 1, gold: 30, iron: 0, chance: 100},
	{name: "Bear", num: 3, gold: 50, iron: 0, chance: 100},
	{name: "Boar", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Camel", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Deer", num: 15, gold: 50, iron: 0, chance: 100},
	{name: "Dog", num: 8, gold: 50, iron: 0, chance: 100},
	{name: "Donkey", num: 8, gold: 50, iron: 0, chance: 100},
	{name: "Fire Ant", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Giant Mantis", num: 4, gold: 50, iron: 0, chance: 100},	
	{name: "Giant Ant", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Giant Moose", num: 1, gold: 90, iron: 0, chance: 15},
	{name: "Giant Rat", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Horse", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Goat", num: 15, gold: 50, iron: 0, chance: 100},
	{name: "Great Boar", num: 3, gold: 50, iron: 0, chance: 100},
	{name: "Rabbit", num: 20, gold: 50, iron: 0, chance: 100},	
	{name: "Rat", num: 20, gold: 50, iron: 0, chance: 100},
	{name: "Snake", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Serpent", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Wolf", num: 6, gold: 50, iron: 0, chance: 100},

//Dwarf
	{name: "Dwarf Arbalest", num: 5, gold: 0, iron: 50, chance: 100},
	{name: "Dwarf Guard", num: 5, gold: 0, iron: 60, chance: 100},
	{name: "Dwarf Warrior", num: 5, gold: 0, iron: 50, chance: 100},
	{name: "Dwarf", num: 5, gold: 0, iron: 40, chance: 100},
	{name: "Dwarven Ballista", num: 1, gold: 0, iron: 60, chance: 100},	
	{name: "Outdoor Dwarf", num: 5, gold: 30, iron: 30, chance: 100},	

//Enchanter
	{name: "Animated Armor", num: 5, gold: 0, iron: 50, chance: 100},
	{name: "Terracotta Soldier", num: 5, gold: 60, iron: 0, chance: 100},
	{name: "Living Bow", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Dancing Sword", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Gargoyle", num: 1, gold: 30, iron: 5, chance: 100},	

//cult
	{name: "Deep One", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Deep One Warrior", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Shambler", num: 4, gold: 50, iron: 8, chance: 100},
	{name: "Yithian", num: 1, gold: 40, iron: 0, chance: 25},	
	{name: "War Shambler", num: 4, gold: 50, iron: 20, chance: 100},		

//Baal
	{name: "Ba'alite Archer", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Ba'alite Heavy Infantry", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Ba'alite Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Ba'alite Zealot", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Large Spider", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Scorpion", num: 10, gold: 50, iron: 0, chance: 100},

	//Dryad
	{name: "Satyr", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Centaur", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Minotaur", num: 3, gold: 50, iron: 0, chance: 100},
	{name: "Harpy", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Centaur Warrior", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Satyr Javelinist", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Satyr Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Minotaur Warrior", num: 3, gold: 50, iron: 0, chance: 100},

	//Pale One
	{name: "Pale One", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Pale One Soldier", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Cavern Guard", num: 5, gold: 50, iron: 20, chance: 100},
	{name: "Ancient Hurler", num: 1, gold: 40, iron: 0, chance: 25},	
	{name: "Ancient Pale One", num: 1, gold: 40, iron: 15, chance: 25},	
	{name: "Seal Guard", num: 1, gold: 50, iron: 25, chance: 10},
	
	//big dumb jaguar man
	{name: "Tribal Warrior", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Jungle Warrior", num: 6, gold: 50, iron: 0, chance: 100},
	{name: "Feathered Warrior", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Jaguar Warrior", num: 5, gold: 50, iron: 0, chance: 25},	
	{name: "Ancient Pale One", num: 1, gold: 40, iron: 15, chance: 25},	
	{name: "Seal Guard", num: 1, gold: 50, iron: 25, chance: 10},
		
	//mean little boy
	{name: "Hobmark Crossbows", num: 15, gold: 50, iron: 5, chance: 100},
	{name: "Hobmark Soldier", num: 15, gold: 50, iron: 5, chance: 100},
	{name: "Hobmark Defender", num: 15, gold: 50, iron: 10, chance: 100},
	{name: "Hobmark Hammer", num: 10, gold: 30, iron: 5, chance: 100},	
	{name: "Markgraf Guard", num: 10, gold: 40, iron: 10, chance: 100},	
	{name: "Hog Hussar", num: 5, gold: 50, iron: 5, chance: 100},
		
	//warlock
	{name: "Lesser Fire", num: 5, gold: 60, iron: 0, chance: 100},
	{name: "Lesser Water", num: 5, gold: 60, iron: 0, chance: 100},
	{name: "Lesser Earth", num: 5, gold: 60, iron: 0, chance: 100},
	{name: "Winter Wolf", num: 3, gold: 50, iron: 0, chance: 100},	

	// witch
	
	{name: "Androphag Archer", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Androphag Cavalry", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Androphag Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Black Cat Familiar", num: 25, gold: 50, iron: 0, chance: 100},	
	{name: "Crocodile", num: 1, gold: 20, iron: 0, chance: 100},	
	{name: "Frog", num: 25, gold: 50, iron: 0, chance: 100},	
	{name: "Giant Toad", num: 1, gold: 30, iron: 0, chance: 100},
	{name: "Marsh Worm", num: 1, gold: 25, iron: 0, chance: 100},	
	{name: "Giant Snail", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Hydra Hatchling", num: 1, gold: 20, iron: 0, chance: 100},	
	
	//Senator
	{name: "Hastati", num: 5, gold: 45, iron: 5, chance: 100},
	{name: "Princep", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Praetorian Guard", num: 5, gold: 60, iron: 20, chance: 100},
	{name: "Velite", num: 5, gold: 40, iron: 0, chance: 100},
	
//weird	
	{name: "Dragon Hatchling", num: 1, gold: 25, iron: 5, chance: 10},
	{name: "Cyclops", num: 1, gold: 120, iron: 0, chance: 10},
	{name: "Siren", num: 1, gold: 25, iron: 0, chance: 50},
	{name: "Pygmy", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Sinner", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Brass Claw Horror", num: 2, gold: 60, iron: 10, chance: 100},
	{name: "Float Cat Horror", num: 1, gold: 40, iron: 0, chance: 100},
	{name: "Hybrid Fisherman", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hybrid Soldier", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Runner", num: 5, gold: 50, iron: 0, chance: 100},	
]

let team2 = [
//vanilla humans
	{name: "Captain", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Monk", gold: 50, iron: 0, chance: 10, goldplus: 10},
	{name: "Hedge Wizard", gold: 40, iron: 0, chance: 5, goldplus: 40},
	{name: "High Lord", gold: 40, iron: 5, chance: 10, goldplus: 50},
	{name: "Scout", gold: 1, iron: 0, chance: 10, goldplus: 40},
	{name: "Assassin", gold: 70, iron: 0, chance: 10, goldplus: 50},
	{name: "White Wizard", gold: 100, iron: 0, chance: 3, goldplus: 100},
	{name: "Alchemist", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Court Mage", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Princess", gold: 40, iron: 0, chance: 5, goldplus: 100},

//weird	
	{name: "Dragon Hatchling", gold: 30, iron: 0, chance: 5, goldplus: 40},
	{name: "Mind Slime Horror", gold: 60, iron: 0, chance: 5, goldplus: 40},
	{name: "Peddler", gold: 20, iron: 0, chance: 5, goldplus: 40},	
	{name: "Beholder", gold: 150, iron: 0, chance: 3, goldplus: 100},
	{name: "Amphiptere", gold: 70, iron: 0, chance: 3, goldplus: 80},
	{name: "Wyvern", gold: 30, iron: 0, chance: 3, goldplus: 80},
	{name: "Gargoyle", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Wood Golem", gold: 35, iron: 0, chance: 3, goldplus: 40},
	{name: "Animated Armor", gold: 0, iron: 50, chance: 5, goldplus: 0},
	{name: "Kraken", gold: 45, iron: 0, chance: 5, goldplus: 30},
	{name: "Yithian Sage", gold: 40, iron: 0, chance: 5, goldplus: 30},
	{name: "Banshee", gold: 150, iron: 0, chance: 1, goldplus: 100},
	{name: "Brass Claw Horror", gold: 40, iron: 0, chance: 5, goldplus: 40},
	{name: "Cave Grub", gold: 40, iron: 0, chance: 5, goldplus: 40},
	{name: "Fire Elemental", gold: 40, iron: 0, chance: 5, goldplus: 70},
	{name: "Water Elemental", gold: 40, iron: 0, chance: 5, goldplus: 70},
	{name: "Air Elemental", gold: 40, iron: 0, chance: 5, goldplus: 70},
	{name: "Earth Elemental", gold: 40, iron: 0, chance: 5, goldplus: 70},
	{name: "Lake Troll", gold: 50, iron: 20, chance: 5, goldplus: 0},
	{name: "Kitsune", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Swamp Drake", gold: 40, iron: 0, chance: 5, goldplus: 30},
	{name: "Reveler", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Centurion", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Leo", gold: 40, iron: 0, chance: 5, goldplus: 30},
	{name: "Renata", gold: 50, iron: 0, chance: 5, goldplus: 20},	
	{name: "Renatus", gold: 110, iron: 0, chance: 5, goldplus: 20},
	{name: "Serpent Acolyte", gold: 50, iron: 0, chance: 5, goldplus: 20},	
	{name: "Uba", gold: 50, iron: 0, chance: 5, goldplus: 20},
	]

let team3 = ["Beholder","Eye Tyrant","King","Senator",
			 "High Lord","Yeti","Wyrm","Crystal Golem",
			 "Troll King","Doppelganger Captain","Gore Tide Horror", "Olm Sage", "King of the Deep",
			 "Dragon","Captain",
			 "Wood Golem","Stone Golem",'Flesh Golem','Gargoyle','Troglodyte',			 
			 "Hydra","Formless Spawn","Yithian Sage","Displacer Beast",
			 "Carrion","Dracolich","Mummy","Tartarian Spirit","Barbarian Leader","Mounted Chief",
			 "Manticore","Demonic Locust","Goblin","Hidden Freak",
			 "Lake Troll King","Gelatinous Cube","Black Cat Familiar","Creeping Doom",
			 "Monster Toad","Giant Snail","Serpent Priest","White Wizard",
			 "Rabbit","Golden Mirror","Beast Bat",'Fire Elemental','Water Elemental','Air Elemental','Earth Elemental']
			 
let team3_2 = ["High Lord","Troll King","Doppelganger Captain", "Olm", "King of the Deep",
			 "Captain","Hydra Hatchling","Yithian","Wood Golem","Stone Golem",'Flesh Golem','Gargoyle','Troglodyte',
			 "Barbarian Leader","Mounted Chief","Hogmeister",'Wolf','Serpent','Senator',
			 "Demonic Locust",'Scorpion Beast','Lesser Fire','Lesser Earth',"Goblin",
			 "Lake Troll","Black Cat Familiar",'Lesser Water','Cave Grub',
			 "Frog","Giant Snail","Serpent Priest","White Wizard","Hidden Freak",
			 "Rabbit","Beast Bat"]

let team3_3 = ["Beholder","King","Senator","Goblin","Hidden Freak",
			 "High Lord","Yeti","Wood Golem","Stone Golem",'Flesh Golem',
			 "Troll King","Doppelganger Captain", "Olm Sage", "King of the Deep",
			 "Captain",'Scorpion Beast','Lesser Fire','Lesser Earth','Gargoyle',
			"Hydra","Formless Spawn","Yithian Sage","Displacer Beast",'Lesser Water','Cave Grub',
			 "Carrion","Mummy","Barbarian Leader","Mounted Chief",'Troglodyte',
			 "Manticore","Demonic Locust",'Scorpion Beast','Lesser Fire','Lesser Earth',
			 "Lake Troll King","Gelatinous Cube","Black Cat Familiar","Creeping Doom",
			 "Monster Toad","Giant Snail","Serpent Priest","White Wizard",
			 "Rabbit","Golden Mirror","Beast Bat",'Fire Elemental','Water Elemental','Air Elemental','Earth Elemental']					 
			 
let team4 = ['3','9','20','22','23','24','25','26','28','29','30','31',
			 '38','57','106','113','110','112','114','121','124','151','152','154',
			 '156','160','210','213','216','219','223','232','236'
			 ]	

let team5 = ['Dastardly','Unbeatable', 'Fiery', 'Frightening','Old','Oozing',
			 'Aging','Burning','Cuddly','Plump','Dying','Lovely','Golden','Crystal',
			 'Mighty', 'Blood','Cutie','Plague','Void','Sullen','Ivory','Beast','Bull',
			 'Mindless','Questing','Armored','Little','Greater','Elder','Newborn',
			 'Starving','Gurgling','Reaching','Diving','Beckoning','Soulless'
	
			 ]

let team6 = ['King','Queen','Prince','Demon','Duke','Worm','Princess','Thief',
			 'Butcher','Slayer','Eater','Gardener','Slave','Child','Wretch','Judge',
			 'Warrior','Flinger','Mystic','Lictor','Sorceror','Mother','Father','Ancient',
			 'Champion','Fox','Cannibal','Spawn','Choker','Angel','Barbarian','Serpent',
			 'Rat'
			 ]	

let team7 = ['Hell','the Throne','Souls','Pain','Love','Darkness','Ooze','Fear',
			 'Funk', 'Nations','Fingernails','the Secret','Elysium','the Cult','Magic',
			 'the Fold','the Legion','the Light','Rebirth','the Reach','the Tower',
			 'the Inbetween','Blades','the Trees'
			 ]
let team8 = ['5','6','7','40','41','42','43','70','90','105','109','158','196',
		     '222'
			 ]			 

let	text	
let picky
let shuffle 
let shuffle2
let leader
let leader2	 	 
let Coin
let Coin2
let spell
let hasunits
let mymonster
let mymonster2
let mymonster3
let mymonsterstore
let mymonster2store
let mymonster3store
let allow_overwrite = true
let classnumber = 10
let timeset = 0
let illapp = "'"
var id = setInterval(test, 300);
function test(){

classnumber = parseInt(document.getElementById("classnumber").value, 10);	
setInterval(function test2(){document.getElementById('mainout').innerHTML = "Classes to be Generated:" + (classnumber)
})
setInterval(function test3(){document.getElementById('mainout2').innerHTML = "Total Classes in Game:" + (classnumber + 21)
})
}

function download(filename, text) {
	filename = 'Randomclasses.c4m'
	text = ""
	text += 'icon "unholyalliances/unholyalliances.tga"' + '\n'
	text += 'description "Desperate times call for desperate measures"' + '\n'	
	text += '# All Done <3' + '\n \n'
	
text += 'newmonster "Hidden Freak" \n'	
text += 'descr "Who knows what horrors dwell in the random chaos of Elysium?" \n'	
text += 'copystats "Troglodyte" \n'	
text += 'hp 40\n'
text += 'mr 5 \n'
text += 'spr1 "Randomclass/gog_1.tga" \n'
text += 'spr2 "Randomclass/gog_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 5 "Beak" \n'
text += 'clearspec \n'
text += 'spellweapon 10 1 \n'
text += 'spellweapon 50 1 \n'
text += 'flying \n'
text += 'size2x2 \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Runner" \n'
text += 'name "Runner" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'spr1 "Randomclass/0173_1.tga" \n'
text += 'spr2 "Randomclass/0173_2.tga" \n'
text += 'clearspec \n'
text += 'coldblood \n'
text += 'fast \n'
	
i = 0
classnumber = 0	
classnumber = parseInt(document.getElementById("classnumber").value, 10);
while(i <= (classnumber -1)){
	
	
x = 0
y = 0
z = 0
w = 0
v = 0

limit = (Math.floor(Math.random() * 10)) + 1
limit2 = Math.floor(Math.random() * 7)
limit3 = Math.floor(Math.random() * 4)	
i++
shuffle = randomItem(team8)
shuffle2 = Math.floor(Math.random() * 20)

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonsterstore = 'newmonster "' + mymonster + '" \n'	
}	
if(coin != 3){
mymonster =	 randomItem(team5) + " " + randomItem(team6)
mymonsterstore = 'newmonster "' + mymonster + '" \n'	
}

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster2 = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonster2store = 'newmonster "' + mymonster2 + '" \n'	
}	
if(coin != 3){
mymonster2 =	 randomItem(team5) + " " + randomItem(team6)
mymonster2store = 'newmonster "' + mymonster2 + '" \n'	
}

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster3 = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonster3store = 'newmonster "' + mymonster3 + '" \n'	
}	
if(coin != 3){
mymonster3 =	 randomItem(team5) + " " + randomItem(team6)
mymonster3store = 'newmonster "' + mymonster3 + '" \n'	
}
leader = randomItem(team3_2)

text += mymonsterstore
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

if(shuffle2 === 0){
text += 'power 1 1 \n'
text += 'power 2 1 \n'	
text += 'gatherhands \n'	
}
if(shuffle2 === 1){
text += 'power 3 1 \n'	
text += 'gathersacr \n'		
}
if(shuffle2 === 2){
text += 'power 4 1 \n'	
text += 'gatherfungus \n'		
}
if(shuffle2 === 3){
text += 'power 5 1 \n'	
text += 'gatherherbs \n'	
}
if(shuffle2 === 4){
text += 'power 7 1 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 5){
text += 'power 8 1 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 6){
text += 'power 9 1 \n'		
text += 'gatherweed \n'	
}
if(shuffle2 === 7){
text += 'power 10 1 \n'		
text += 'gathergems \n'	
}
if(shuffle2 === 8){
text += 'power 11 1 \n'	
}
if(shuffle2 === 9){
text += 'power 12 1 \n'
text += 'gathersacr \n'	
text += 'slavehunt 1 \n' 	
}
if(shuffle2 === 10){
text += 'power 13 1 \n'
text += 'gatherherbs \n'	
}
if(shuffle2 === 11){
text += 'power 15 1 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 12){
text += 'power 18 1 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 13){
text += 'power 19 1 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 14){
text += 'power 20 1 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 15){
text += 'power 21 1 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 16){
text += 'power 23 1 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 17){
text += 'power 26 1 \n'	
text += 'gathergems \n'	
}
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweapon ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_3)	
text += mymonster2store	
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

if(shuffle2 === 0){
text += 'power 1 2 \n'
text += 'power 2 2 \n'	
text += 'gatherhands \n'	
}
if(shuffle2 === 1){
text += 'power 3 2 \n'	
text += 'gathersacr \n'		
}
if(shuffle2 === 2){
text += 'power 4 2 \n'	
text += 'gatherfungus \n'		
}
if(shuffle2 === 3){
text += 'power 5 2 \n'	
text += 'gatherherbs \n'	
}
if(shuffle2 === 4){
text += 'power 7 2 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 5){
text += 'power 8 2 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 6){
text += 'power 9 2 \n'		
text += 'gatherweed \n'	
}
if(shuffle2 === 7){
text += 'power 10 2 \n'		
text += 'gathergems \n'	
}
if(shuffle2 === 8){
text += 'power 11 2 \n'	
}
if(shuffle2 === 9){
text += 'power 12 2 \n'
text += 'gathersacr \n'	
text += 'slavehunt 1 \n' 	
}
if(shuffle2 === 10){
text += 'power 13 2 \n'
text += 'gatherherbs \n'	
}
if(shuffle2 === 11){
text += 'power 15 2 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 12){
text += 'power 18 2 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 13){
text += 'power 19 2 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 14){
text += 'power 20 2 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 15){
text += 'power 21 2 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 16){
text += 'power 23 2 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 17){
text += 'power 26 2 \n'	
text += 'gathergems \n'	
}
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 2 \n'
text += ' \n'

leader = randomItem(team3)	
text += mymonster3store	
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

if(shuffle2 === 0){
text += 'power 1 3 \n'
text += 'power 2 3 \n'	
text += 'gatherhands \n'	
}
if(shuffle2 === 1){
text += 'power 3 3 \n'	
text += 'gathersacr \n'		
}
if(shuffle2 === 2){
text += 'power 4 3 \n'	
text += 'gatherfungus \n'		
}
if(shuffle2 === 3){
text += 'power 5 3 \n'	
text += 'gatherherbs \n'	
}
if(shuffle2 === 4){
text += 'power 7 3 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 5){
text += 'power 8 3 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 6){
text += 'power 9 3 \n'		
text += 'gatherweed \n'	
}
if(shuffle2 === 7){
text += 'power 10 3 \n'		
text += 'gathergems \n'	
}
if(shuffle2 === 8){
text += 'power 11 3 \n'	
}
if(shuffle2 === 9){
text += 'power 12 3 \n'
text += 'gathersacr \n'	
text += 'slavehunt 1 \n' 	
}
if(shuffle2 === 10){
text += 'power 13 3 \n'
text += 'gatherherbs \n'	
}
if(shuffle2 === 11){
text += 'power 15 3 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 12){
text += 'power 18 3 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 13){
text += 'power 19 3 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 14){
text += 'power 20 3 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 15){
text += 'power 21 3 \n'
text += 'gathergems \n'	
}
if(shuffle2 === 16){
text += 'power 23 3 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 17){
text += 'power 26 3 \n'	
text += 'gathergems \n'	
}
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'
text += 'mastery 3 \n'
text += ' \n'

text += 'newclass \n'
text += 'setclassname "'+ mymonster + '" \n'
text += 'classdescr "" \n'
text += 'clearrec  \n'
while (x <= limit){	
x++
roll = Math.floor(Math.random() * team1.length)
text += 'addunitrec "' + team1[roll].name + '" '+ team1[roll].chance + ' ' + team1[roll].num + ' ' + team1[roll].gold + ' 0 ' + team1[roll].iron + ' \n'

}
while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2.length)
text += 'addcomrec "' + team2[roll].name + '" '+ team2[roll].chance + ' ' + team2[roll].gold + ' ' + team2[roll].goldplus + ' ' + team2[roll].iron + ' \n'

}
if (shuffle2 === 17){	
text += 'addmercrec "Mirror" 100 1 10 0 \n'
text += 'addmercrec "Large Mirror" 100 1 25 0 \n'
text += 'addmercrec "Silver Mirror" 100 1 50 0 \n'
text += 'addmercrec "Gold Mirror" 100 1 150 0 \n'
}
text += 'addcomrec "'+ mymonster +'" 5 70 30 0 \n'
text += 'nostdtroops  \n'
text += 'clearstartunits  \n'
while (z <= 1){	
z++
roll = Math.floor(Math.random() * team2.length)
hasunits = 0
if(team1[roll].num <= 5 && team1[roll].num > 1){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num * 2 +' \n'
hasunits ++
}
if(team1[roll].num > 5){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num +' \n'
hasunits ++
}
if(team1[roll].num === 1 && hasunits ===0){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num * 2 +' \n'
}
}
text += 'setmaincom "' + mymonster + '"  \n'
text += 'addstartcom "' + team2[roll].name + '"  \n'
text += 'hometerr ' + randomItem(team4) + '  \n'
coin = Math.floor(Math.random() * 4)
if(coin === 3){
text += 'addstartterr '+ randomItem(team8) + '\n'	
}	
text += ' \n'
}
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);	
}
// El and Troll King
function download2(filename, text) {
filename = 'Randomclasses_2.c4m'
text = ""
text += 'icon "unholyalliances/unholyalliances.tga"' + '\n'
text += 'description "Desperate times call for desperate measures"' + '\n'	
text += '# All Done <3' + '\n'	
x = 0
y = 0
z = 0
w = 0
v = 0

limit = (Math.floor(Math.random() * 10)) + 1
limit2 = Math.floor(Math.random() * 7)
limit3 = Math.floor(Math.random() * 4)	
shuffle = randomItem(team8)

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonsterstore = 'newmonster "' + mymonster + '" \n'	
}	
if(coin != 3){
mymonster =	 randomItem(team5) + " " + randomItem(team6)
mymonsterstore = 'newmonster "' + mymonster + '" \n'	
}

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster2 = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonster2store = 'newmonster "' + mymonster2 + '" \n'	
}	
if(coin != 3){
mymonster2 =	 randomItem(team5) + " " + randomItem(team6)
mymonster2store = 'newmonster "' + mymonster2 + '" \n'	
}

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster3 = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonster3store = 'newmonster "' + mymonster3 + '" \n'	
}	
if(coin != 3){
mymonster3 =	 randomItem(team5) + " " + randomItem(team6)
mymonster3store = 'newmonster "' + mymonster3 + '" \n'	
}
leader = randomItem(team3_2)

text += mymonsterstore
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 25 1 \n'	
text += 'gatherrelics \n'	

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweapon ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_3)	
text += mymonster2store	
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 25 2 \n'
text += 'gatherrelics \n'
	
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 2 \n'
text += ' \n'

leader = randomItem(team3)	
text += mymonster3store	
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 25 3 \n'
text += 'gatherrelics \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'
text += 'mastery 3 \n'
text += ' \n'

text += 'selectclass 21 \n'
text += 'clearrec  \n'
while (x <= limit){	
x++
roll = Math.floor(Math.random() * team1.length)
text += 'addunitrec "' + team1[roll].name + '" '+ team1[roll].chance + ' ' + team1[roll].num + ' ' + team1[roll].gold + ' 0 ' + team1[roll].iron + ' \n'

}
while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2.length)
text += 'addcomrec "' + team2[roll].name + '" '+ team2[roll].chance + ' ' + team2[roll].gold + ' ' + team2[roll].goldplus + ' ' + team2[roll].iron + ' \n'

}
text += 'addcomrec "'+ mymonster +'" 5 70 30 0 \n'
text += 'addcomrec "'+ mymonster2 +'" 100 100 0 0 \n'
text += 'reclimiter  "='+ mymonster +'" \n'
text += 'addcomrec "'+ mymonster3 +'" 100 250 0 0 \n'
text += 'reclimiter  "='+ mymonster2 +'" \n'
text += 'clearstartunits  \n'
while (z <= 1){	
z++
roll = Math.floor(Math.random() * team2.length)
hasunits = 0
if(team1[roll].num <= 5 && team1[roll].num > 1){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num * 2 +' \n'
hasunits ++
}
if(team1[roll].num > 5){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num +' \n'
hasunits ++
}
if(team1[roll].num === 1 && hasunits ===0){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num * 2 +' \n'
}
}
text += 'setmaincom "' + mymonster + '"  \n'
text += 'addstartcom "' + team2[roll].name + '"  \n'
text += 'hometerr ' + randomItem(team4) + '  \n'
coin = Math.floor(Math.random() * 4)
text += 'clearstartterr \n'
text += 'addstartterr '+ randomItem(team8) + '\n'	
text += ' \n'


x = 0
y = 0
z = 0
w = 0
v = 0

limit = (Math.floor(Math.random() * 10)) + 1
limit2 = Math.floor(Math.random() * 7)
limit3 = Math.floor(Math.random() * 4)	
shuffle = randomItem(team8)

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonsterstore = 'newmonster "' + mymonster + '" \n'	
}	
if(coin != 3){
mymonster =	 randomItem(team5) + " " + randomItem(team6)
mymonsterstore = 'newmonster "' + mymonster + '" \n'	
}

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster2 = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonster2store = 'newmonster "' + mymonster2 + '" \n'	
}	
if(coin != 3){
mymonster2 =	 randomItem(team5) + " " + randomItem(team6)
mymonster2store = 'newmonster "' + mymonster2 + '" \n'	
}

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster3 = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonster3store = 'newmonster "' + mymonster3 + '" \n'	
}	
if(coin != 3){
mymonster3 =	 randomItem(team5) + " " + randomItem(team6)
mymonster3store = 'newmonster "' + mymonster3 + '" \n'	
}
leader = randomItem(team3_2)

text += mymonsterstore
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 22 1 \n'	
text += 'gatherfungus \n'	

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweapon ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_3)	
text += mymonster2store	
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 22 2 \n'
text += 'gatherfungus \n'
	
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 2 \n'
text += ' \n'

leader = randomItem(team3)	
text += mymonster3store	
text += 'descr "" \n'
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 22 3 \n'
text += 'gatherfungus \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'
text += 'mastery 3 \n'
text += ' \n'

text += 'selectclass 14 \n'
text += 'clearrec  \n'
while (x <= limit){	
x++
roll = Math.floor(Math.random() * team1.length)
text += 'addunitrec "' + team1[roll].name + '" '+ team1[roll].chance + ' ' + team1[roll].num + ' ' + team1[roll].gold + ' 0 ' + team1[roll].iron + ' \n'

}
while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2.length)
text += 'addcomrec "' + team2[roll].name + '" '+ team2[roll].chance + ' ' + team2[roll].gold + ' ' + team2[roll].goldplus + ' ' + team2[roll].iron + ' \n'

}
text += 'addcomrec "'+ mymonster +'" 5 70 30 0 \n'
text += 'clearstartunits  \n'
while (z <= 1){	
z++
roll = Math.floor(Math.random() * team2.length)
hasunits = 0
if(team1[roll].num <= 5 && team1[roll].num > 1){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num * 2 +' \n'
hasunits ++
}
if(team1[roll].num > 5){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num +' \n'
hasunits ++
}
if(team1[roll].num === 1 && hasunits ===0){
text += 'addstartunits "' + team1[roll].name + '" '+ team1[roll].num * 2 +' \n'
}
}
text += 'setmaincom "' + mymonster + '"  \n'
text += 'addstartcom "' + team2[roll].name + '"  \n'
text += 'hometerr ' + randomItem(team4) + '  \n'
coin = Math.floor(Math.random() * 4)
text += 'clearstartterr \n'
text += 'addstartterr '+ randomItem(team8) + '\n'	
text += ' \n'	
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}	
	
// Start file download.
 


	 