		 
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
	{name: "Aka Oni", num: 2, gold: 60, iron: 0, chance: 10},
	{name: "Ao Oni", num: 2, gold: 60, iron: 0, chance: 10},
	{name: "Kappa", num: 4, gold: 50, iron: 25, chance: 100},
	{name: "Karasu Tengu", num: 2, gold: 50, iron: 10, chance: 100},
	{name: "Mezu", num: 1, gold: 50, iron: 5, chance: 10},
	
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
	{name: "Giant Toad", num: 1, gold: 40, iron: 0, chance: 100},
	{name: "Marsh Worm", num: 1, gold: 30, iron: 0, chance: 100},	
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
	{name: "Brass Claw Horror", num: 2, gold: 80, iron: 10, chance: 100},
	{name: "Float Cat Horror", num: 1, gold: 40, iron: 0, chance: 100},
	{name: "Hybrid Fisherman", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hybrid Soldier", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Runner", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Lizardman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Lizardman Warrior", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Caveman", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Voi Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Voi Axeman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Voi Archer", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Peshti Spearman", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Militia", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Heavy Spearman", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Light Cavalry", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Heavy Cavalry", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Lion Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hyena Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Ichtyid Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "War Elephant", num: 1, gold: 65, iron: 0, chance: 10},		
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
	{name: "Dragon Hatchling", gold: 40, iron: 0, chance: 5, goldplus: 40},
	{name: "Mind Slime Horror", gold: 60, iron: 0, chance: 5, goldplus: 40},
	{name: "Peddler", gold: 20, iron: 0, chance: 5, goldplus: 40},	
	{name: "Beholder", gold: 150, iron: 0, chance: 3, goldplus: 100},
	{name: "Amphiptere", gold: 70, iron: 0, chance: 3, goldplus: 80},
	{name: "Wyvern", gold: 50, iron: 0, chance: 3, goldplus: 70},
	{name: "Gargoyle", gold: 50, iron: 0, chance: 5, goldplus: 30},
	{name: "Wood Golem", gold: 50, iron: 0, chance: 3, goldplus: 50},
	{name: "Animated Armor", gold: 50, iron: 0, chance: 5, goldplus: 50},
	{name: "Kraken", gold: 60, iron: 0, chance: 5, goldplus: 50},
	{name: "Yithian Sage", gold: 60, iron: 0, chance: 5, goldplus: 60},
	{name: "Banshee", gold: 200, iron: 0, chance: 1, goldplus: 100},
	{name: "Brass Claw Horror", gold: 70, iron: 0, chance: 5, goldplus: 40},
	{name: "Cave Grub", gold: 60, iron: 0, chance: 5, goldplus: 60},
	{name: "Fire Elemental", gold: 60, iron: 0, chance: 5, goldplus: 70},
	{name: "Water Elemental", gold: 60, iron: 0, chance: 5, goldplus: 70},
	{name: "Air Elemental", gold: 60, iron: 0, chance: 5, goldplus: 70},
	{name: "Earth Elemental", gold: 60, iron: 0, chance: 5, goldplus: 70},
	{name: "Lake Troll", gold: 60, iron: 20, chance: 5, goldplus: 20},
	{name: "Kitsune", gold: 60, iron: 0, chance: 5, goldplus: 40},
	{name: "Swamp Drake", gold: 40, iron: 0, chance: 5, goldplus: 30},
	{name: "Reveler", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Centurion", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Leo", gold: 40, iron: 0, chance: 5, goldplus: 30},
	{name: "Renata", gold: 50, iron: 0, chance: 5, goldplus: 20},	
	{name: "Renatus", gold: 110, iron: 0, chance: 5, goldplus: 20},
	{name: "Serpent Acolyte", gold: 50, iron: 0, chance: 5, goldplus: 20},	
	{name: "Uba", gold: 50, iron: 0, chance: 5, goldplus: 50},
	{name: "Caveman Chief", gold: 40, iron: 0, chance: 5, goldplus: 10},
	{name: "Ichtyid Captain", gold: 40, iron: 0, chance: 10, goldplus: 10},	
	{name: "Giant Snail", gold: 30, iron: 0, chance: 10, goldplus: 10},	
	]

let team3 = ["Beholder","Eye Tyrant","King","Senator",'Python','Hidden Aboleth','Scorpion Man',
			 "High Lord","Yeti","Wyrm","Crystal Golem","Moon Horror",'Horror Olm',
			 "Troll King","Doppelganger Captain","Gore Tide Horror", "Olm Sage", "King of the Deep",
			 "Dragon","Captain","Freak Lord","Lizardman Shaman","Spine Membrane Horror","Horror Mantis",
			 "Wood Golem","Stone Golem",'Flesh Golem','Gargoyle','Troglodyte','Lesser Demon',"Serpent Fiend","Spine Devil",		 
			 "Hydra","Formless Spawn","Yithian Sage","Displacer Beast","Ichtyid Captain",'Harlequin',
			 "Carrion","Dracolich","Mummy","Tartarian Spirit","Barbarian Leader","Mounted Chief",
			 "Manticore","Demonic Locust","Goblin","Hidden Freak","Large Spider","Dream Horror","Anakite Captain",
			 "Lake Troll King","Gelatinous Cube","Black Cat Familiar","Creeping Doom","Rakshasa","Hanya",
			 "Monster Toad","Giant Snail","Serpent Priest","White Wizard",'Commander','Mounted Commander',
			 "Rabbit","Golden Mirror","Beast Bat",'Fire Elemental','Water Elemental','Air Elemental','Earth Elemental',
			 "Earth Gnome","Sylph","Undine","Winter Wolf","Ape"]
			 
let team3_2 = ["High Lord","Troll King","Doppelganger Captain", "Olm", "King of the Deep","Ichtyid Captain",
			 "Captain","Hydra Hatchling","Yithian","Wood Golem","Stone Golem",'Flesh Golem','Gargoyle','Troglodyte',
			 "Barbarian Leader","Mounted Chief","Hogmeister",'Wolf','Serpent','Senator','Harlequin',"Hanya",
			 "Demonic Locust",'Scorpion Beast','Lesser Fire','Lesser Earth',"Goblin",'Commander','Mounted Commander',
			 "Lake Troll","Black Cat Familiar",'Lesser Water','Cave Grub',"Large Spider",'Lesser Demon',"Serpent Fiend","Spine Devil",
			 "Rabbit","Beast Bat","Freak Lord","Lizardman Shaman",'Hidden Aboleth',"Anakite Captain",
			 "Earth Gnome","Sylph","Undine","Winter Wolf","Ape","Spine Membrane Horror","Horror Mantis",
			 ]

let team3_3 = ["Beholder","King","Senator","Goblin","Hidden Freak","Large Spider","Ichtyid Captain",
			 "High Lord","Yeti","Wood Golem","Stone Golem",'Flesh Golem','Priest','Commander','Mounted Commander',
			 "Troll King","Doppelganger Captain", "Olm Sage", "King of the Deep","Rakshasa",'Harlequin',
			 "Captain",'Scorpion Beast','Lesser Fire','Lesser Earth','Gargoyle',"Olm Sage","Spine Membrane Horror","Horror Mantis",
			 "Hydra","Formless Spawn","Yithian Sage","Displacer Beast",'Lesser Water','Cave Grub',"Anakite Captain",
			 "Carrion","Mummy","Barbarian Leader","Mounted Chief",'Troglodyte',"Dream Horror",
			 "Manticore","Demonic Locust",'Scorpion Beast','Lesser Fire','Lesser Earth',"Hanya",
			 "Lake Troll King","Gelatinous Cube","Black Cat Familiar","Creeping Doom",'Lesser Demon',"Serpent Fiend","Spine Devil",
			 "Monster Toad","Giant Snail","Serpent Priest","White Wizard","Freak Lord","Lizardman Shaman",
			 "Rabbit","Golden Mirror","Beast Bat",'Fire Elemental','Water Elemental','Air Elemental','Earth Elemental',
			 "Earth Gnome","Sylph","Undine","Winter Wolf","Ape",'Hidden Aboleth']					 
			 
let team4 = ['3','9','20','22','23','24','25','26','28','29','30','31',
			 '38','57','106','113','110','112','114','121','124','151','152','154',
			 '156','160','210','213','216','219','223'
			 ]	

let team5 = ['Dastardly','Unbeatable', 'Fiery', 'Frightening','Old','Oozing',
			 'Aging','Burning','Cuddly','Plump','Dying','Lovely','Golden','Crystal',
			 'Mighty', 'Blood','Abyssal','Plague','Void','Sullen','Ivory','Beast','Bull',
			 'Mindless','Questing','Armored','Little','Greater','Elder','Newborn',
			 'Starving','Gurgling','Reaching','Diving','Beckoning','Soulless',
			 'Soul','Greedy','Cursed','Pale','Coughing','Profane','False','Crunching',
			 'Devil','Quaking','Comical','Unforgiving','Godly','Merry','Dwarf','Elf','Human',
			 'Goblin','Choking','Unsurly','Bushido','Warpath','Blightooze','Swimming',
			 'Fertile','Snow','Alpha','Omega','Wash','Wight','Repulsive','Channeling','Squirming',
			 'Chattering','Howling','Mad','Dreaming','Salty','Prolific','Moon','Shelled','Chanting',
			 'Seducing','Bloodthirsty','Imprisoned','Yearning','Emerging','Aspiring','Mourning','Loyal',
			 'Pitiful','Cherubic','Secretive','Thunder','Polar','Crying','Gravel','Toothy',
			 'Bile','Vomit','Tribal','Horned','Electronic','Winged','Nubile','Encrusted',
			 'Bejeweled','Honest','Robber'
	
			 ]

let team6 = ['King','Queen','Prince','Demon','Duke','Worm','Princess','Thief','Smith','Vampire',
			 'Butcher','Slayer','Eater','Gardener','Slave','Child','Wretch','Judge','Lich','Heathen',
			 'Warrior','Flinger','Mystic','Lictor','Sorceror','Mother','Father','Ancient',
			 'Champion','Fox','Cannibal','Spawn','Choker','Angel','Barbarian','Serpent',
			 'Rat','Drinker','Leech','Weasel','Nibbler','Bard','Begger','Slime','Fool','Reaper',
			 'Vision','Shocker','Strike','Pyre','Gulper','Cutie','Bane','Gum','Chicken',
			 'Potentate','Sultan','Khan','Yeoman','Elemental','Glutton','Savior','Chaos',
			 'Mutant','Ninja','Dragon','Scholar','Wonderland','Lunatic','Multiplier','Gamemaster',
			 'Nymph','Lassie','Climber','Berserker','Thrall','Gravekeeper','Consort','Doll',
			 'Edge','Clown','Piston','Mane','Arc','Kami','Giant','Goliath','Bug','Hussar',
			 'Raja','Key','Kitten','Sloar','Esquire','Keeper'
			 ]	

let team7 = ['Hell','the Throne','Souls','Pain','Love','Darkness','Ooze','Fear','the Swamp',
			 'Funk', 'Nations','Fingernails','the Secret','Elysium','the Cult','Magic',
			 'the Fold','the Legion','the Light','Rebirth','the Reach','the Tower',
			 'the Inbetween','Blades','the Trees','the East','the West','the South',
			 'the North','the Pale','the Wish','the Sands','El','the Mirror','Harmony',
			 'Hades','Haproons','the First Sin','the Oriant','the Monastery','the Craft',
			 'the Winds','Many Colors','White Robes','the Trove','the Horde'
			 ]
let team8 = ['5','6','7','40','41','42','43','70','90','105','109','158','196',
		     '222'
			 ]	

let team9 = ['Once upon a time, a great evil fell upon Elysium.',
			 'Do you not know? The mother is coming to Elysium.',
			 'People tell of a little lost child who drifted upon the shores of Elysium. However, according to the prophecy all was not as it seems.',			 
			 'On a cold winter night, a single star fell from the ink black sky. From the crater arose a strange sight, indeed.',
			 'The kingdom once knew of a wretch so poor, the neglected creature dwelt in the darkest gutters of the slums, waiting for death from starvation. However, when a strange force merged with the wretch from the forgotten burrows beneath the city, the lost soul was given strange powers.',
			 'Long ago, a once beautiful diety descended to Elysium to be with its true love. Yet, when its lover beheld its mishapen new mortal form, they were driven to suicide in despair. The now mortal monster decided to vent its frustration upon all those it happened upon.',
			 'To overthrow the heathens of Elysium, the high holiest church of El have birthed a strange creature from the womb of a comly desert jackal.',			 
			 'Unbeknownst to the mortal of the Elysium plane, the forces of the Nexus held a great contest to determine a warrior who was worthy of universal aclaim. A powerful untamed creature won the contest through pure savagery alone, but managed to escape into the mortal world to test its might upon Elysium',	
			 ]

let team10 = ['It was due to this force that the invading barbarians and squabbling nobles were driven away.',
			  'It hungered for the tasty viscera of mortals and surplanted every nation to sate the hunger.',
			  'Knowing the evil in the hearts of men, it charmed the world with its power to grant wishes.',
			  'Magic was channeled into its thirsting body, sucking the very life out of the world.',
			  'In bitter revolt against its betters, it freed the slaves and razed the palaces of the kings.',
			  'In the end, all it wanted was to be loved. So, in a quest to be loved by others, it enslaved millions of frightened souls.',
			  'Once respected and pious men fell to their knees and converted to a new heretical religion, uniting in a great crusade against the orthodoxy.',
			  'It knew that it was destined to die in battle and sought to find the most challeging opponent among the legions of mortal men.',
			  ]
let team11 = ['Later, it would be crowned king of the land, obtaining power only to be dreamed of.',
			  'Knights from far and wide would seek it out, looking for honor in the epic struggle.',
			  'The inquisitors were called from the alerted clergy to exorcise the monster, but all that was found was the burnt remains of their bodies.',
			  'Having gained sentience after some time, it aspired to rule the universe and wished to start with the world of men.',			  
			  'Impressed, the infernal forces of abyss made a pact with their potential new ally, hoping to win a new minion to help in their conquest of the mortal world.',
			  'Still not satisfied with what was acquired, it hungered evermore for the sweet taste it craved.',
			  'In the end, the monster ended up succumbing to a deadly plague that rotted its very soul. It still fought for life, desperatly holding on to its gains.',
			  'After a horrific massacre all sentient life in the mortal plane was extinquished in an orgy of blood.',
			  ]			 

let team12 = ['But, fate is not kind and the master fell from grace.',
			  'Only when it was time to seek a mate, did the world finally know peace.',
			  'Now, it is too late. Having grown too powerful, the world is at the mercy of the monster',
			  'Villagers spread rumors that it is still somewhere inside the darkest forests of Elysium, ready to burst out when we least expect it.',
			  'A blessed baby was soon born from the monster, cursing the land with a new prophecy of apocolypse. Who will prevail in the end?',
			  'In a desperate bid, the warring forces of Elysium has temporarly joined forces to deal with this threat, but against all odds, their alliance was dashed in a crushing defeat.',
			  'Overcome by fatigue, the monster decided to settle down for a long nap, sparing the world... for now.',
			  'The monster was eventually captured by an oriental warrior and taken away to a far eastern monastery. Instead of killing the beast, the warrior spared the monster and taught it a strange code of honor.',
			  ]
let team13 = ['icon "Randomclass/Randombanner.tga"' + '\n',
			  'icon "Randomclass/Randombanner_1.tga"' + '\n',
			  'icon "Randomclass/Randombanner_2.tga"' + '\n',
			  'icon "Randomclass/Randombanner_3.tga"' + '\n',
			  'icon "Randomclass/Randombanner_4.tga"' + '\n',			  
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
let unitnumber = 6
let comnumber = 10
let timeset = 0
let illapp = "'"
let descrroll
let dump
var id = setInterval(test, 300);
var allowshuffle = true;
function test(){

classnumber = parseInt(document.getElementById("classnumber").value, 10);
unitnumber = parseInt(document.getElementById("unitnumber").value, 10);
comnumber = parseInt(document.getElementById("comnumber").value, 10);	
setInterval(function test2(){document.getElementById('mainout').innerHTML = "Classes to be Generated: " + (classnumber)
})
setInterval(function test3(){document.getElementById('mainout2').innerHTML = "Total Classes in Game after Generation: " + (classnumber + 21)
})
}

function download(filename, text) {
dump = " "	
	filename = 'Randomclasses.c4m'
	text = ""
	text += randomItem(team13)
	text += 'description "The world has gone mad!"' + '\n'	
	text += '# All Done <3' + '\n \n'
allowshuffle = document.getElementById("allowshuffle").checked;	
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

text += 'newmonster "Python" \n'	
text += 'descr "Who knows what horrors dwell in the random chaos of Elysium?" \n'	
text += 'copystats "Troglodyte" \n'	
text += 'hp 150\n'
text += 'mr 8 \n'
text += 'str 8 \n'
text += 'mor 20 \n'
text += 'spr1 "Randomclass/2791_1.tga" \n'
text += 'spr2 "Randomclass/2791_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 25 42 \n'
text += 'clearspec \n'
text += 'water \n'
text += 'fastheal \n'
text += 'coldblood \n'
text += 'tunnel \n'
text += 'fear 1\n'
text += 'huge \n'
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
text += ' \n'

text += 'newmonster "Lizardman" \n'
text += 'name "Lizardman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 8 \n'
text += 'spr1 "Randomclass/0171_1.tga" \n'
text += 'spr2 "Randomclass/0171_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Trident" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'coldblood \n'
text += ' \n'

text += 'newmonster "Lizardman Warrior" \n'
text += 'name "Lizardman Warrior" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 9 \n'
text += 'armor 1 \n'
text += 'spr1 "Randomclass/0172_1.tga" \n'
text += 'spr2 "Randomclass/0172_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 1 "Trident" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'coldblood \n'
text += ' \n'

text += 'newmonster "Caveman" \n'
text += 'name "Caveman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 6 \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1615_1.tga" \n'
text += 'spr2 "Randomclass/1615_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Club" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Caveman Chief" \n'
text += 'name "Caveman Chief" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 7 \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1616_1.tga" \n'
text += 'spr2 "Randomclass/1616_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Club" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Voi Spearman" \n'
text += 'name "Voi Spearman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1929_1.tga" \n'
text += 'spr2 "Randomclass/1929_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Spear" \n'
text += 'rangedweapon 0 "Javelin" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Peshti Spearman" \n'
text += 'name "Peshti Spearman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'armor 1 \n'
text += 'spr1 "Randomclass/1928_1.tga" \n'
text += 'spr2 "Randomclass/1928_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 1 "Spear" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Voi Axeman" \n'
text += 'name "Voi Axeman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1930_1.tga" \n'
text += 'spr2 "Randomclass/1930_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Axe" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Voi Archer" \n'
text += 'name "Voi Archer" \n'
text += 'descr "" \n'
text += 'copystats "Archer" \n'
text += 'spr1 "Randomclass/1931_1.tga" \n'
text += 'spr2 "Randomclass/1931_2.tga" \n'
text += ' \n'

text += 'newmonster "Lizardman Shaman" \n'
text += 'name "Lizardman Shaman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 8 \n'
text += 'mr 6 \n'
text += 'spr1 "Randomclass/0170_1.tga" \n'
text += 'spr2 "Randomclass/0170_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Club" \n'
text += 'spellweapon 21 1 \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'coldblood \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Freak Lord" \n'
text += 'name "Freak Lord" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 15 \n'
text += 'mr 7 \n'
text += 'str 5 \n'
text += 'spr1 "Randomclass/0246_1.tga" \n'
text += 'spr2 "Randomclass/0246_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 4 "fist" \n'
text += 'meleeweapon 4 "fist" \n'
text += 'spellweapon 10 2 \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'fear 1 \n'
text += 'trample 1 \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Militia" \n'
text += 'name "Militia" \n'
text += 'descr "" \n'
text += 'copystats "Levy" \n'
text += 'copyspr "Levy" \n'
text += 'clearmove \n'
text += ' \n'

text += 'newmonster "Commander" \n'
text += 'name "Commander" \n'
text += 'descr "" \n'
text += 'copystats "Captain" \n'
text += 'spr1 "Randomclass/0034_1.tga" \n'
text += 'spr2 "Randomclass/0034_2.tga" \n'
text += 'shield \n'
text += ' \n'

text += 'newmonster "Heavy Spearman" \n'
text += 'name "Heavy Spearman" \n'
text += 'descr "" \n'
text += 'copystats "Heavy Infantry" \n'
text += 'spr1 "Randomclass/0038_1.tga" \n'
text += 'spr2 "Randomclass/0038_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 2 "Spear" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Light Cavalry" \n'
text += 'name "Light Cavalry" \n'
text += 'descr "" \n'
text += 'copystats "Barbarian Lancer" \n'
text += 'spr1 "Randomclass/0024_1.tga" \n'
text += 'spr2 "Randomclass/0024_2.tga" \n'
text += 'hp 8 \n'
text += 'armor 0 \n'
text += 'clearweapons \n'
text += 'meleeweapon 2 "Spear" \n'
text += 'rangedweapon 0 "Javelin" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Mounted Commander" \n'
text += 'name "Mounted Commander" \n'
text += 'descr "" \n'
text += 'copystats "Barbarian Lancer" \n'
text += 'spr1 "Randomclass/0046_1.tga" \n'
text += 'spr2 "Randomclass/0046_2.tga" \n'
text += 'hp 10 \n'
text += 'armor 1 \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Broadsword" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Heavy Cavalry" \n'
text += 'name "Heavy Cavalry" \n'
text += 'descr "" \n'
text += 'copystats "Barbarian Lancer" \n'
text += 'spr1 "Randomclass/0020_1.tga" \n'
text += 'spr2 "Randomclass/0020_2.tga" \n'
text += 'hp 10 \n'
text += 'armor 2 \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Priest" \n'
text += 'name "Priest" \n'
text += 'descr "" \n'
text += 'copystats "Bishop" \n'
text += 'spr1 "Randomclass/2276_1.tga" \n'
text += 'spr2 "Randomclass/2276_2.tga" \n'
text += 'hp 4 \n'
text += 'mr 5 \n'
text += ' \n'

text += 'newweapon "Soul Leech" \n'
text += 'clearwspec \n'
text += 'trgrank 1 \n'
text += 'range 7 \n'
text += 'dmgtype 7 \n'
text += 'dmg 0 \n'
text += 'aoe 1 \n'
text += 'sound 18 \n'
text += 'look 75 \n'
text += 'init 3 \n'
text += 'nostr \n'
text += 'an \n'
text += 'hardmr \n'
text += ' \n'

text += 'newmonster "Hidden Aboleth" \n'
text += 'name "Hidden Aboleth" \n'
text += 'descr "Aboleths are ancient beings sprung from the depths of the ocean. They resemble huge mud-crawling fish with tentacles and large, dark eyes covering their foreheads. As they grow in size, they shed the scales of their Giboleth form and become paler and softer. Aboleths have the ability to project their will on others and can dominate lesser beings with sheer strength of mind. Through their superior minds, the Aboleths have enslaved other water-dwelling races and built an underwater slave-based empire. The larger and older an Aboleth is, the more powerful his powers of domination." \n'
text += 'copystats "Ogre" \n'
text += 'hp 50 \n'
text += 'armor 1 \n'
text += 'mor 20 \n'
text += 'str 1 \n'
text += 'mr 8 \n'
text += 'spr1 "Randomclass/1520_1.tga" \n'
text += 'spr2 "Randomclass/1520_2.tga" \n'
text += 'clearweapons \n'
text += 'rangedweaponbonus 15 "Soul Leech" \n'
text += 'rangedweaponbonus 15 "Soul Leech" \n'
text += 'rangedweaponbonus 1 "Mind Blast" \n'
text += 'spellweapon 42 2 \n'
text += 'spellweapon 61 2 \n'
text += 'spellweapon 43 2 \n'
text += 'voidsanity 10 \n'
text += 'water \n'
text += 'slow \n'
text += 'saner 5 \n'
text += 'rank -1 \n'
text += 'miscslots \n'
text += 'nametype 17 \n'
text += ' \n'
	
	
i = 0
classnumber = 0	
unitnumber = 0
comnumber = 0	
classnumber = parseInt(document.getElementById("classnumber").value, 10);
unitnumber = parseInt(document.getElementById("unitnumber").value, 10);
comnumber = parseInt(document.getElementById("comnumber").value, 10);
if(classnumber <= 1){
classnumber = 1	
}	
while(i <= (classnumber -1)){
descrroll =	'descr "' + randomItem(team9) + ' ' + randomItem(team10) + ' ' + randomItem(team11) + ' ' + randomItem(team12) + '" \n'
	
x = 0
y = 0
z = 0
w = 0
v = 0

limit = (Math.floor(Math.random() * unitnumber)) + 1
limit2 = Math.floor(Math.random() * comnumber) + 1
if(limit <= 0){
limit = 4	
}
if(limit2 <= 0){
limit2 = 4	
}	
limit3 = Math.floor(Math.random() * 4)	
i++
shuffle = randomItem(team8)
shuffle2 = Math.floor(Math.random() * 16)

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
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

if(shuffle2 === 0){
text += 'power 1 1 \n'
text += 'power 2 1 \n'
text += 'sensedead 1 \n'	
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
text += 'power 23 1 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 13){
text += 'power 26 1 \n'	
text += 'gathergems \n'	
}
if(shuffle2 === 14){

text += 'gathergems \n'	
}
if(shuffle2 === 15){

text += 'gathergems \n'	
}
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
if(allowshuffle === true){
text += '#'
}
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_3)	
text += mymonster2store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

if(allowshuffle === true){
shuffle2 = Math.floor(Math.random() * 16)
}

if(shuffle2 === 0){
text += 'power 1 2 \n'
text += 'power 2 2 \n'
text += 'sensedead 1 \n'	
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
text += 'power 23 2 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 13){
text += 'power 26 2 \n'	
text += 'gathergems \n'	
}
if(shuffle2 === 14){

text += 'gathergems \n'	
}
if(shuffle2 === 15){

text += 'gathergems \n'	
}
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
if(allowshuffle === true){
text += '#'
}
text += 'mastery 2 \n'
text += ' \n'

leader = randomItem(team3)	
text += mymonster3store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

if(allowshuffle === true){
shuffle2 = Math.floor(Math.random() * 16)
}

if(shuffle2 === 0){
text += 'power 1 3 \n'
text += 'power 2 3 \n'
text += 'sensedead 1 \n'	
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
text += 'power 23 3 \n'	
text += 'gathersacr \n'	
}
if(shuffle2 === 13){
text += 'power 26 3 \n'	
text += 'gathergems \n'	
}
if(shuffle2 === 14){

text += 'gathergems \n'	
}
if(shuffle2 === 15){

text += 'gathergems \n'	
}

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'
if(allowshuffle === true){
text += '#'
}
text += 'mastery 3 \n'
text += ' \n'

text += 'newclass \n'
text += 'setclassname "'+ mymonster + '" \n'
text += 'class' + descrroll
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
if (shuffle2 === 13){	
text += 'addmercrec "Mirror" 100 1 10 0 0\n'
text += 'addmercrec "Large Mirror" 100 1 25 0 0\n'
text += 'addmercrec "Silver Mirror" 100 1 50 0 0\n'
text += 'addmercrec "Gold Mirror" 100 1 150 0 0\n'
}
if(shuffle2 === 15){
text += 'addcomrec "Warlock'+ illapp +'s Apprentice" 5 55 20 0 \n'
}

if(allowshuffle === true){
text += 'addcomrec "'+ mymonster +'" 5 70 30 0 \n'
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
if (shuffle2 === 14){	
text += 'addstartcom "Young Dvala"  \n'
}
if(shuffle2 === 15){
text += 'addstartcom "Warlock'+ illapp +'s Apprentice" \n'
}
text += 'hometerr ' + randomItem(team4) + '  \n'
coin = Math.floor(Math.random() * 4)
if(coin === 3){
text += 'addstartterr '+ randomItem(team8) + '\n'	
}	
text += ' \n'
}
dump += text
return dump
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
dump = " "	
filename = 'Randomclasses_Two.c4m'
text = ""
text += 'icon "Randomclass/Randombanner_a.tga"' + '\n'
text += 'description "The world has gone mad!"' + '\n'	
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

text += 'newmonster "Python" \n'	
text += 'descr "Who knows what horrors dwell in the random chaos of Elysium?" \n'	
text += 'copystats "Troglodyte" \n'	
text += 'hp 150\n'
text += 'mr 8 \n'
text += 'str 8 \n'
text += 'mor 20 \n'
text += 'spr1 "Randomclass/2791_1.tga" \n'
text += 'spr2 "Randomclass/2791_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 25 42 \n'
text += 'clearspec \n'
text += 'water \n'
text += 'fastheal \n'
text += 'coldblood \n'
text += 'tunnel \n'
text += 'fear 1\n'
text += 'huge \n'
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
text += ' \n'

text += 'newmonster "Lizardman" \n'
text += 'name "Lizardman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 8 \n'
text += 'spr1 "Randomclass/0171_1.tga" \n'
text += 'spr2 "Randomclass/0171_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Trident" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'coldblood \n'
text += ' \n'

text += 'newmonster "Lizardman Warrior" \n'
text += 'name "Lizardman Warrior" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 9 \n'
text += 'armor 1 \n'
text += 'spr1 "Randomclass/0172_1.tga" \n'
text += 'spr2 "Randomclass/0172_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 1 "Trident" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'coldblood \n'
text += ' \n'

text += 'newmonster "Caveman" \n'
text += 'name "Caveman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 6 \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1615_1.tga" \n'
text += 'spr2 "Randomclass/1615_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Club" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Caveman Chief" \n'
text += 'name "Caveman Chief" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 7 \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1616_1.tga" \n'
text += 'spr2 "Randomclass/1616_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Club" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Voi Spearman" \n'
text += 'name "Voi Spearman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1929_1.tga" \n'
text += 'spr2 "Randomclass/1929_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Spear" \n'
text += 'rangedweapon 0 "Javelin" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Peshti Spearman" \n'
text += 'name "Peshti Spearman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'armor 1 \n'
text += 'spr1 "Randomclass/1928_1.tga" \n'
text += 'spr2 "Randomclass/1928_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 1 "Spear" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Voi Axeman" \n'
text += 'name "Voi Axeman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'armor 0 \n'
text += 'spr1 "Randomclass/1930_1.tga" \n'
text += 'spr2 "Randomclass/1930_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Axe" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Voi Archer" \n'
text += 'name "Voi Archer" \n'
text += 'descr "" \n'
text += 'copystats "Archer" \n'
text += 'spr1 "Randomclass/1931_1.tga" \n'
text += 'spr2 "Randomclass/1931_2.tga" \n'
text += ' \n'

text += 'newmonster "Lizardman Shaman" \n'
text += 'name "Lizardman Shaman" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 8 \n'
text += 'mr 6 \n'
text += 'spr1 "Randomclass/0170_1.tga" \n'
text += 'spr2 "Randomclass/0170_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Club" \n'
text += 'spellweapon 21 1 \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'coldblood \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Freak Lord" \n'
text += 'name "Freak Lord" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'hp 15 \n'
text += 'mr 7 \n'
text += 'str 5 \n'
text += 'spr1 "Randomclass/0246_1.tga" \n'
text += 'spr2 "Randomclass/0246_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 4 "fist" \n'
text += 'meleeweapon 4 "fist" \n'
text += 'spellweapon 10 2 \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'fear 1 \n'
text += 'trample 1 \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Militia" \n'
text += 'name "Militia" \n'
text += 'descr "" \n'
text += 'copystats "Levy" \n'
text += 'copyspr "Levy" \n'
text += 'clearmove \n'
text += ' \n'

text += 'newmonster "Commander" \n'
text += 'name "Commander" \n'
text += 'descr "" \n'
text += 'copystats "Captain" \n'
text += 'spr1 "Randomclass/0034_1.tga" \n'
text += 'spr2 "Randomclass/0034_2.tga" \n'
text += 'shield \n'
text += ' \n'

text += 'newmonster "Heavy Spearman" \n'
text += 'name "Heavy Spearman" \n'
text += 'descr "" \n'
text += 'copystats "Heavy Infantry" \n'
text += 'spr1 "Randomclass/0038_1.tga" \n'
text += 'spr2 "Randomclass/0038_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 2 "Spear" \n'
text += 'clearspec \n'
text += 'shield \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Light Cavalry" \n'
text += 'name "Light Cavalry" \n'
text += 'descr "" \n'
text += 'copystats "Barbarian Lancer" \n'
text += 'spr1 "Randomclass/0024_1.tga" \n'
text += 'spr2 "Randomclass/0024_2.tga" \n'
text += 'hp 8 \n'
text += 'armor 0 \n'
text += 'clearweapons \n'
text += 'meleeweapon 2 "Spear" \n'
text += 'rangedweapon 0 "Javelin" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Mounted Commander" \n'
text += 'name "Mounted Commander" \n'
text += 'descr "" \n'
text += 'copystats "Barbarian Lancer" \n'
text += 'spr1 "Randomclass/0046_1.tga" \n'
text += 'spr2 "Randomclass/0046_2.tga" \n'
text += 'hp 10 \n'
text += 'armor 1 \n'
text += 'clearweapons \n'
text += 'meleeweapon 0 "Broadsword" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Heavy Cavalry" \n'
text += 'name "Heavy Cavalry" \n'
text += 'descr "" \n'
text += 'copystats "Barbarian Lancer" \n'
text += 'spr1 "Randomclass/0020_1.tga" \n'
text += 'spr2 "Randomclass/0020_2.tga" \n'
text += 'hp 10 \n'
text += 'armor 2 \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += ' \n'

text += 'newmonster "Priest" \n'
text += 'name "Priest" \n'
text += 'descr "" \n'
text += 'copystats "Bishop" \n'
text += 'spr1 "Randomclass/2276_1.tga" \n'
text += 'spr2 "Randomclass/2276_2.tga" \n'
text += 'hp 4 \n'
text += 'mr 5 \n'
text += ' \n'

text += 'newweapon "Soul Leech" \n'
text += 'clearwspec \n'
text += 'trgrank 1 \n'
text += 'range 7 \n'
text += 'dmgtype 7 \n'
text += 'dmg 0 \n'
text += 'aoe 1 \n'
text += 'sound 18 \n'
text += 'look 75 \n'
text += 'init 3 \n'
text += 'nostr \n'
text += 'an \n'
text += 'hardmr \n'
text += ' \n'

text += 'newmonster "Hidden Aboleth" \n'
text += 'name "Hidden Aboleth" \n'
text += 'descr "Aboleths are ancient beings sprung from the depths of the ocean. They resemble huge mud-crawling fish with tentacles and large, dark eyes covering their foreheads. As they grow in size, they shed the scales of their Giboleth form and become paler and softer. Aboleths have the ability to project their will on others and can dominate lesser beings with sheer strength of mind. Through their superior minds, the Aboleths have enslaved other water-dwelling races and built an underwater slave-based empire. The larger and older an Aboleth is, the more powerful his powers of domination." \n'
text += 'copystats "Ogre" \n'
text += 'hp 50 \n'
text += 'armor 1 \n'
text += 'mor 20 \n'
text += 'str 1 \n'
text += 'mr 8 \n'
text += 'spr1 "Randomclass/1520_1.tga" \n'
text += 'spr2 "Randomclass/1520_2.tga" \n'
text += 'clearweapons \n'
text += 'rangedweaponbonus 15 "Soul Leech" \n'
text += 'rangedweaponbonus 15 "Soul Leech" \n'
text += 'rangedweaponbonus 1 "Mind Blast" \n'
text += 'spellweapon 42 2 \n'
text += 'spellweapon 61 2 \n'
text += 'spellweapon 43 2 \n'
text += 'voidsanity 10 \n'
text += 'water \n'
text += 'slow \n'
text += 'saner 5 \n'
text += 'rank -1 \n'
text += 'miscslots \n'
text += 'nametype 17 \n'
text += ' \n'
descrroll =	'descr "' + randomItem(team9) + ' ' + randomItem(team10) + ' ' + randomItem(team11) + ' ' + randomItem(team12) + '" \n'
x = 0
y = 0
z = 0
w = 0
v = 0
unitnumber = parseInt(document.getElementById("unitnumber").value, 10);
comnumber = parseInt(document.getElementById("comnumber").value, 10);

limit = (Math.floor(Math.random() * unitnumber)) + 1
limit2 = Math.floor(Math.random() * comnumber) + 1
limit3 = Math.floor(Math.random() * 4)
if(limit <= 0){
limit = 4	
}
if(limit2 <= 0){
limit2 = 4	
}		
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
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 6 1 \n'		

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_3)	
text += mymonster2store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 6 2 \n'
	
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
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 6 3 \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'
text += 'mastery 3 \n'
text += ' \n'

text += 'selectclass 1 \n'
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
text += 'addcomrec "'+ mymonster2 +'" 100 150 0 0 \n'
text += 'reclimiter  "='+ mymonster +'" \n'
text += 'addcomrec "'+ mymonster3 +'" 100 400 0 0 \n'
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
text += 'hometerr 30 \n'
coin = Math.floor(Math.random() * 4)
text += 'clearstartterr \n'
text += 'addstartterr '+ randomItem(team8) + '\n'	
text += ' \n'		
descrroll =	'descr "' + randomItem(team9) + ' ' + randomItem(team10) + ' ' + randomItem(team11) + ' ' + randomItem(team12) + '" \n'	
x = 0
y = 0
z = 0
w = 0
v = 0

limit = (Math.floor(Math.random() * unitnumber)) + 1
limit2 = Math.floor(Math.random() * comnumber) + 1
limit3 = Math.floor(Math.random() * 4)
if(limit <= 0){
limit = 4	
}
if(limit2 <= 0){
limit2 = 4	
}	
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
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 25 1 \n'	
text += 'gatherrelics \n'	

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_3)	
text += mymonster2store	
text += descrroll
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
text += descrroll
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
descrroll =	'descr "' + randomItem(team9) + ' ' + randomItem(team10) + ' ' + randomItem(team11) + ' ' + randomItem(team12) + '" \n'

x = 0
y = 0
z = 0
w = 0
v = 0

limit = (Math.floor(Math.random() * unitnumber)) + 1
limit2 = Math.floor(Math.random() * comnumber) + 1
limit3 = Math.floor(Math.random() * 4)
if(limit <= 0){
limit = 4	
}
if(limit2 <= 0){
limit2 = 4	
}		
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
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

text += 'power 22 1 \n'	
text += 'gatherfungus \n'	

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_3)	
text += mymonster2store	
text += descrroll
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
text += descrroll
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
dump += text
return dump
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}	
	
// Start file download.
 


	 
