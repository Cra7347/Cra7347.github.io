		 
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
			 
let team4 = ['3','9','20','22','23','24','25','26','28','29','30','31',
			 '38','57','106','113','110','112','114','121','124','151','152','154',
			 '156','160','210','213','216','219','223'
			 ]	

let team5 = ['Dastardly','Unbeatable', 'Fiery', 'Frightening','Old','Oozing',"Relic",
			 'Aging','Burning','Cuddly','Plump','Dying','Lovely','Golden','Crystal',
			 'Mighty', 'Blood','Abyssal','Plague','Void','Sullen','Ivory','Beast','Bull',
			 'Mindless','Questing','Armored','Little','Greater','Elder','Newborn',
			 'Starving','Gurgling','Reaching','Diving','Beckoning','Soulless',"Eraser","Ruby","Emerald","Saphire",
			 'Soul','Greedy','Cursed','Pale','Coughing','Profane','False','Crunching',
			 'Devil','Quaking','Comical','Unforgiving','Godly','Merry','Dwarf','Elf','Human',
			 'Goblin','Choking','Unsurly','Bushido','Warpath','Blightooze','Swimming',
			 'Fertile','Snow','Alpha','Omega','Wash','Wight','Repulsive','Channeling','Squirming',
			 'Chattering','Howling','Mad','Dreaming','Salty','Prolific','Moon','Shelled','Chanting',
			 'Seducing','Bloodthirsty','Imprisoned','Yearning','Emerging','Aspiring','Mourning','Loyal',
			 'Pitiful','Cherubic','Secretive','Thunder','Polar','Crying','Gravel','Toothy',
			 'Bile','Vomit','Tribal','Horned','Electronic','Winged','Nubile','Encrusted',
			 'Bejeweled','Honest','Robber','Amoeba','Disgusting','Yearly',"Mystic","Goetic",
			 "Ironside","Red","Blue","Yellow","Unthawed","Mute","Deaf","Blind","Vorpal",
			 "Green","Pink","Purple","Orange","Grey","Black","White","Silver","Gold",
			 "Trove","Witch","Feel","Crusader","Honey","Hugging","Dungeon","Boss","Wishing",
			 "Tortured","Disemboweled","Grotesque","Scattering","Milky","Molted","Bearded",
	         "Baptized"
	
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
			 'Raja','Key','Kitten','Sloar','Esquire','Keeper','Enigma','Glutton','Autocrat',
			 "Genius","Genie","Jinn","Prophet","Wanderer","Sophist","Pymander","Fetus",
			 "Larvae","Gorgon","Medusa","Malefactor","Blackguard","Brute","Thug","Coveter",
			 "Son","Daughter","Boot","Phantom","Senator","Shaper","Enchanter","Meanie","King",
			 "Diadochi","Czar","Kaiser","Tiger","Meister","Chimera","Doctor","Roach","Pest",
			 "Emir","Vizier","Pharaoh","Pontiff","Disciple","Parent","Head","Extortioner",
			 "Executioner","Bey","Hetman","Beg","Chanyu","Defenestrator","Hierophant","Spook",
			 "Maimer","Fey","Artist","Painter","Punk","Judicator","Bailiff","Accuser","Turncoat"
	
			 ]	

let team7 = ['Hell','the Throne','Souls','Pain','Love','Darkness','Ooze','Fear','the Swamp',
			 'Funk', 'Nations','Fingernails','the Secret','Elysium','the Cult','Magic',
			 'the Fold','the Legion','the Light','Rebirth','the Reach','the Tower',
			 'the Inbetween','Blades','the Trees','the East','the West','the South',
			 'the North','the Pale','the Wish','the Sands','El','the Mirror','Harmony',
			 'Hades','Harpoons','the First Sin','the Orient','the Monastery','the Craft',
			 'the Winds','Many Colors','White Robes','the Trove','the Horde','Hate',
			 "the Lamp","Ulm","C'tis","Fomoria","R'lyeh","Ermor","Sin","The Storm",
			 "Revelations","the Mount","the Peak","Alanjeh","Kendaria","Londor","Drangleic",
			 "Tristram"
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
			 'Unbeknownst to the mortal of the Elysium plane, the forces of the Nexus held a great contest to determine a warrior who was worthy of universal aclaim. A powerful untamed creature won the contest through pure savagery alone, but managed to escape into the mortal world to test its might upon Elysium.',	
			 'Once upon a time, a small boy found a strange egg in the woods and took it home with him to show to his family. Little did the family know a strange thing emerged at night and crawled into the forests of Elysium and grew in the dark solitude.',
			 'In the darkest woods of Elysium, a poor peasant gave birth to a squirming monstrosity. Overcome by pity, she tried desperatly to hide the creature from the outside world, but was eventually tempted to sell her progeny to a travelling circus for a moderate sum of gold. Later the monster escaped in the heart of the night, driven by a lust to see the outside world.',		
			 'Legends tell of a small town overrun by demonic forces. It seems that a wandering mage had delved too far into a forbidden ritual and had released a terrible evil into the lowest floors of a bottomless dungeon. Against all odds, a noble paladin fought his way to the bottom of the cursed dungeon and attempted to destroy the monster once and for all. But, in a cruel turn of fate, he was defeated and possessed by the very evil he sought to destroy, allowing the ancient evil to wander into Elysium.',
			 ]

let team10 = ['It was due to this force that the invading barbarians and squabbling nobles were driven away.',
			  'It hungered for the tasty viscera of mortals and surplanted every nation to sate the hunger.',
			  'Knowing the evil in the hearts of men, it charmed the world with its power to grant wishes.',
			  'Magic was channeled into its thirsting body, sucking the very life out of the world.',
			  'In bitter revolt against its betters, it freed the slaves and razed the palaces of the kings.',
			  'In the end, all it wanted was to be loved. So, in a quest to be loved by others, it enslaved millions of frightened souls.',
			  'In honor of this strange sight, once respected and pious men fell to their knees and converted to a new heretical religion, uniting in a great crusade against the orthodoxy.',
			  'It knew that it was destined to die in battle and sought to find the most challeging opponent among the legions of mortal men.',
			  'When several villages and hamlets were found burnt to cinders and their occupents slain, the local authorities realized something was wrong.',
			  ]
let team11 = ['Later, it would be crowned king of the land, obtaining power only to be dreamed of.',
			  'Knights from far and wide would seek it out, looking for honor in the epic struggle.',
			  'The inquisitors were called from the alerted clergy to exorcise the monster, but all that was found was the burnt remains of their bodies.',
			  'Having gained sentience after some time, it aspired to rule the universe and wished to start with the world of men.',			  
			  'Impressed, the infernal forces of abyss made a pact with their potential new ally, hoping to win a new minion to help in their conquest of the mortal world.',
			  'Still not satisfied with what was acquired, it hungered evermore for the sweet taste it craved.',
			  'In the end, the monster ended up succumbing to a deadly plague that rotted its very soul. It still fought for life, desperatly holding on to its gains.',
			  'After a horrific massacre all sentient life in the mortal plane was extinquished in an orgy of blood.',
			  'Mercenaries and bounty hunters combed the woods and hills for the foul beast, hoping to collect a lucrative reward for their efforts.',
			  ]			 

let team12 = ['But, fate is not kind and the master fell from grace.',
			  'To grow even more powerful, the monster made a deal with the seven demon lords. The beast was infused with unholy magic and fattened with the nectar of a thousand sinners, but at the cost its immortal soul. The monster now strives to enslave all of Elysium for the infernal powers, lest it fails and dooms itself to an eternity of torment.',
			  'Only when it was time to seek a mate, did the world finally know peace.',
			  'Now, it is too late. Having grown too powerful, the world is at the mercy of the monster.',
			  'Villagers spread rumors that it is still somewhere inside the darkest forests of Elysium, ready to burst out when we least expect it.',
			  'A blessed baby was soon born from the monster, cursing the land with a new prophecy of apocolypse. Who will prevail in the end?',
			  'In a desperate bid, the warring forces of Elysium temporarly joined forces to deal with this threat, but against all odds, their alliance was dashed in a crushing defeat.',
			  'Overcome by fatigue, the monster decided to settle down for a long nap, sparing the world... for now.',
			  'The monster was eventually captured by an oriental warrior and taken away to a far eastern monastery. Instead of killing the beast, the warrior spared the monster and taught it a strange code of honor.',
			  'To the surprise of many, the monster was overthrown by a mysterious young boy who was barely out of diapers. With a mere sling as a weapon, he brought low the threat and later was made emperor of Elysium after the army staged a coup in his honor. Still, the monster was not completely gone and waited for its chance to arise again for revenge.',			  
			  'To the horror of many, to finalize its reign of terror, the monster produced a strange melody that enraptured the children of Elysium. In a disturbing procession, it merrily led the children into the sea where they drowned. The monster disappeared for decades soon after, but peasants spread rumors of its inevitable return.',	
			  "To finalize its reign of terror, the monster sought to free its long imprisoned sibling from an ancient prison. Travelling east to secure its goal, all of Elysium lies in its warpath.",
			  "When a stranger offered to stop the monster for an extortionate fee, the nobles of Elysium had no choice but agree, as they had already burned through all other options. Oddly enough, the stranger traped the monster in a strange playing card and succeeded in saving the land, But, when it came time to collect his fee, the nobles, realized they were bankrupted by the crisis and refused to pay him. In revenge, he released the monster from its card to terrorize the land once again, only this time, he was the master."
			  ]
let team13 = ['icon "Randomclass/Randombanner.tga"' + '\n',
			  'icon "Randomclass/Randombanner_1.tga"' + '\n',
			  'icon "Randomclass/Randombanner_2.tga"' + '\n',
			  'icon "Randomclass/Randombanner_3.tga"' + '\n',
			  'icon "Randomclass/Randombanner_4.tga"' + '\n',			  
			  ]	
			  
let team1_melee_empty = [
	{name: "Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Swordsman", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Heavy Infantry", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Bandit", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Halberdier", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Pikeneer", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "War Dog", num: 4, gold: 25, iron: 0, chance: 100},	
	{name: "Zweihander", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Militia", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Heavy Spearman", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Light Cavalry", num: 4, gold: 50, iron: 0, chance: 100},
	{name: "Heavy Cavalry", num: 4, gold: 50, iron: 20, chance: 100},
	{name: "Lion Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hyena Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "War Elephant", num: 1, gold: 65, iron: 0, chance: 10},		
	{name: "Wolf Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
]
let team1_ranged_empty = [
	{name: "Crossbowman", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Slinger", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Tower Guard", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Archer", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Scout", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Catapult", num: 1, gold: 25, iron: 50, chance: 100},	
	{name: "Trebuchet", num: 1, gold: 50, iron: 50, chance: 100},
	{name: "Ballista", num: 2, gold: 25, iron: 50, chance: 100},	
]	
let team2_empty = [
	{name: "Captain", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Commander", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Mounted Commander", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Priest", gold: 50, iron: 0, chance: 5, goldplus: 10},
	{name: "Alchemist", gold: 40, iron: 0, chance: 10, goldplus: 5},
	{name: "Court Mage", gold: 40, iron: 0, chance: 10, goldplus: 5},
	{name: "High Lord", gold: 50, iron: 0, chance: 10, goldplus: 5},
	{name: "Monk", gold: 40, iron: 0, chance: 10, goldplus: 5},	
]
let team3_empty = [
	"Old Wizard","White Wizard","Dark Wizard","Golden Wizard","King"	
]
let team3_2_empty = [
	"Animist","Astrologer","Pyromancer","Sea Father","Ice Druid","War Elephant"
]
let team3_3_empty = [
	"Spearman","Captain","Priest","Mounted Commander","Commander","Hedge Wizard","Monk","Court Mage",
	"Knight","Scout","Alchemist","Princess","Assassin","Lion King"
]
//Animals
let team1_melee_animal = [
	{name: "Bear", num: 3, gold: 50, iron: 0, chance: 100},
	{name: "Boar", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Camel", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Deer", num: 15, gold: 50, iron: 0, chance: 100},
	{name: "Dog", num: 8, gold: 50, iron: 0, chance: 100},
	{name: "Donkey", num: 8, gold: 50, iron: 0, chance: 100},
	{name: "Giant Mantis", num: 3, gold: 50, iron: 0, chance: 100},		
	{name: "Giant Moose", num: 1, gold: 90, iron: 0, chance: 15},
	{name: "Giant Rat", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Horse", num: 4, gold: 50, iron: 0, chance: 100},	
	{name: "Goat", num: 15, gold: 50, iron: 0, chance: 100},
	{name: "Great Boar", num: 3, gold: 50, iron: 0, chance: 100},
	{name: "Rabbit", num: 20, gold: 50, iron: 0, chance: 100},	
	{name: "Rat", num: 20, gold: 50, iron: 0, chance: 100},
	{name: "Snake", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Serpent", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Wolf", num: 6, gold: 50, iron: 0, chance: 100},
	{name: "Winter Wolf", num: 3, gold: 50, iron: 0, chance: 100},	
	{name: "Black Cat Familiar", num: 25, gold: 50, iron: 0, chance: 100},	
	{name: "Crocodile", num: 1, gold: 20, iron: 0, chance: 100},	
	{name: "Frog", num: 25, gold: 50, iron: 0, chance: 100},	
	{name: "Large Spider", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Scorpion", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Small Spider", num: 10, gold: 50, iron: 0, chance: 100},	
]
let team1_ranged_animal = [
	{name: "Giant Ant", num: 3, gold: 50, iron: 0, chance: 100},
	{name: "Fire Ant", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Giant Toad", num: 1, gold: 40, iron: 0, chance: 100},	
]
let team2_animal = [
	{name: "Amphiptere", gold: 70, iron: 0, chance: 3, goldplus: 80},
	{name: "Wyvern", gold: 50, iron: 0, chance: 3, goldplus: 70},
	{name: "Giant Snail", gold: 30, iron: 0, chance: 10, goldplus: 10},			
]
let team3_animal = ["Giant Moose",
					"Monster Boar"	
]
let team3_2_animal = [		 
			 "Scorpion Beast","Wyvern",
			 "Monster Toad","Leogryph",
			 "Winter Wolf",		
]
let team3_3_animal = ["Wolf","Rabbit","Deer","Moose","Great Boar",
			 "Black Cat Familiar","Serpent","Large Spider","Elephant",
			 "Giant Snail","Rat","Giant Rat","Tiger","Lion","Monkey",
			 "Rabbit","Beast Bat","Ape","Snake",'Dog',"Goat"		
]

//Druid
let team1_melee_druid = [
	{name: "Barechested Swordsman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barechested Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Beast Cavalry", num: 3, gold: 50, iron: 5, chance: 100},	
	{name: "Boar Warrior", num: 4, gold: 50, iron: 10, chance: 100},
	{name: "Barechested Slinger", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barechested Swordsman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barechested Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Beast Cavalry", num: 3, gold: 50, iron: 5, chance: 100},	
	{name: "Boar Warrior", num: 4, gold: 50, iron: 10, chance: 100},
	{name: "Man Trap", num: 4, gold: 50, iron: 0, chance: 100},	
]
let team1_ranged_druid = [
	{name: "Barechested Slinger", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Hornblower", num: 1, gold: 30, iron: 0, chance: 100},
	{name: "Barechested Slinger", num: 5, gold: 50, iron: 0, chance: 100},	
]
let team2_druid = [
	{name: "Vergobret", gold: 30, iron: 0, chance: 5, goldplus: 10},
	{name: "Chieftain", gold: 40, iron: 0, chance: 5, goldplus: 10},
	{name: "Hornblower", gold: 25, iron: 0, chance: 3, goldplus: 10},	
]
let team3_druid = ['Eye Tyrant',"Beholder",
]
let team3_2_druid = [		 
			 "Chieftain","Vergobret",	
]
let team3_3_druid = ["Chieftain","Vergobret","Hornblower","Man Trap"		
]

//Troll
let team1_melee_troll = [
	{name: "Ettin", num: 1, gold: 75, iron: 0, chance: 10},
	{name: "Forest Troll", num: 1, gold: 40, iron: 10, chance: 10},	
	{name: "Goblin", num: 15, gold: 50, iron: 0, chance: 100},	
	{name: "Goblin Spearman", num: 15, gold: 50, iron: 0, chance: 100},	
	{name: "Ogre", num: 1, gold: 25, iron: 0, chance: 100},	
	{name: "Troll", num: 1, gold: 50, iron: 20, chance: 10},
	{name: "Wolf Kin", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Wolf Kin Reaver", num: 7, gold: 50, iron: 10, chance: 100},
	{name: "Rock Troll", num: 1, gold: 50, iron: 60, chance: 10},
]
let team1_ranged_troll = [
	{name: "Goblin Archer", num: 10, gold: 50, iron: 0, chance: 100},
	{name: "Hill Giant", num: 1, gold: 110, iron: 0, chance: 5},
	{name: "Forest Giant", num: 1, gold: 80, iron: 0, chance: 5},
]
let team2_troll = [
	{name: "Goblin Chieftain", gold: 25, iron: 0, chance: 5, goldplus: 20},
	{name: "Goblin Hero", gold: 10, iron: 0, chance: 5, goldplus: 50},
	{name: "Goblin Murderer", gold: 10, iron: 0, chance: 5, goldplus: 40},		
	{name: "Ogre Chief", gold: 35, iron: 0, chance: 5, goldplus: 20},
]
let team3_troll = ["Hill Giant","Dragon"
]
let team3_2_troll = ["Forest Giant","Rock Troll","Troll King","Ettin"	
]
let team3_3_troll = ["Ettin","Forest Troll","Troll","Goblin Chieftain","Goblin",
				     "Goblin Hero","Ogre Chieftain","Goblin Murderer"		
]

//El
let team1_melee_el = [
	{name: "Flagellant", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Templar", num: 3, gold: 50, iron: 25, chance: 100},
	{name: "Temple Guard", num: 5, gold: 50, iron: 5, chance: 100},
]	
let team2_el = [
	{name: "Preacher", gold: 20, iron: 0, chance: 5, goldplus: 20},
	{name: "Missionary", gold: 20, iron: 0, chance: 5, goldplus: 20},
	{name: "Angel Captain", gold: 60, iron: 0, chance: 5, goldplus: 20},		
	{name: "Inquisitor Leader", gold: 50, iron: 0, chance: 5, goldplus: 10},
	{name: "High Inquisitor Leader", gold: 80, iron: 0, chance: 5, goldplus: 10},
]
let team3_el = [
]
let team3_2_el = ["High Inquisitor Leader","Angel Captain"
]
let team3_3_el = ["Preacher","Missionary","Inquisitor Leader"	
]

//Bakemono
let team1_melee_bakemono = [
	{name: "Bakemono Soldier", num: 5, gold: 25, iron: 1, chance: 100},
	{name: "Bakemono Swordsman", num: 5, gold: 25, iron: 3, chance: 100},
	{name: "O Bakemono", num: 1, gold: 25, iron: 0, chance: 100},
	{name: "Dai Bakemono", num: 3, gold: 50, iron: 15, chance: 100},
	{name: "Aka Oni", num: 3, gold: 60, iron: 0, chance: 10},
	{name: "Ao Oni", num: 3, gold: 60, iron: 0, chance: 10},
	{name: "Kappa", num: 4, gold: 50, iron: 25, chance: 100},
	{name: "Karasu Tengu", num: 2, gold: 50, iron: 10, chance: 100},
	{name: "Mezu", num: 1, gold: 50, iron: 5, chance: 10},
]
let team1_ranged_bakemono = [
	{name: "Bakemono Archer", num: 5, gold: 25, iron: 1, chance: 100},
	{name: "Bakemono Bowman", num: 5, gold: 25, iron: 0, chance: 100},	
	{name: "Dai Bakemono Archer", num: 3, gold: 50, iron: 15, chance: 100},
	
]
let team2_bakemono = [
	{name: "Kitsune", gold: 60, iron: 0, chance: 5, goldplus: 40},
	{name: "Bakemono General", gold: 60, iron: 0, chance: 10, goldplus: 10},
]
let team3_bakemono = ["Dai Tengu"
]
let team3_2_bakemono = [		 
			 "Mezu","Kuro Oni","Mujina","Hannya"	
]
let team3_3_bakemono = ["Konoha Tengu","Kappa","Bakemono Sho","Bakemono Bowman",
					 "O Bakemono","Dai Bakemono"		
]

//Barbarian
let team1_melee_barbarian = [
	{name: "Barbarian Lancer", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Barbarian Swordsman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barbarian Lancer", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barbarian Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Crystal Amazon", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Garnet Amazon", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Jade Amazon", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Onyx Amazon", num: 5, gold: 50, iron: 0, chance: 100},
]
let team1_ranged_barbarian = [
	{name: "Barbarian Bowman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Barbarian Cavalry", num: 5, gold: 50, iron: 0, chance: 100},
		
]
let team2_barbarian = [
	{name: "Mounted Chief", gold: 40, iron: 0, chance: 10, goldplus: 10},	
	{name: "Soothsayer", gold: 40, iron: 0, chance: 5, goldplus: 20},
	{name: "Mounted Commander", gold: 40, iron: 0, chance: 10, goldplus: 10},

]
let team3_barbarian = [
]
let team3_2_barbarian = [		 

]
let team3_3_barbarian = ["Soothsayer","Mounted Chief", "Barbarian Leader"		
]
//Hoburg
let team1_melee_hoburg = [
	{name: "Burgmeister Guard", num: 10, gold: 40, iron: 10, chance: 100},
	{name: "Hoburg Defender", num: 15, gold: 50, iron: 10, chance: 100},
	{name: "Hoburg Militia", num: 15, gold: 50, iron: 0, chance: 100},
	{name: "Hoburg Pikeneer", num: 10, gold: 30, iron: 5, chance: 100},
	{name: "Hoburg Soldier", num: 15, gold: 50, iron: 5, chance: 100},
	{name: "Hog Knight", num: 5, gold: 50, iron: 10, chance: 100},
]
let team1_ranged_hoburg = [
	{name: "Hoburg Crossbow", num: 15, gold: 50, iron: 5, chance: 100},
	{name: "Hoburg Slinger", num: 15, gold: 50, iron: 0, chance: 100},
		
]
let team2_hoburg = [
	{name: "Hogmeister", gold: 25, iron: 0, chance: 10, goldplus: 5},	

]
let team3_hoburg = [
]
let team3_2_hoburg = [		 

]
let team3_3_hoburg = ["Soothsayer","Mounted Chief", "Barbarian Leader"		
]

//Dwarf
let team1_melee_dwarf = [
	{name: "Dwarf Guard", num: 5, gold: 0, iron: 60, chance: 100},
	{name: "Dwarf Warrior", num: 5, gold: 0, iron: 50, chance: 100},
	{name: "Dwarf", num: 5, gold: 0, iron: 40, chance: 100},
]
let team1_ranged_dwarf = [
	{name: "Dwarven Ballista", num: 1, gold: 0, iron: 40, chance: 100},
	{name: "Dwarf Arbalest", num: 5, gold: 0, iron: 50, chance: 100},	
	{name: "Outdoor Dwarf", num: 5, gold: 30, iron: 30, chance: 100},		
]
let team2_dwarf = [
	{name: "Dwarf Commander", gold: 20, iron: 0, chance: 10, goldplus: 10},	

]
let team3_dwarf = [
]
let team3_2_dwarf = ["Living Boulder"		 

]
let team3_3_dwarf = ["Dwarf Commander",	
]

//Dryad
let team1_melee_dryad = [
	{name: "Satyr", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Centaur", num: 3, gold: 50, iron: 0, chance: 100},	
	{name: "Minotaur", num: 3, gold: 50, iron: 0, chance: 100},
	{name: "Harpy", num: 5, gold: 50, iron: 0, chance: 100},
]
let team1_ranged_dryad = [
	{name: "Centauride", num: 3, gold: 50, iron: 0, chance: 100},	
]
let team2_dryad = [
	{name: "Harpy", gold: 30, iron: 0, chance: 10, goldplus: 10},
	{name: "Satyr Commander", gold: 30, iron: 0, chance: 10, goldplus: 10},	

]
let team3_dryad = [
]
let team3_2_dryad = ['Minotaur Lord'		 

]
let team3_3_dryad = ["Satyr Commander","Harpy"	
]

//Cultist
let team1_melee_cult = [
	{name: "Deep One", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Deep One Warrior", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Shambler", num: 4, gold: 50, iron: 8, chance: 100},	
	{name: "War Shambler", num: 4, gold: 50, iron: 20, chance: 100},
	{name: "Hybrid Fisherman", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hybrid Soldier", num: 5, gold: 50, iron: 0, chance: 100},	
]
let team1_ranged_cult = [
	{name: "Yithian", num: 1, gold: 40, iron: 0, chance: 25},	
]
let team2_cult = [
	{name: "Kraken", gold: 60, iron: 0, chance: 5, goldplus: 50},
	{name: "Yithian Sage", gold: 60, iron: 0, chance: 5, goldplus: 60},	

]
let team3_cult = [

]
let team3_2_cult = ["Yithian Sage","Kraken","Giant Crab"		 

]
let team3_3_cult = ["Weirdo","Insane Fisherman","Deep One","Shambler"	
]
//Enchanter
let team1_melee_enchanter = [
	{name: "Animated Armor", num: 5, gold: 0, iron: 50, chance: 100},
	{name: "Terracotta Soldier", num: 5, gold: 60, iron: 0, chance: 100},
	{name: "Dancing Sword", num: 5, gold: 30, iron: 5, chance: 100},	
	{name: "Terracotta Soldier", num: 5, gold: 40, iron: 5, chance: 100},
	{name: "Gargoyle", num: 1, gold: 20, iron: 5, chance: 100},		
]
let team1_ranged_enchanter = [
	{name: "Living Bow", num: 5, gold: 50, iron: 0, chance: 100},		
]
let team2_enchanter = [
	{name: "Wood Golem", gold: 50, iron: 0, chance: 3, goldplus: 50},
	{name: "Animated Armor", gold: 40, iron: 0, chance: 5, goldplus: 10},
	{name: "Dancing Sword", gold: 10, iron: 0, chance: 10, goldplus: 10},
	{name: "Living Bow", gold: 10, iron: 0, chance: 10, goldplus: 10},	

]
let team3_enchanter = ["Oak Golem"


]
let team3_2_enchanter = ["Stone Golem","Necrotod"		 

]
let team3_3_enchanter = ["Wood Golem",'Flesh Golem',"Dancing Sword","Living Bow","Animated Armor","Gargoyle"	
]

//Baal
let team1_melee_baal = [
	{name: "Ba'alite Heavy Infantry", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Ba'alite Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Ba'alite Zealot", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Large Spider", num: 5, gold: 50, iron: 0, chance: 100},		
]
let team1_ranged_baal = [
	{name: "Ba'alite Archer", num: 5, gold: 50, iron: 0, chance: 100},
			
]
let team2_baal = [

]
let team3_baal = ["Sirrush","Manticore","Scorpion Man"


]
let team3_2_baal = ["Shed","Scorpion Beast","Anakite Captain"		 

]
let team3_3_baal = ["Se'ir","Giant Scorpion"	
]

//Pale One
let team1_melee_paleone = [
	{name: "Pale One", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Pale One Soldier", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Cavern Guard", num: 5, gold: 50, iron: 20, chance: 100},	
	{name: "Ancient Pale One", num: 1, gold: 40, iron: 15, chance: 25},	
	{name: "Seal Guard", num: 1, gold: 50, iron: 25, chance: 10},		
]
let team1_ranged_paleone = [
	{name: "Ancient Hurler", num: 1, gold: 40, iron: 0, chance: 25},
			
]
let team2_paleone = [
	{name: "Pale One Commander", gold: 50, iron: 0, chance: 10, goldplus: 10},
	{name: "Pale One Scout", gold: 40, iron: 0, chance: 5, goldplus: 10},
]
let team3_paleone = [


]
let team3_2_paleone = ["King of the Deep","Olm Sage","Anakite Captain","Cave Grub","Magma Child",
					   "Troglodyte","Ancient Commander"

]
let team3_3_paleone = ["Olm","Cave Cow"	
]

//Homark
let team1_melee_homark = [
	{name: "Hobmark Soldier", num: 15, gold: 50, iron: 5, chance: 100},
	{name: "Hobmark Defender", num: 15, gold: 50, iron: 10, chance: 100},
	{name: "Hobmark Hammer", num: 10, gold: 30, iron: 5, chance: 100},
	{name: "Hobmark Pikaneer", num: 10, gold: 30, iron: 5, chance: 100},	
	{name: "Markgraf Guard", num: 10, gold: 40, iron: 10, chance: 100},	
	{name: "Hog Hussar", num: 5, gold: 50, iron: 5, chance: 100},		
]
let team1_ranged_homark = [
	{name: "Hobmark Crossbow", num: 15, gold: 50, iron: 5, chance: 100},
			
]
let team2_homark = [

]
let team3_homark = [


]
let team3_2_homark = [

]
let team3_3_homark = ["Markmeister","Markgraf"	
]

//Warlock
let team1_melee_warlock = [
	{name: "Lesser Fire", num: 5, gold: 60, iron: 0, chance: 100},
	{name: "Lesser Water", num: 5, gold: 60, iron: 0, chance: 100},
	{name: "Lesser Earth", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Winter Wolf", num: 3, gold: 50, iron: 0, chance: 100},			
]
let team1_ranged_warlock = [
	{name: "Cloud Elemental", num: 5, gold: 60, iron: 0, chance: 100},
			
]
let team2_warlock = [
	{name: "Fire Elemental", gold: 70, iron: 0, chance: 5, goldplus: 70},
	{name: "Water Elemental", gold: 70, iron: 0, chance: 5, goldplus: 70},
	{name: "Air Elemental", gold: 70, iron: 0, chance: 5, goldplus: 70},
	{name: "Earth Elemental", gold: 70, iron: 0, chance: 5, goldplus: 70},
]
let team3_warlock = ["Lake Troll King"


]
let team3_2_warlock = ["Fire Elemental","Water Elemental","Earth Elemental","Air Elemental","Earth Gnome","Lake Troll","Yeti"

]
let team3_3_warlock = ["Lesser Fire","Lesser Water","Lesser Earth","Earth Gnome","Salamander","Flame Spirit","Sylph","Winter Wolf","Cloud Elemental","Mud Warrior"
]

//Witch
let team1_melee_witch = [
	{name: "Androphag Cavalry", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Androphag Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Marsh Worm", num: 1, gold: 30, iron: 0, chance: 100},	
	{name: "Hydra Hatchling", num: 1, gold: 20, iron: 0, chance: 100},			
]
let team1_ranged_witch = [
	{name: "Androphag Archer", num: 5, gold: 50, iron: 0, chance: 100},
			
]
let team2_witch = [
	{name: "Marsh Worm", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Androphag Lord", gold: 50, iron: 0, chance: 5, goldplus: 10},
	{name: "Manflayer", gold: 70, iron: 0, chance: 5, goldplus: 20},	
]
let team3_witch = ["Wyrm","Hydra"


]
let team3_2_witch = ["Creeping Doom","Root Monster","Swamp Drake","Doppelganger Captain"

]
let team3_3_witch = ["Hyra Hatchling","Swamp Thing","Marhs Worm"
]
//Senator
let team1_melee_senator = [
	{name: "Hastati", num: 5, gold: 45, iron: 5, chance: 100},
	{name: "Princep", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Praetorian Guard", num: 5, gold: 60, iron: 20, chance: 100},
	{name: "Velite", num: 5, gold: 40, iron: 0, chance: 100},			
]
let team1_ranged_senator = [
			
]
let team2_senator = [
	{name: "Reveler", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Centurion", gold: 30, iron: 0, chance: 5, goldplus: 30},
	{name: "Leo", gold: 40, iron: 0, chance: 5, goldplus: 30},
	{name: "Renata", gold: 50, iron: 0, chance: 5, goldplus: 20},	
	{name: "Renatus", gold: 110, iron: 0, chance: 5, goldplus: 20},
	{name: "Serpent Acolyte", gold: 50, iron: 0, chance: 5, goldplus: 20},	
]
let team3_senator = [


]
let team3_2_senator = ["Serpent Priest","Heliodromus","Renatus"

]
let team3_3_senator = ["Reveler","Gladiator","Centurion","Senator","Leo"
]

//Demon
let team1_melee_demon = [
	{name: "Imp", num: 5, gold: 50, iron: 0, chance: 100},				
]
let team1_ranged_demon = [
			
]
let team2_demon = [
]
let team3_demon = ["Greater Demon"


]
let team3_2_demon = ["Serpent Fiend","Devil","Storm Demon"

]
let team3_3_demon = ["Imp","Lesser Demon","Fiery Imp"
]

//Undead
let team1_melee_undead = [				
]
let team1_ranged_undead = [
			
]
let team2_undead = [
	{name: "Mound King", gold: 30, iron: 0, chance: 10, goldplus: 10},	
]
let team3_undead = ["Mummy","Carrion","Tartarian Spirit"


]
let team3_2_undead = ["Wight","Wraith"

]
let team3_3_undead = ["Mound King","Ghost"
]

//Priest
let team1_melee_priest = [	
	{name: "Tribal Warrior", num: 7, gold: 50, iron: 0, chance: 100},
	{name: "Jungle Warrior", num: 6, gold: 50, iron: 0, chance: 100},
	{name: "Feathered Warrior", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Jaguar Warrior", num: 5, gold: 50, iron: 0, chance: 25},	
	{name: "Toad Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Seal Guard", num: 1, gold: 50, iron: 25, chance: 10},			
]

	
//Weird
let team1_melee_weird = [
	{name: "Dragon Hatchling", num: 1, gold: 25, iron: 5, chance: 10},
	{name: "Siren", num: 1, gold: 25, iron: 0, chance: 50},
	{name: "Sinner", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Brass Claw Horror", num: 2, gold: 70, iron: 20, chance: 100},
	{name: "Float Cat Horror", num: 1, gold: 40, iron: 0, chance: 100},
	{name: "Hybrid Fisherman", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hybrid Soldier", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Runner", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Lizardman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Lizardman Warrior", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Caveman", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Voi Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Voi Axeman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Peshti Spearman", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Militia", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Heavy Spearman", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Light Cavalry", num: 4, gold: 50, iron: 0, chance: 100},
	{name: "Heavy Cavalry", num: 4, gold: 50, iron: 20, chance: 100},
	{name: "Lion Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hyena Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Ichtyid Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "War Elephant", num: 1, gold: 65, iron: 0, chance: 10},		
	{name: "Wolf Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Evil Toy", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Monster", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Plague Rat", num: 5, gold: 50, iron: 0, chance: 100},	
]
let team1_ranged_weird = [
	{name: "Voi Archer", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Wolf Tribe Bowman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Pygmy", num: 5, gold: 50, iron: 0, chance: 100},	
	]				

let team2_weird = [
	{name: "Dragon Hatchling", gold: 40, iron: 0, chance: 5, goldplus: 40},
	{name: "Mind Slime Horror", gold: 60, iron: 0, chance: 5, goldplus: 40},
	{name: "Peddler", gold: 20, iron: 0, chance: 5, goldplus: 40},	
	{name: "Brass Claw Horror", gold: 70, iron: 0, chance: 5, goldplus: 40},
	{name: "Caveman Chief", gold: 40, iron: 0, chance: 5, goldplus: 10},
	{name: "Ichtyid Captain", gold: 40, iron: 0, chance: 10, goldplus: 10},	
	{name: "Moldwynd", gold: 60, iron: 0, chance: 10, goldplus: 20},
]
let team3_weird = ['Hidden Aboleth',"Moon Horror",
			 'Horror Olm',"Ormr","Python",
			 "Gore Tide Horror","Convulser"


		 



]
let team3_2_weird = ["Hidden Aboleth","Formless Spawn","Displacer Beast","Hidden Freak",
			 "Demonic Locust","Dream Horror","Gelatinous Cube","Rakshasa","Moldwynd","Ophanlot","Spine of Babylon"

]
let team3_3_weird = ["Miracle Eye","Freak Lord","Lizardman Shaman","Spine Membrane Horror","Horror Mantis","Ichtyid Captain",
					 "Brass Claw Horror","Mind Slime Horror","Float Cat Horror","Moldwynd", "Plague Rat","Amanra","Monster"
]	
			  
let	text	
let picky
let shuffle 
let shuffle2
let shuffle3
let leader
let leader2	 	 
let Coin
let Coin2
let spell
let hasunits
let mymonster
let mymonster2
let mymonster3
let mymonster4
let mymonsterstore
let mymonster2store
let mymonster3store
let mymonster4store
let allow_overwrite = true
let classnumber = 10
let unitnumber = 6
let comnumber = 10
let timeset = 0
let illapp = "'"
let descrroll
let dump
var id = setInterval(test, 300);
var rit2 = false;
var animalcheck = false;
var druidcheck = false;
var trollcheck = false;
var elcheck = false;
var bakemonocheck = false;
var dwarfcheck = false;
var hoburgcheck = false;
var dryadcheck = false;
var cultcheck = false;
var enchantercheck = false;
var bakemonocheck = false;
var baalcheck = false;
var paleonecheck = false;
var homarkcheck = false;
var warlockcheck = false;
var witchcheck = false;
var senatorcheck = false;
var weirdcheck = false;
var undeadcheck = false;
var demoncheck = false;
var priestcheck = false;

var pokemon = false;
var saneshuffle = "insane";
let hproll
let startstore
let startstore2
let startstore3


function test(){

classnumber = parseInt(document.getElementById("classnumber").value, 10);
unitnumber = parseInt(document.getElementById("unitnumber").value, 10);
comnumber = parseInt(document.getElementById("comnumber").value, 10);	

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

text += 'newmonster "Ormr" \n'	
text += 'descr "Who knows what horrors dwell in the random chaos of Elysium?" \n'	
text += 'copystats "Troglodyte" \n'	
text += 'hp 150\n'
text += 'mr 9 \n'
text += 'str 8 \n'
text += 'mor 20 \n'
text += 'spr1 "Randomclass/2800_1.tga" \n'
text += 'spr2 "Randomclass/2800_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 25 42 \n'
text += 'clearspec \n'
text += 'water \n'
text += 'fastheal \n'
text += 'coldblood \n'
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

text += 'newmonster "Weirdo" \n'
text += 'name "Weirdo" \n'
text += 'descr "" \n'
text += 'copystats "Strange Thing" \n'
text += 'copyspr "Strange Thing" \n'
text += 'clearmove \n'
text += 'slow \n'
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
text += 'trample 2 \n'
text += 'tramplexsize 1\n'
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
text += 'clearspec \n'
text += 'allitemslots \n'
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

text += 'newmonster "Miracle Eye" \n'
text += 'name "Miracle Eye" \n'
text += 'descr "" \n'
text += 'copystats "Floating Eye" \n'
text += 'hp 8 \n'
text += 'copyspr "Floating Eye" \n'
text += 'spellweaponbonus 36 1 \n'
text += 'clearspec \n'
text += 'ethereal \n'
text += 'spiritsight \n'
text += 'clearmove \n'
text += 'float \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Preacher" \n'
text += 'name "Preacher" \n'
text += 'descr "" \n'
text += 'copystats "Saint" \n'
text += 'copyspr "Saint" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Missionary" \n'
text += 'name "Missionary" \n'
text += 'descr "" \n'
text += 'copystats "Pilgrim" \n'
text += 'copyspr "Pilgrim" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Inquisitor Leader" \n'
text += 'name "Inquisitor Leader" \n'
text += 'descr "" \n'
text += 'copystats "Inquisitor" \n'
text += 'copyspr "Inquisitor" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "High Inquisitor Leader" \n'
text += 'name "Hign Inquisitor Leader" \n'
text += 'descr "" \n'
text += 'copystats "High Inquisitor" \n'
text += 'copyspr "High Inquisitor" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Angel Captain" \n'
text += 'name "Angel Captain" \n'
text += 'descr "" \n'
text += 'copystats "Angel" \n'
text += 'copyspr "Angel" \n'
text += 'clearspec \n'
text += 'awe 1 \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'flying \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Man Trap" \n'
text += 'name "Man Trap" \n'
text += 'descr " A carnivorous plant. Its feet-like roots allow it to move around as it looks for victims. When a victom comes within range, the Man Trap strikes out with its deadly teeth. The Man Trap moves slowly, but its attack is nothing to be laughed at. If used wisely, the long-lasting Man Trap can be very helpful." \n'
text += 'copystats "Venus Trap" \n'
text += 'copyspr "Venus Trap" \n'
text += 'clearmove \n'
text += 'slow \n'
text += ' \n'

text += 'newmonster "Stone Trap" \n'
text += 'name "Stone Trap" \n'
text += 'descr "" \n'
text += 'copystats "Living Boulder" \n'
text += 'copyspr "Living Boulder" \n'
text += 'clearmove \n'
text += 'slow \n'
text += ' \n'

text += 'newmonster "Moldwynd" \n'
text += 'name "Moldwynd" \n'
text += 'descr "" \n'
text += 'copystats "Troglodyte" \n'
text += 'hp 22 \n'
text += 'mr 5 \n'
text += 'spr1 "Randomclass/ugly_1.tga" \n'
text += 'spr2 "Randomclass/ugly_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 5 "Bite" \n'
text += 'clearspec \n'
text += 'spellweapon 58 1 \n'
text += 'flying \n'
text += 'rank 0	\n'
text += ' \n'
	
text += 'newmonster "Headless Horseman" \n'
text += 'name "Headless Horseman" \n'
text += 'descr "Only in the darkest dreams of the few remaining Nemedian elders do the memories of the Nuckelavee roam free. Being a demon so foul, they brought death to world in the wake of their thunderous hooves. The Nuckelavee were both powerful demons and fey of nature, hailing the northern shores of the world. Considered cruel even among the vindictive dryads and hags, the Nucklelavee would eagerly kill and torture all those who despoiled various sacred bodies of water. Though long banished from both the mortal planes and the afterlife, the remains of their legacy live on in the blackest of forests. Only the Fomorians dare bring back these deadly monsters of yore to the world of living so that they may ride and slaughter again. Fortunately for the mortals of Elysium, the Fomorians are poor mages, and cannot fully restore the demon to its full glory. Rather, the Nuckelavee is returned in the form of a headless black rider, now called to prowl the forests. The headless horseman, though he bears a mere fraction of the Nuckelavee soul, is free to hunt and play amongst the lonely backroads." \n'
text += 'copystats "Spectral Horseman" \n'
text += 'spr1 "Randomclass/headless_1.tga" \n'
text += 'spr2 "Randomclass/headless_2.tga" \n'
text += 'fear 2 \n'
text += 'stupid \n'
text += 'forest2 \n'
text += 'regeneration \n'
text += 'stealth \n'
text += 'noleader \n'
 text += '\n'
text += 'newmonster "Barghest" \n'
text += 'name "Barghest" \n'
text += 'descr "Barghest are huge, black fey hounds from the Fomorian plains. Some say they are the manifestation of darkness and ill fates. Peasants living near overgrown forests or bleak highlands would do well to stay indoors after night, less the black dog of the moors develop the urge to investigate the encroachments of man." \n'
text += 'copystats "Wolf" \n'
text += 'hp 25 \n'
text += 'str 6 \n'
text += 'mr 5 \n'
text += 'spr1 "Randomclass/1768_1.tga" \n'
text += 'spr2 "Randomclass/1768_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 9 42 \n'
text += 'spiritsight \n'
text += 'animal \n'
text += 'stealth \n'
text += 'regeneration \n'
text += 'forest2 \n'
text += 'stupid \n'
 text += '\n'

text += 'newmonster "Black Dog"\n'
text += 'name "Black Dog"\n'
text += 'descr "Black dogs are huge fey hounds from the Fomorian plains. Some say they are the manifestation of darkness and ill fates. Peasants living near overgrown forests or bleak highlands would do well to stay indoors after night, less the black dog of the moors develop the urge to investigate the encroachments of man."\n'
text += 'copystats "Wolf"\n'
text += 'hp 7\n'
text += 'mr 4\n'
text += 'spr1 "Randomclass/1769_1.tga"\n'
text += 'spr2 "Randomclass/1769_2.tga"\n'
text += 'spiritsight\n'
text += 'animal\n'
text += 'forest2\n'
text += 'stealth\n'
text += '\n'

text += 'newmonster "Cath Sith"\n'
text += 'name "Cath Sith"\n'
text += 'descr "A witch who dares assume the form of a cat nine times bears the risk of becoming a Cath Sith permanently. Cath Sith are black fey cats of the highlands and moors. Although they are not as dire as the black dogs of the moors, they are still powerful masters of magic, regardless of their fluffy new form. Cath Sith often mean to do harm, such as killing a farmers hens, or rubbing up against a millers leg, cursing him to contract the plague the very next day. However, a Cath Sith is not completely heartless, one could possibly be appeased by gifts of gold or food. A lost little boy in the moors might even find his way back to his parents if he catches the eye of a lonely Cath Sith."\n'
text += 'copystats "Black Cat Familiar"\n'
text += 'copyspr "Black Cat Familiar"\n'
text += 'hp 15\n'
text += 'mor 7\n'
text += 'mr 8\n'
text += 'clearweapons\n'
text += 'meleeweapon 4 "Claw"\n'
text += 'spellweaponbonus 37 2\n'
text += 'spellweaponbonus 40 2\n'
text += 'stealth\n'
text += 'forest2\n'
text += 'stupid\n'
text += 'lucky\n'
text += '\n'

text += 'newmonster "Witch Elm"\n'
text += 'name "Witch Elm"\n'
text += 'descr "Every once in awhile, a terrified peasant will stumble upon the corpse of a young girl in the hollow of an Elm tree trunk. Though perplexing, some have have theorized that this the work of witch covens dumping failed apprentices in some form of execution. More likely, it is the work of the Fomorians stealing children for their druidic spells. Fomorians can increase their power over the land if they plant the body of a budding young witch in the trunk of a rotting tree and curse its roots with toads blood. It is unknown why some Witch Elms fail to inflict any form of malady upon their intended target. Perhaps the Formorians are unable to tell which girls are developing into witchs, so they simply blindly kidnap and kill a random child for the ritual, hoping for some form of success."\n'
text += 'copystats "Shadow Tree"\n'
text += 'copyspr "Shadow Tree"\n'
text += 'stealth\n'
text += 'spawn1d6mon 35\n'
text += '\n'

text += 'newmonster "Wild Black Dog"\n'
text += 'name "Wild Black Dog"\n'
text += 'descr "Black dogs are huge fey hounds from the Fomorian plains. Some say they are the manifestation of darkness and ill fates. Peasants living near overgrown forests or bleak highlands would do well to stay indoors after night, less the black dog of the moors develop the urge to investigate the encroachments of man."\n'
text += 'copystats "Wolf"\n'
text += 'hp 15\n'
text += 'mr 4\n'
text += 'spr1 "Randomclass/1769_1.tga"\n'
text += 'spr2 "Randomclass/1769_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 8 "Bite"\n'
text += 'spiritsight\n'
text += 'animal\n'
text += 'stealth\n'
text += 'stupid\n'
text += 'regeneration\n'
text += '\n'

text += 'newmonster "Fomorian King"\n'
text += 'name "Fomorian King"\n'
text += 'descr "The Fomorian King is a king of the giants who once guarded the realms of the watery dead. Under their rule the Fomorians emerged from the depths and sailed to distant shores to plunder and ravage the land with plague and gale. Punished for their sins, the Fomorians were banished and forced to find a new home. The Fomorian Kings are powerful storm crafters and death mages. They protected their land from the invading Patholonians and their descendants with plagues and further doomed their race. Fomorian Kings are cursed with a monsterous appearance and have only one eye. They are formidable shipwrights and can enter the ocean realms."\n'
text += 'copystats "Hill Giant"\n'
text += 'armor 1\n'
text += 'mr 7\n'
text += 'spr1 "Randomclass/1803_1.tga"\n'
text += 'spr2 "Randomclass/1803_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 15 "Spear"\n'
text += 'rangedweaponbonus 15 "Javelin"\n'
text += 'spellweapon 5 2\n'
text += 'spellweapon 59 3\n'
text += 'power 0 3\n'
text += 'shield\n'
text += 'badsight\n'
text += 'spiritsight\n'
text += 'water\n'
text += 'rank -1\n'
text += 'nametype 42\n'
text += '\n'

text += 'newmonster "Balor"\n'
text += 'name "Balor"\n'
text += 'descr "The Eye of Balor is dreadful curse upon the land. Where ever the lumbering giant goes, his baleful gaze falls upon the enemies of his divine rule. Forest fires and droughts are all attributed to the beams firing from his cursed eye."\n'
text += 'copystats "Hill Giant"\n'
text += 'hp 400\n'
text += 'armor 3\n'
text += 'mr 7\n'
text += 'spr1 "Randomclass/1899_1.tga"\n'
text += 'spr2 "Randomclass/1899_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 20 "Spear"\n'
text += 'rangedweaponbonus 20 "Javelin"\n'
text += 'spellweapon 5 2\n'
text += 'spellweapon 59 3\n'
text += 'spellweapon 50 3\n'
text += 'power 0 3\n'
text += 'shield\n'
text += 'badsight\n'
text += 'spiritsight\n'
text += 'water\n'
text += 'rank -1\n'
text += 'nametype 42\n'
text += '\n'

text += 'newmonster "Nemedian Sorceress"\n'
text += 'name "Nemedian Sorceress"\n'
text += 'descr "The Nemedians have merged the old magical traditions of their Partholonian ancestors and the magic of their Fomorian masters. Sorceresses skilled in death and air magic hide in the dark spires of Rath Chimbalth where they summon whispering shades of mist and darkness."\n'
text += 'copystats "Archer"\n'
text += 'armor 0\n'
text += 'mr 4\n'
text += 'spr1 "Randomclass/1792_1.tga"\n'
text += 'spr2 "Randomclass/1792_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 0 "Staff"\n'
text += 'spellweapon 43 1\n'
text += 'spellweapon 59 2\n'
text += 'spiritsight\n'
text += 'rank -1\n'
text += 'nametype 43\n'
text += '\n'

text += 'newmonster "Nemedian Warrior"\n'
text += 'name "Nemedian Warrior"\n'
text += 'descr "Nemedians are the descendants of the Sauromatian Partholonians. They are a highly magical race far surperior to ordinary men, but they were few in number. With the arrival of the Witch Kings, they left Sauromatia for a better place. The Nemedians followed in the footsteps of their Partolonian ancestors and arrived in the rich land of the Fomorians. Soon war broke out. The Nemedians were victorious until the plague that once eradicated the Partholonians struck them a wiped out half the population. The war ended with the subjugation of the Nemedians. After a bloody rebellion, most of them fled the land, but a few of them still linger in the old fortress of Rath Chimbalth."\n'
text += 'copystats "Heavy Infantry"\n'
text += 'hp 10\n'
text += 'spr1 "Randomclass/1790_1.tga"\n'
text += 'spr2 "Randomclass/1790_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 5 "Golden Spear"\n'
text += 'meleeweapon 2 "Javelin"\n'
text += 'shield\n'
text += 'spiritsight\n'
text += '\n'

text += 'newweapon "Morrigan Spear" \n'
text += 'clearwspec \n'
text += 'trgrank 1 \n'
text += 'range 1 \n'
text += 'dmgtype 7 \n'
text += 'dmg 0 \n'
text += 'aoe 1 \n'
text += 'sound 1 \n'
text += 'init 3 \n'
text += 'dispossess \n'

text += 'newmonster "Morrigan" \n'
text += 'name "Morrigan" \n'
text += 'descr "The Morrigans are heralds of death, collectors of souls, and bringers of strife. They are the fates of the battleground, weaving threads of entrails with arrows for needles. Their chant colors the skies red before battle. In the shapes of crows, they pick out the eyes of the dead. The Morrigans are horrible beings of death and destruction. They appear as grisly warrior women armed with spears enchanted to kill." \n'
text += 'copystats "Spearman" \n'
text += 'hp 35 \n'
text += 'armor 1 \n'
text += 'mr 5 \n'
text += 'mor 30 \n'
text += 'spr1 "Randomclass/1821_1.tga" \n'
text += 'spr2 "Randomclass/1821_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 15 "Morrigan Spear" \n'
text += 'shield \n'
text += 'spiritsight \n'
text += 'stealth \n'
text += 'fear 1 \n'
text += 'poisonres 25 \n'
text += 'undead \n'
text += 'flying \n'	
text += '\n'

text += 'newmonster "Spine of Babylon"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 25 \n'
text += 'mr 4 \n'
text += 'str 5 \n'
text += 'armor 1 \n'
text += 'mor 15 \n'
text += 'spr1 "Randomclass/qi.tga"  \n'
text += 'spr2 "Randomclass/qi2.tga"  \n'
text += 'clearweapons  \n'
text += 'rangedweaponbonus 8 "Flick Barb" \n'
text += 'spellweaponbonus 50 1  \n'
text += 'rangedweaponbonus 1 "Charm"  \n'
text += 'rangedweaponbonus 1 "Weakness"  \n'
text += 'clearspec \n'
text += 'rank -1  \n'
text += ' \n'

text += 'newmonster "Amanra"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 18 \n'
text += 'mr 9 \n'
text += 'str 4 \n'
text += 'armor 0 \n'
text += 'mor 15 \n'
text += 'spr1 "Randomclass/kitty_1.tga"  \n'
text += 'spr2 "Randomclass/kitty_2.tga"  \n'
text += 'clearweapons  \n'
text += 'meleeweapon 2 "Bite" \n'
text += 'spellweaponbonus 38 2 \n'
text += 'spellweaponbonus 6 1   \n'
text += 'clearspec \n'
text += 'rank -1  \n'
text += ' \n'

text += 'newmonster "Ophanlot"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 35 \n'
text += 'mr 7 \n'
text += 'str 4 \n'
text += 'armor 2 \n'
text += 'mor 15 \n'
text += 'spr1 "Randomclass/kitty_3.tga"  \n'
text += 'spr2 "Randomclass/kitty_4.tga"  \n'
text += 'clearweapons  \n'
text += 'meleeweapon 10 "Bite" \n'
text += 'rangedweapon 2 "Invulnerability" \n'
text += 'spellweaponbonus 49 2   \n'
text += 'clearspec \n'
text += 'holy \n'
text += 'rank 1  \n'
text += ' \n'

text += 'newmonster "Evil Toy"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 6 \n'
text += 'mr 7 \n'
text += 'str 4 \n'
text += 'armor 0 \n'
text += 'mor 8 \n'
text += 'spr1 "Randomclass/teddy_1.tga"  \n'
text += 'spr2 "Randomclass/teddy_2.tga"  \n'
text += 'clearweapons  \n'
text += 'meleeweapon 6 "Bite" \n'
text += 'clearspec \n'
text += 'float \n'
text += 'inanimate \n'
text += 'poisonres 100 \n'
text += 'fireres -50 \n'
text += 'bluntres \n'
text += 'stealth \n'
text += 'rank 1   \n'
text += ' \n'

text += 'newmonster "Convulser"  \n'
text += 'descr ""  \n'
text += 'copystats "Maker of Ruins"  \n'
text += 'hp 180 \n'
text += 'mr 5 \n'
text += 'str 8 \n'
text += 'armor 1 \n'
text += 'mor 15 \n'
text += 'copyspr "Maker of Ruins" \n'
text += 'clearweapons  \n'
text += 'meleeweapon 1 "Earthquake" \n'
text += 'meleeweapon 20 "Crush"   \n'
text += 'clearspec \n'
text += 'spiritsight \n'
text += 'fireres 50 \n'
text += 'coldres 50 \n'
text += 'huge \n'
text += 'slow \n'
text += 'trample 5 \n'
text += ' \n'

text += 'newmonster "Plague Rat" \n'
text += 'name "Plague Rat" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'spr1 "Randomclass/rat_1.tga"  \n'
text += 'spr2 "Randomclass/rat_2.tga" \n'
text += 'hp 3 \n'
text += 'str 3 \n'
text += 'armor 0 \n'
text += 'mor 4 \n'
text += 'mr 7 \n'
text += 'clearweapons \n'
text += 'meleeweapon 4 "Poison Cloud"  \n'
text += 'clearspec \n'
text += 'poisonexpl 4 \n'
text += 'poisonres 100 \n'
text += 'diseaseres \n'
text += ' \n'


text += 'newmonster "Monster" \n'
text += 'name "Monster" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'spr1 "Randomclass/mon4.tga"  \n'
text += 'spr2 "Randomclass/mon5.tga" \n'
text += 'hp 10 \n'
text += 'str 4 \n'
text += 'armor 0 \n'
text += 'mor 4 \n'
text += 'mr 7 \n'
text += 'clearweapons \n'
text += 'meleeweapon 5 "Claw"  \n'
text += 'clearspec \n'
text += ' \n'
	
i = 0
classnumber = 0	
unitnumber = 0
comnumber = 0	
classnumber = parseInt(document.getElementById("classnumber").value, 10);
unitnumber = parseInt(document.getElementById("unitnumber").value, 10);
comnumber = parseInt(document.getElementById("comnumber").value, 10);
animalcheck = document.getElementById("animalcheck").checked;	
druidcheck = document.getElementById("druidcheck").checked;
trollcheck = document.getElementById("trollcheck").checked;
elcheck = document.getElementById("elcheck").checked;
bakemonocheck = document.getElementById("bakemonocheck").checked;
barbariancheck = document.getElementById("barbariancheck").checked;
hoburgcheck = document.getElementById("hoburgcheck").checked;
dwarfcheck = document.getElementById("dwarfcheck").checked;
dryadcheck = document.getElementById("dryadcheck").checked;
cultcheck = document.getElementById("cultcheck").checked;
enchantercheck = document.getElementById("enchantercheck").checked;
baalcheck = document.getElementById("baalcheck").checked;
paleonecheck = document.getElementById("paleonecheck").checked;
homarkcheck = document.getElementById("homarkcheck").checked;
warlockcheck = document.getElementById("warlockcheck").checked;
undeadcheck = document.getElementById("undeadcheck").checked;
demoncheck = document.getElementById("demoncheck").checked;
priestcheck = document.getElementById("priestcheck").checked;
senatorcheck = document.getElementById("senatorcheck").checked;
witchcheck = document.getElementById("witchcheck").checked;
weirdcheck = document.getElementById("weirdcheck").checked;
pokemon = document.getElementById("pokemon").checked;
saneshuffle = document.getElementById("saneshuffle").value;

let team1_melee_empty = [
	{name: "Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Swordsman", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Heavy Infantry", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Bandit", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Halberdier", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Pikeneer", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "War Dog", num: 4, gold: 25, iron: 0, chance: 100},	
	{name: "Zweihander", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Militia", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Heavy Spearman", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Light Cavalry", num: 4, gold: 50, iron: 0, chance: 100},
	{name: "Heavy Cavalry", num: 4, gold: 50, iron: 20, chance: 100},
	{name: "Lion Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hyena Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "War Elephant", num: 1, gold: 65, iron: 0, chance: 10},		
	{name: "Wolf Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
]
let team1_ranged_empty = [
	{name: "Crossbowman", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Slinger", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Tower Guard", num: 5, gold: 50, iron: 15, chance: 100},	
	{name: "Archer", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Scout", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Catapult", num: 1, gold: 25, iron: 50, chance: 100},	
	{name: "Trebuchet", num: 1, gold: 50, iron: 50, chance: 100},
	{name: "Ballista", num: 2, gold: 25, iron: 50, chance: 100},	
]	
let team2_empty = [
	{name: "Captain", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Commander", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Mounted Commander", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Priest", gold: 50, iron: 0, chance: 5, goldplus: 10},
	{name: "Alchemist", gold: 40, iron: 0, chance: 10, goldplus: 5},
	{name: "Court Mage", gold: 40, iron: 0, chance: 10, goldplus: 5},
	{name: "High Lord", gold: 50, iron: 0, chance: 10, goldplus: 5},
	{name: "Monk", gold: 40, iron: 0, chance: 10, goldplus: 5},	
]
let team3_empty = [
	"Old Wizard","White Wizard","Dark Wizard","Golden Wizard","King"	
]
let team3_2_empty = [
	"Animist","Astrologer","Pyromancer","Sea Father","Ice Druid","War Elephant"
]
let team3_3_empty = [
	"Spearman","Captain","Priest","Mounted Commander","Commander","Hedge Wizard","Monk","Court Mage",
	"Knight","Scout","Alchemist","Princess","Assassin","Lion King"
]


if(animalcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_animal)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_animal)
team2_empty = team2_empty.concat(team2_animal)
team3_empty = team3_empty.concat(team3_animal)
team3_2_empty = team3_2_empty.concat(team3_2_animal)
team3_3_empty = team3_3_empty.concat(team3_3_animal)
}
if(trollcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_troll)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_troll)
team2_empty = team2_empty.concat(team2_troll)
team3_empty = team3_empty.concat(team3_troll)
team3_2_empty = team3_2_empty.concat(team3_2_troll)
team3_3_empty = team3_3_empty.concat(team3_3_troll)
}
if(elcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_el)
team2_empty = team2_empty.concat(team2_el)
team3_2_empty = team3_2_empty.concat(team3_2_el)
team3_3_empty = team3_3_empty.concat(team3_3_el)

}
if(druidcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_druid)
team2_empty = team2_empty.concat(team2_druid)
team3_2_empty = team3_2_empty.concat(team3_2_druid)
team3_3_empty = team3_3_empty.concat(team3_3_druid)

}

if(bakemonocheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_bakemono)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_bakemono)
team2_empty = team2_empty.concat(team2_bakemono)
team3_empty = team3_empty.concat(team3_bakemono)
team3_2_empty = team3_2_empty.concat(team3_2_bakemono)
team3_3_empty = team3_3_empty.concat(team3_3_bakemono)
}
if(barbariancheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_barbarian)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_barbarian)
team2_empty = team2_empty.concat(team2_barbarian)
team3_3_empty = team3_3_empty.concat(team3_3_barbarian)
}
if(dwarfcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_dwarf)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_dwarf)
team2_empty = team2_empty.concat(team2_dwarf)
team3_2_empty = team3_2_empty.concat(team3_2_dwarf)
team3_3_empty = team3_3_empty.concat(team3_3_dwarf)
}

if(hoburgcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_hoburg)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_hoburg)
team3_empty = team3_empty.concat(team3_hoburg)
team3_3_empty = team3_3_empty.concat(team3_3_hoburg)
}
if(dryadcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_dryad)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_dryad)
team2_empty = team2_empty.concat(team2_dryad)
team3_2_empty = team3_2_empty.concat(team3_2_dryad)
team3_3_empty = team3_3_empty.concat(team3_3_dryad)
}
if(cultcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_cult)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_cult)
team2_empty = team2_empty.concat(team2_cult)
team3_2_empty = team3_2_empty.concat(team3_2_cult)
team3_3_empty = team3_3_empty.concat(team3_3_cult)
}

if(enchantercheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_enchanter)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_enchanter)
team2_empty = team2_empty.concat(team2_enchanter)
team3_empty = team3_empty.concat(team3_enchanter)
team3_2_empty = team3_2_empty.concat(team3_2_enchanter)
team3_3_empty = team3_3_empty.concat(team3_3_enchanter)
}

if(baalcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_baal)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_baal)
team3_empty = team3_empty.concat(team3_baal)
team3_2_empty = team3_2_empty.concat(team3_2_baal)
team3_3_empty = team3_3_empty.concat(team3_3_baal)
}

if(paleonecheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_paleone)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_paleone)
team2_empty = team2_empty.concat(team2_paleone)
team3_empty = team3_empty.concat(team3_paleone)
team3_2_empty = team3_2_empty.concat(team3_2_paleone)
team3_3_empty = team3_3_empty.concat(team3_3_paleone)
}

if(homarkcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_homark)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_homark)
team3_3_empty = team3_3_empty.concat(team3_3_homark)
}
if(warlockcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_warlock)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_warlock)
team2_empty = team2_empty.concat(team2_warlock)
team3_empty = team3_empty.concat(team3_warlock)
team3_2_empty = team3_2_empty.concat(team3_2_warlock)
team3_3_empty = team3_3_empty.concat(team3_3_warlock)
}

if(senatorcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_senator)
team2_empty = team2_empty.concat(team2_senator)
team3_2_empty = team3_2_empty.concat(team3_2_senator)
team3_3_empty = team3_3_empty.concat(team3_3_senator)
}

if(undeadcheck === true){	
team3_empty = team3_empty.concat(team3_undead)
team3_2_empty = team3_2_empty.concat(team3_2_undead)
team3_3_empty = team3_3_empty.concat(team3_3_undead)
}

if(demoncheck === true){
team1_melee_empty = team1_melee_empty.concat(team1_melee_demon)	
team3_empty = team3_empty.concat(team3_demon)
team3_2_empty = team3_2_empty.concat(team3_2_demon)
team3_3_empty = team3_3_empty.concat(team3_3_demon)
}

if(weirdcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_weird)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_weird)
team2_empty = team2_empty.concat(team2_weird)
team3_empty = team3_empty.concat(team3_weird)
team3_2_empty = team3_2_empty.concat(team3_2_weird)
team3_3_empty = team3_3_empty.concat(team3_3_weird)
}


if(pokemon === false){	
team3_2_empty = team3_2_empty.concat(team3_3_empty)
team3_empty = team3_empty.concat(team3_2_empty)
}
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

console.log(team1_ranged_empty )
console.log(team1_melee_empty )
limit = (Math.floor(Math.random() * unitnumber)) + 1
limit2 = Math.floor(Math.random() * comnumber) + 1

if(limit2 <= 0){
limit2 = 4	
}	
limit3 = Math.floor(Math.random() * 4)	
i++
shuffle = randomItem(team8)
shuffle2 = Math.floor(Math.random() * 17)

if(shuffle2 === 16){
text += 'selectterr 37 \n'
text += 'ownable \n'
text += 'herbs 1 \n'
text += ' \n'

text += 'newritpow \n'
text += 'newritual "Ritual of mastery"  \n'
text += 'level 1  \n'
text += 'newrit 2  \n'
text += 'levelup 2  \n'
text += 'rebatelvl 2  \n'
text += 'soundfx 57  \n'
text += 'cost 2 120 \n'
text += 'terr -1 \n'
text += 'free \n'
text += ' \n'

text += 'newritual "Summon Morrigan" \n'
text += 'descr "Summon the warrior maidens of the black broch."  \n'
text += 'level 2 \n'
text += 'summoning  \n'
text += 'terr -1 \n'
text += 'rebatelvl 5 \n'
text += 'addstring "6*Morrigan"  \n'
text += 'cost 2 350 \n'
text += ' \n'

text += 'newritual "Claim Ancient Forest" \n'
text += 'descr "Carve the trunk of a ancient forest tree and coat it black iron to make a new tower."  \n'
text += 'level 2 \n'
text += 'summoning \n'
text += 'terr 4 \n'
text += 'addstring "2*Witch Elm"  \n'
text += 'cost 0 30 \n'
text += 'apcost 6 \n'
text += 'alterloc 151 \n'
text += ' \n'

text += 'newritual "Season of the Witch" \n'
text += 'descr "Summon the warrior maidens of the black broch."  \n'
text += 'level 3 \n'
text += 'summoning  \n'
text += 'terr -1 \n'
text += 'rebatelvl 5 \n'
text += 'addstring "3d6*Morrigan & 3d6*Black Cat Familiar"  \n'
text += 'cost 2 500 \n'
text += ' \n'

text += 'newritual "Defile Forest"  \n'
text += 'descr "Haunt the forest with black magic. Shadow forests will harbor stealthy units who will gather herbs and conquer sites for you, along with killing all fungus." \n'
text += 'level 1 \n'
text += 'summoning \n'
text += 'sum0chance 40  \n'
text += 'terr -38 \n'
text += 'terrscale50 4 \n'
text += 'rebatelvl 5 \n'
text += 'addstring "Witch Elm" \n'
text += 'addstring "Headless Horseman"  \n'
text += 'addstring "1d4*Barghest" \n'
text += 'addstring "Cath Sith"  \n'
text += 'cost 2 120 \n'
text += 'alterloc 37 \n'
text += ' \n'


text += 'newritual "Summon Banshee" \n'
text += ' descr "Summon a banshee to destroy your enemies. Beware, banshees are just as destructive to your troops as the enemies." \n'
text += 'level 2 \n'
text += 'summoning  \n'
text += 'terr -1 \n'
text += 'rebatelvl 5 \n'
text += 'addstring "Banshee"  \n'
text += 'cost 2 400 \n'
text += ' \n'

text += 'newritual "Druid Ritual" \n'
text += 'descr "We are poor druids, but still know to call upon the henge for power."  \n'
text += 'level 2 \n'
text += 'summoning  \n'
text += 'terr 90 \n'
text += 'rebatelvl 5 \n'
text += 'addstring "Rootmonster"  \n'
text += 'cost 2 200 \n'
text += ' \n'

text += 'newritual "Summon Fomorian King"  \n'
text += 'descr "Summon a true Fomorian giant. The Fomorian King is powerful caster and can travel across the sea." \n'
text += 'level 2 \n'
text += 'summoning  \n'
text += 'terr 90 \n'
text += 'rebatelvl 5 \n'
text += 'addstring "c*Fomorian King"  \n'
text += 'cost 2 500 \n'
text += 'cost 0 100 \n'
text += 'free \n'
text += ' \n'

text += 'newritual "Summon Balor" \n'
text += 'descr "Summon a Balor the Evil Eye of Fomoria. Balor is the god of famine and is a powerful caster."  \n'
text += 'level 3 \n'
text += 'summoning  \n'
text += 'terr 90 \n'
text += 'rebatelvl 5 \n'
text += 'addstring "c*Balor"  \n'
text += 'cost 2 1000 \n'
text += 'cost 0 150 \n'
text += 'free \n'
text += ' \n'
}

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
leader = randomItem(team3_3_empty)

text += mymonsterstore
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}


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
text += 'power 30 1 \n'	 
text += 'gathergems \n'	
}
if(shuffle2 === 15){

text += 'gathergems \n'	
}

if(shuffle2 === 16){

text += 'power 0 1 \n'
text += 'gatherherbs \n'	
}
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'

text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_2_empty)	
text += mymonster2store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
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
text += 'power 30 1 \n'	 
text += 'gathergems \n'	
}
if(shuffle2 === 15){

text += 'gathergems \n'	
}
if(shuffle2 === 16){

text += 'power 0 2 \n'
text += 'gatherherbs \n'	
}
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_empty)	
text += mymonster3store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
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
text += 'power 30 1 \n'	 
text += 'gathergems \n'	
}
if(shuffle2 === 15){

text += 'gathergems \n'	
}

if(shuffle2 === 16){

text += 'power 0 3 \n'
text += 'gatherherbs \n'	
}

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'


text += ' \n'

text += 'newclass \n'
text += 'setclassname "'+ mymonster + '" \n'
text += 'class' + descrroll
text += 'clearrec  \n'

shuffle3 = Math.floor(Math.random() * 17) + 1

if(saneshuffle === "swap"){

if(shuffle3 === 1){	
text += 'addunitrec "Longbowman" 100 4 50 0 0 \n' 
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Zweihander" 100 5 50 0 10 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "War Dog" 100 4 25 0 0 \n' 
text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Trebuchet" 100 1 50 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 
text += 'addunitrec "Crossbowman" 5 10 70 0 7 \n' 
text += 'addunitrec "Swordsman" 5 10 70 0 7 \n'
text += 'addunitrec "Trebuchet" 10 2 75 0 75 \n' 
text += 'addcomrec "High Lord" 20 50 10 10 \n' 
text += 'reclimiter "+Hedge Wizard" \n'
text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'

}

if(shuffle3 === 2){	
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 3 && witchcheck === true){	
text += 'addunitrec "Androphag Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Cavalry" 100 5 50 0 5 \n' 
text += 'addcomrec "Androphag Lord" 5 50 10 0 \n'
text += 'addcomrec "Manflayer" 2 70 20 0 \n'
}

if(shuffle3 === 3 && witchcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 4 && baalcheck === true){	
text += 'addunitrec "Ba' + illapp + 'alite Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Ba' + illapp + 'alite Spearman" 100 5 50 0 0 \n'
text += 'addunitrec "Ba' + illapp + 'alite Zealot" 100 5 50 0 5 \n'
text += 'addunitrec "Ba' + illapp + 'alite Heavy infantry" 100 5 50 0 25 \n' 
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle3 === 4 && baalcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addunitrec "Bakemono Archer" 100 5 25 0 1 \n' 
text += 'addunitrec "Bakemono Soldier" 100 5 25 0 1 \n'
text += 'addunitrec "Bakemono Swordsman" 100 5 25 0 3 \n'
text += 'addunitrec "Dai Bakemono" 25 3 50 0 15 \n'
text += 'addunitrec "Dai Bakemono Archer" 25 3 50 0 15 \n'
text += 'addunitrec "O Bakemono" 25 1 25 0 0 \n'
text += 'addunitrec "Bakemono Bowman" 100 5 25 0 0 \n'
text += 'addunitrec "Bakemono Sho" 100 5 25 0 0 \n'
text += 'addcomrec "Bakemono General" 5 50 10 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addunitrec "Barbarian Warrior" 100 7 50 0  0 \n'
text += 'addunitrec "Barbarian Bowman" 100 7 50 0 0 \n'
text += 'addunitrec "Barbarian Swordsman" 100 7 50 0 10 \n'
text += 'addunitrec "Barbarian Cavalry" 100 4 50 0 0 \n'
text += 'addunitrec "Barbarian Lancer" 100 4 50 0 10 \n'
text += 'addunitrec "Barbarian Werebear" 10 1 25 0 0 \n'
text += 'addcomrec  "Spirit Guide" 8 75 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Soothsayer" 8 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Barbarian Leader" 100 25 10 0 \n'
text += 'reclimiter "-Barbarian Leader" \n'
text += 'addcomrec  "Mounted Chief" 10 25 10 0 \n'
text += 'addmercrec "Mounted Scout" 15 1 15 10 0 \n'
text += 'addcomrec  "Crystal Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Crystal Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addunitrec "Crystal Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addcomrec  "Garnet Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Garnet Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addunitrec "Garnet Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addcomrec  "Jade Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Jade Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addunitrec "Jade Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addcomrec  "Onyx Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Onyx Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
text += 'addunitrec "Onyx Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
}

if(shuffle3 === 6 && barbariancheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addunitrec "Veles" 100 5 40 0 0 \n'
text += 'addunitrec "Hastatus" 100 5 45 0 5 \n'
text += 'addunitrec "Princeps" 100 5 50 0 10 \n'
text += 'addunitrec "Princeps Solaris" 100 5 55 0 10 \n'
text += 'reclimiter "+Leo" \n'
text += 'addunitrec "Triarius" 100 5 55 0 20 \n'
text += 'addunitrec "Praetorian Guard" 5 5 60 0 20 \n'

text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Hastatus" 5 10 65 0 5 \n'
text += 'addmercrec "Standard" 50 1 20 0 0 \n'  
text += 'addmercrec "Archer" 20 5 50 0 0 \n'
text += 'addmercrec "Gladiator" 20 2 25 0 0 \n'
text += 'addmercrec "Retiarius" 1 2 25 0 0 \n'

text += 'addcomrec "Centurion" 25 35 10 0 \n'
text += 'addcomrec "Leo" 5 50 20 0 \n'
text += 'addcomrec "Heliodromus" 1 90 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Renata" 5 50 20 0 \n'
text += 'addcomrec "Renatus" 1 110 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Serpent Acolyte" 5 50 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Serpent Priest" 2 90 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Reveler" 5 50 20 0 \n'
text += 'addcomrec "Augur" 5 50 20 0 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	

text += 'addunitrec "Pale One" 100 5 50 0 0 \n'
text += 'addunitrec "Pale One Soldier" 100 5 50 0 5 \n'
text += 'addunitrec "Cavern Guard" 100 5 50 0 20 \n'
text += 'addunitrec "Ancient Hurler" 25 1 40 0 0 \n'
text += 'addunitrec "Ancient Pale One" 25 1 40 0 15 \n'
text += 'addunitrec "Seal Guard" 25 1 50 0 25 \n'

text += 'addcomrec "Ancient Commander" 5 60 20 15 \n'
text += 'addcomrec "Pale One Commander" 10 40 10 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 9 && druidcheck === true){	

text += 'addunitrec "Barechested Slinger" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Swordsman" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Warrior" 100 5 50 0 0 \n'
text += 'addunitrec "Beast Cavalry" 100 5 50 0 5 \n'
text += 'addunitrec "Boar Warrior" 15 4 50 0 10 \n'

text += 'addcomrec "Chieftain" 10 40 10 0 \n'
text += 'addcomrec "Hornblower" 5 25 10 0 \n'
text += 'addcomrec "Vergobret" 5 30 10 0 \n'
}

if(shuffle3 === 9 && druidcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 10 && hoburgcheck === true){	

text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hoburg Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hoburg Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Knight" 100 5 50 0 10 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}


if(shuffle3 === 11 && priestcheck ===true){	

text += 'addunitrec "Tribal Warrior" 100 7 50 0 0 \n'
text += 'addunitrec "Jungle Warrior" 100 6 50 0 0 \n'
text += 'addunitrec "Feathered Warrior" 100 5 50 0 5 \n'
text += 'addunitrec "Jaguar Warrior" 30 5 50 0 0 \n'

}

if(shuffle3 === 11 && priestcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 12 && trollcheck === true){	

text += 'addunitrec  "Goblin" 100 15 50 0 0 \n'
text += 'addunitrec  "Ogre" 100 1 25 0 0 \n'
text += 'addunitrec  "Goblin Spearman" 40 15 50 0 0 \n'
text += 'addunitrec  "Goblin Archer" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin Reaver" 20 7 50 0 10 \n'
text += 'addunitrec  "Rock Troll" 20 1 50 0 60 \n'
text += 'addunitrec  "Troll" 30 1 50 0 20 \n'
text += 'addunitrec  "Forest Troll" 40 1 40 0 10 \n'
text += 'addunitrec  "Hill Giant" 5 1 100 0 0 \n'
text += 'addunitrec  "Ettin" 10 1 75 0 0 \n'
text += 'addcomrec   "Goblin Chieftain" 7 25 20 0 \n'
text += 'addcomrec   "Ogre Chief" 3 35 20 0 \n'
text += 'addcomrec   "Forest Giant" 5 70 20 0 \n'

text += 'addmercrec  "Goblin Murderer" 3 1 10 40 0 \n'
text += 'addcomrec   "Goblin Hero" 3 10 50 0 \n'

}

if(shuffle3 === 12 && trollcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 13 && elcheck === true){

text += 'addunitrec "Spearman" 100 5 50 0 0 \n'	
text += 'addunitrec "Archer" 100 5 50 0 0 \n'
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n' 	
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Temple Guard" 100 5 50 0 5 \n'
text += 'addunitrec "Templar" 100 5 50 0 15  \n'                      
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'

text += 'addcomrec "Missionary" 5 20 10 0 \n'

}

if(shuffle3 === 13 && elcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){
text += 'addunitrec "Dwarf Worker" 100 5 30 0 0 \n'

text += 'addunitrec "Dwarf" 100 5 0 0 20 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Arbarlest" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Outdoor Dwarf" 100 2 10 0 10 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarven Ballista" 100 1 0 0 40  \n'

text += 'addmercrec "Archer" 3 10 150 0 0 \n'                    
text += 'addmercrec "Crossbowman" 3 10 150 0 0 \n' 
text += 'addmercrec "Pikeneer" 3 10 150 0 10 \n'                    
text += 'addmercrec "Pikeneer" 3 20 250 0 10 \n'                    
text += 'addmercrec "Spearman" 3 10 150 0 0 \n'                 
text += 'addmercrec "Swordsman" 3 10 150 0 10 \n'  

text += 'addcomrec "Dwarf Commander" 15 20 10 0 \n'

}

if(shuffle3 === 14 && dwarfcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 15 && homarkcheck === true){
	
text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hobmark Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Hammerer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Pickaneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Markgraf Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hobmark Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Hussar" 100 5 50 0 5 \n'
text += 'addunitrec "Catapult" 100 1 25 0 25 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 16 && dryadcheck === true){

text += 'addunitrec "Satyr " 100 5 50 0 0 \n'	
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'

text += 'addunitrec "Centaur" 100 3 50 0 0 \n'
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 25 3 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'

text += 'addunitrec "Minotaur" 100 3 50 0 0 \n'
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

text += 'addunitrec "Harpy" 100 5 50 0 0 \n'
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'

text += 'addcomrec "Satyr Commander" 10 40 10  0 \n'
text += 'addcomrec "Hoplite Commander" 5 40 10 5 \n'
text += 'addcomrec "Centaur Commander" 5 50 15 5 \n'
text += 'addcomrec "Cataphract Commander" 3 50 15 10 \n'

}

if(shuffle3 === 16 && dryadcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 17){
text += 'addunitrec "Militia" 100 5 50 0 0 \n' 
text += 'addunitrec "Slinger" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Light Cavalry" 100 3 50 0 0 \n'
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Cavalry" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Infantry" 100 5 50 0 25 \n'
text += 'addunitrec "Heavy Spearman" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 

text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "White Wizard" 0 100 100 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Priest" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Commander" 10 40 10 0 \n'
text += 'addcomrec "Mounted Commander" 5 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle2 === 11){
text += 'addcomrec "Oracle of Subterranean Fire" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of Subterranean Waters" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of the Dead" 0 150 30 0 \n'
text += 'templerec \n'
}
if(shuffle2 === 9){
text += 'addcomrec "Sun Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Blood Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Sky Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Rain Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Moon Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Death Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
}
if (shuffle2 === 13){	
text += 'addmercrec "Mirror" 100 1 10 0 0\n'
text += 'addmercrec "Large Mirror" 100 1 25 0 0\n'
text += 'addmercrec "Silver Mirror" 100 1 50 0 0\n'
text += 'addmercrec "Golden Mirror" 100 1 150 0 0\n'
}
if (shuffle2 === 14){	
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30\n'
text += 'reclimiter  "=Dwarf Worker"\n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40\n'
text += 'reclimiter  "=Dwarf Worker"\n'
}
if(shuffle2 === 15){
text += 'addcomrec "Warlock'+ illapp +'s Apprentice" 5 55 20 0 \n'
}

text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'clearstartunits  \n'
if(shuffle3 === 1){	
text += 'addstartunits "Cavalryman" 5 \n'
text += 'addstartunits "Spearman" 6 \n'
text += 'addstartunits "Archer" 5 \n'
}
if(shuffle3 === 2){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 3 && witchcheck === true){	
text += 'addstartunits "Androphag Spearman" 5 \n'
text += 'addstartunits "Androphag Archer" 5 \n'
text += 'addstartunits "Androphag Cavalry" 1 \n'
}
if(shuffle3 === 3 && witchcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 4 && baalcheck === true){	
text += 'addstartunits "Ba' + illapp + 'alite Spearman" 10 \n'
text += 'addstartunits "Ba' + illapp + 'alite Archer" 5 \n'
}

if(shuffle3 === 4 && baalcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addstartunits "Bakemono Spearman" 15 \n'
text += 'addstartunits "Bakemono Sho" 15 \n'
text += 'addstartunits "Bakemono Bowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addstartunits "Barbarian Warrior" 15 \n'
text += 'addstartunits "Barbarian Bowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addstartunits "Velite" 10 \n'
text += 'addstartunits "Hastati" 5 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	
text += 'addstartunits "Pale One" 10 \n'
text += 'addstartunits "Pale One Soldier" 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 9 && druidcheck === true){	
text += 'addstartunits "Barechested Warrior" 10 \n'
text += 'addstartunits "Barechested Slinger" 5 \n'
}

if(shuffle3 === 9 && druidcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 10 && hoburgcheck ===true){	
text += 'addstartunits "Hoburg Crossbow" 10 \n'
text += 'addstartunits "Hoburg Defender" 5 \n'
text += 'addstartunits "Hoburg Soldier" 10 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 11 && priestcheck === true){	
text += 'addstartunits "Tribal Warrior" 10 \n'
text += 'addstartunits "Jungle Warrior" 10 \n'
}

if(shuffle3 === 11 && priestcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 12 && trollcheck === true){	
text += 'addstartunits "Goblin" 15 \n'
text += 'addstartunits "Rock Troll" 1 \n'
}

if(shuffle3 === 12 && trollcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 13 && elcheck === true){	
text += 'addstartunits "Spearman" 10 \n'
text += 'addstartunits "Halberdier" 8 \n'
}

if(shuffle3 === 13 && elcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){	
text += 'addstartunits "Dwarf Worker" 12 \n'
text += 'addstartunits "Dwarf" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 15 && homarkcheck === true){	
text += 'addstartunits "Hobmark Soldier" 10 \n'
text += 'addstartunits "Hobmark Defender" 5 \n'
text += 'addstartunits "Hobmark Crossbow" 10 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 16 && dryadcheck === true){	
text += 'addstartunits "Satyr Warrior" 5 \n'
text += 'addstartunits "Satyr Javelinist" 5 \n'
text += 'addstartunits "Harpy" 1 \n'
}

if(shuffle3 === 16 && dryadcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 17){	
text += 'addstartunits "Militia" 10 \n'
text += 'addstartunits "Slinger" 10 \n'
}
}

if(saneshuffle !== "swap"){
	
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'
startstore = roll
startstore3 = roll

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'
startstore2 = roll

limit = limit - 2 

if(limit <= 0){
limit = 1	
}


while (x <= limit){	
x++
coin = Math.floor(Math.random() * 2)
if(coin === 1){
roll = Math.floor(Math.random() * team1_melee_empty.length)
startstore3 = roll
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'

if (team1_melee_empty[roll].name=== "Satyr"){
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
}
if (team1_melee_empty[roll].name === "Centaur"){
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'
}
if (team1_melee_empty[roll].name === "Minotaur"){
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

}
if (team1_melee_empty[roll].name === "Harpy"){
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'
}
}
if(coin === 0){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'


if (team1_ranged_empty[roll].name === "Centauride"){
text += 'addunitrec "Centauride Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Crossbow" 100 3 25 0 50 \n'
text += 'reclimiter "=Centauride" \n'
}
}
}



while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2_empty.length)
text += 'addcomrec "' + team2_empty[roll].name + '" '+ team2_empty[roll].chance + ' ' + team2_empty[roll].gold + ' ' + team2_empty[roll].goldplus + ' ' + team2_empty[roll].iron + ' \n'

}
if(shuffle2 === 11){
text += 'addcomrec "Oracle of Subterranean Fire" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of Subterranean Waters" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of the Dead" 0 150 30 0 \n'
text += 'templerec \n'
}
if(shuffle2 === 9){
text += 'addcomrec "Sun Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Blood Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Sky Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Rain Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Moon Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Death Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
}
if (shuffle2 === 13){	
text += 'addmercrec "Mirror" 100 1 10 0 0\n'
text += 'addmercrec "Large Mirror" 100 1 25 0 0\n'
text += 'addmercrec "Silver Mirror" 100 1 50 0 0\n'
text += 'addmercrec "Golden Mirror" 100 1 150 0 0\n'
}
if (shuffle2 === 14){	
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30\n'
text += 'reclimiter  "=Dwarf Worker"\n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40\n'
text += 'reclimiter  "=Dwarf Worker"\n'
}
if(shuffle2 === 15){
text += 'addcomrec "Warlock'+ illapp +'s Apprentice" 5 55 20 0 \n'
}


text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'nostdtroops  \n'

text += 'clearstartunits  \n'
hasunits = 0

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addstartunits "' + team1_melee_empty[startstore2].name + '" '+ team1_melee_empty[startstore2].num +' \n'
hasunits += team1_melee_empty[startstore2].num

roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addstartunits "' + team1_ranged_empty[startstore].name + '" '+ team1_ranged_empty[startstore].num +' \n'
hasunits += team1_ranged_empty[startstore].num

if(hasunits < 9){
roll = Math.floor(Math.random() * team1_melee_empty.length)	
text += 'addstartunits "' + team1_melee_empty[startstore3].name + '" '+ team1_melee_empty[startstore3].num  +' \n'
hasunits += team1_melee_empty[startstore3].num
}
}
roll = Math.floor(Math.random() *  team2_empty.length)	

rit2 = document.getElementById("rit2").checked;	

if(rit2 === false){	
text += 'setmaincom "' + mymonster + '"  \n'
}
if(rit2 === true){	
text += 'setmaincom "' + mymonster2 + '"  \n'
}
text += 'addstartcom "' + team2_empty[roll].name + '"  \n'
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
if(shuffle2 === 6){
text += 'addstartterr 70 \n'	
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

text += 'newmonster "Ormr" \n'	
text += 'descr "Who knows what horrors dwell in the random chaos of Elysium?" \n'	
text += 'copystats "Troglodyte" \n'	
text += 'hp 150\n'
text += 'mr 9 \n'
text += 'str 8 \n'
text += 'mor 20 \n'
text += 'spr1 "Randomclass/2800_1.tga" \n'
text += 'spr2 "Randomclass/2800_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 25 42 \n'
text += 'clearspec \n'
text += 'water \n'
text += 'fastheal \n'
text += 'coldblood \n'
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

text += 'newmonster "Weirdo" \n'
text += 'name "Weirdo" \n'
text += 'descr "" \n'
text += 'copystats "Strange Thing" \n'
text += 'copyspr "Strange Thing" \n'
text += 'clearmove \n'
text += 'slow \n'
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
text += 'trample 2 \n'
text += 'tramplexsize 1\n'
text += 'rank -1 \n'
text += ' \n'

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
text += 'clearspec \n'
text += 'allitemslots \n'
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

text += 'newmonster "Miracle Eye" \n'
text += 'name "Miracle Eye" \n'
text += 'descr "" \n'
text += 'copystats "Floating Eye" \n'
text += 'hp 8 \n'
text += 'copyspr "Floating Eye" \n'
text += 'spellweaponbonus 36 1 \n'
text += 'clearspec \n'
text += 'ethereal \n'
text += 'spiritsight \n'
text += 'clearmove \n'
text += 'float \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Preacher" \n'
text += 'name "Preacher" \n'
text += 'descr "" \n'
text += 'copystats "Saint" \n'
text += 'copyspr "Saint" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Missionary" \n'
text += 'name "Missionary" \n'
text += 'descr "" \n'
text += 'copystats "Pilgrim" \n'
text += 'copyspr "Pilgrim" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Inquisitor Leader" \n'
text += 'name "Inquisitor Leader" \n'
text += 'descr "" \n'
text += 'copystats "Inquisitor" \n'
text += 'copyspr "Inquisitor" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "High Inquisitor Leader" \n'
text += 'name "Hign Inquisitor Leader" \n'
text += 'descr "" \n'
text += 'copystats "High Inquisitor" \n'
text += 'copyspr "High Inquisitor" \n'
text += 'clearspec \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Angel Captain" \n'
text += 'name "Angel Captain" \n'
text += 'descr "" \n'
text += 'copystats "Angel" \n'
text += 'copyspr "Angel" \n'
text += 'clearspec \n'
text += 'awe 1 \n'
text += 'allitemslots \n'
text += 'clearmove \n'
text += 'flying \n'
text += 'rank -1 \n'
text += ' \n'

text += 'newmonster "Man Trap" \n'
text += 'name "Man Trap" \n'
text += 'descr " A carnivorous plant. Its feet-like roots allow it to move around as it looks for victims. When a victom comes within range, the Man Trap strikes out with its deadly teeth. The Man Trap moves slowly, but its attack is nothing to be laughed at. If used wisely, the long-lasting Man Trap can be very helpful." \n'
text += 'copystats "Venus Trap" \n'
text += 'copyspr "Venus Trap" \n'
text += 'clearmove \n'
text += 'slow \n'
text += ' \n'

text += 'newmonster "Stone Trap" \n'
text += 'name "Stone Trap" \n'
text += 'descr "" \n'
text += 'copystats "Living Boulder" \n'
text += 'copyspr "Living Boulder" \n'
text += 'clearmove \n'
text += 'slow \n'
text += ' \n'

text += 'newmonster "Moldwynd" \n'
text += 'name "Moldwynd" \n'
text += 'descr "" \n'
text += 'copystats "Troglodyte" \n'
text += 'hp 22 \n'
text += 'mr 5 \n'
text += 'spr1 "Randomclass/ugly_1.tga" \n'
text += 'spr2 "Randomclass/ugly_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 5 "Bite" \n'
text += 'clearspec \n'
text += 'spellweapon 58 1 \n'
text += 'flying \n'
text += 'rank 0	\n'
text += ' \n'	


text += 'newmonster "Headless Horseman" \n'
text += 'name "Headless Horseman" \n'
text += 'descr "Only in the darkest dreams of the few remaining Nemedian elders do the memories of the Nuckelavee roam free. Being a demon so foul, they brought death to world in the wake of their thunderous hooves. The Nuckelavee were both powerful demons and fey of nature, hailing the northern shores of the world. Considered cruel even among the vindictive dryads and hags, the Nucklelavee would eagerly kill and torture all those who despoiled various sacred bodies of water. Though long banished from both the mortal planes and the afterlife, the remains of their legacy live on in the blackest of forests. Only the Fomorians dare bring back these deadly monsters of yore to the world of living so that they may ride and slaughter again. Fortunately for the mortals of Elysium, the Fomorians are poor mages, and cannot fully restore the demon to its full glory. Rather, the Nuckelavee is returned in the form of a headless black rider, now called to prowl the forests. The headless horseman, though he bears a mere fraction of the Nuckelavee soul, is free to hunt and play amongst the lonely backroads." \n'
text += 'copystats "Spectral Horseman" \n'
text += 'spr1 "Randomclass/headless_1.tga" \n'
text += 'spr2 "Randomclass/headless_2.tga" \n'
text += 'fear 2 \n'
text += 'stupid \n'
text += 'forest2 \n'
text += 'regeneration \n'
text += 'stealth \n'
text += 'noleader \n'
 text += '\n'
text += 'newmonster "Barghest" \n'
text += 'name "Barghest" \n'
text += 'descr "Barghest are huge, black fey hounds from the Fomorian plains. Some say they are the manifestation of darkness and ill fates. Peasants living near overgrown forests or bleak highlands would do well to stay indoors after night, less the black dog of the moors develop the urge to investigate the encroachments of man." \n'
text += 'copystats "Wolf" \n'
text += 'hp 25 \n'
text += 'str 6 \n'
text += 'mr 5 \n'
text += 'spr1 "Randomclass/1768_1.tga" \n'
text += 'spr2 "Randomclass/1768_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 9 42 \n'
text += 'spiritsight \n'
text += 'animal \n'
text += 'stealth \n'
text += 'regeneration \n'
text += 'forest2 \n'
text += 'stupid \n'
 text += '\n'

text += 'newmonster "Black Dog"\n'
text += 'name "Black Dog"\n'
text += 'descr "Black dogs are huge fey hounds from the Fomorian plains. Some say they are the manifestation of darkness and ill fates. Peasants living near overgrown forests or bleak highlands would do well to stay indoors after night, less the black dog of the moors develop the urge to investigate the encroachments of man."\n'
text += 'copystats "Wolf"\n'
text += 'hp 7\n'
text += 'mr 4\n'
text += 'spr1 "Randomclass/1769_1.tga"\n'
text += 'spr2 "Randomclass/1769_2.tga"\n'
text += 'spiritsight\n'
text += 'animal\n'
text += 'forest2\n'
text += 'stealth\n'
text += '\n'

text += 'newmonster "Cath Sith"\n'
text += 'name "Cath Sith"\n'
text += 'descr "A witch who dares assume the form of a cat nine times bears the risk of becoming a Cath Sith permanently. Cath Sith are black fey cats of the highlands and moors. Although they are not as dire as the black dogs of the moors, they are still powerful masters of magic, regardless of their fluffy new form. Cath Sith often mean to do harm, such as killing a farmers hens, or rubbing up against a millers leg, cursing him to contract the plague the very next day. However, a Cath Sith is not completely heartless, one could possibly be appeased by gifts of gold or food. A lost little boy in the moors might even find his way back to his parents if he catches the eye of a lonely Cath Sith."\n'
text += 'copystats "Black Cat Familiar"\n'
text += 'copyspr "Black Cat Familiar"\n'
text += 'hp 15\n'
text += 'mor 7\n'
text += 'mr 8\n'
text += 'clearweapons\n'
text += 'meleeweapon 4 "Claw"\n'
text += 'spellweaponbonus 37 2\n'
text += 'spellweaponbonus 40 2\n'
text += 'stealth\n'
text += 'forest2\n'
text += 'stupid\n'
text += 'lucky\n'
text += '\n'

text += 'newmonster "Witch Elm"\n'
text += 'name "Witch Elm"\n'
text += 'descr "Every once in awhile, a terrified peasant will stumble upon the corpse of a young girl in the hollow of an Elm tree trunk. Though perplexing, some have have theorized that this the work of witch covens dumping failed apprentices in some form of execution. More likely, it is the work of the Fomorians stealing children for their druidic spells. Fomorians can increase their power over the land if they plant the body of a budding young witch in the trunk of a rotting tree and curse its roots with toads blood. It is unknown why some Witch Elms fail to inflict any form of malady upon their intended target. Perhaps the Formorians are unable to tell which girls are developing into witchs, so they simply blindly kidnap and kill a random child for the ritual, hoping for some form of success."\n'
text += 'copystats "Shadow Tree"\n'
text += 'copyspr "Shadow Tree"\n'
text += 'stealth\n'
text += 'spawn1d6mon 35\n'
text += '\n'

text += 'newmonster "Wild Black Dog"\n'
text += 'name "Wild Black Dog"\n'
text += 'descr "Black dogs are huge fey hounds from the Fomorian plains. Some say they are the manifestation of darkness and ill fates. Peasants living near overgrown forests or bleak highlands would do well to stay indoors after night, less the black dog of the moors develop the urge to investigate the encroachments of man."\n'
text += 'copystats "Wolf"\n'
text += 'hp 15\n'
text += 'mr 4\n'
text += 'spr1 "Randomclass/1769_1.tga"\n'
text += 'spr2 "Randomclass/1769_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 8 "Bite"\n'
text += 'spiritsight\n'
text += 'animal\n'
text += 'stealth\n'
text += 'stupid\n'
text += 'regeneration\n'
text += '\n'

text += 'newmonster "Fomorian King"\n'
text += 'name "Fomorian King"\n'
text += 'descr "The Fomorian King is a king of the giants who once guarded the realms of the watery dead. Under their rule the Fomorians emerged from the depths and sailed to distant shores to plunder and ravage the land with plague and gale. Punished for their sins, the Fomorians were banished and forced to find a new home. The Fomorian Kings are powerful storm crafters and death mages. They protected their land from the invading Patholonians and their descendants with plagues and further doomed their race. Fomorian Kings are cursed with a monsterous appearance and have only one eye. They are formidable shipwrights and can enter the ocean realms."\n'
text += 'copystats "Hill Giant"\n'
text += 'armor 1\n'
text += 'mr 7\n'
text += 'spr1 "Randomclass/1803_1.tga"\n'
text += 'spr2 "Randomclass/1803_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 15 "Spear"\n'
text += 'rangedweaponbonus 15 "Javelin"\n'
text += 'spellweapon 5 2\n'
text += 'spellweapon 59 3\n'
text += 'power 0 3\n'
text += 'shield\n'
text += 'badsight\n'
text += 'spiritsight\n'
text += 'water\n'
text += 'rank -1\n'
text += 'nametype 42\n'
text += '\n'

text += 'newmonster "Balor"\n'
text += 'name "Balor"\n'
text += 'descr "The Eye of Balor is dreadful curse upon the land. Where ever the lumbering giant goes, his baleful gaze falls upon the enemies of his divine rule. Forest fires and droughts are all attributed to the beams firing from his cursed eye."\n'
text += 'copystats "Hill Giant"\n'
text += 'hp 400\n'
text += 'armor 3\n'
text += 'mr 7\n'
text += 'spr1 "Randomclass/1899_1.tga"\n'
text += 'spr2 "Randomclass/1899_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 20 "Spear"\n'
text += 'rangedweaponbonus 20 "Javelin"\n'
text += 'spellweapon 5 2\n'
text += 'spellweapon 59 3\n'
text += 'spellweapon 50 3\n'
text += 'power 0 3\n'
text += 'shield\n'
text += 'badsight\n'
text += 'spiritsight\n'
text += 'water\n'
text += 'rank -1\n'
text += 'nametype 42\n'
text += '\n'

text += 'newmonster "Nemedian Sorceress"\n'
text += 'name "Nemedian Sorceress"\n'
text += 'descr "The Nemedians have merged the old magical traditions of their Partholonian ancestors and the magic of their Fomorian masters. Sorceresses skilled in death and air magic hide in the dark spires of Rath Chimbalth where they summon whispering shades of mist and darkness."\n'
text += 'copystats "Archer"\n'
text += 'armor 0\n'
text += 'mr 4\n'
text += 'spr1 "Randomclass/1792_1.tga"\n'
text += 'spr2 "Randomclass/1792_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 0 "Staff"\n'
text += 'spellweapon 43 1\n'
text += 'spellweapon 59 2\n'
text += 'spiritsight\n'
text += 'rank -1\n'
text += 'nametype 43\n'
text += '\n'

text += 'newmonster "Nemedian Warrior"\n'
text += 'name "Nemedian Warrior"\n'
text += 'descr "Nemedians are the descendants of the Sauromatian Partholonians. They are a highly magical race far surperior to ordinary men, but they were few in number. With the arrival of the Witch Kings, they left Sauromatia for a better place. The Nemedians followed in the footsteps of their Partolonian ancestors and arrived in the rich land of the Fomorians. Soon war broke out. The Nemedians were victorious until the plague that once eradicated the Partholonians struck them a wiped out half the population. The war ended with the subjugation of the Nemedians. After a bloody rebellion, most of them fled the land, but a few of them still linger in the old fortress of Rath Chimbalth."\n'
text += 'copystats "Heavy Infantry"\n'
text += 'hp 10\n'
text += 'spr1 "Randomclass/1790_1.tga"\n'
text += 'spr2 "Randomclass/1790_2.tga"\n'
text += 'clearweapons\n'
text += 'meleeweapon 5 "Golden Spear"\n'
text += 'meleeweapon 2 "Javelin"\n'
text += 'shield\n'
text += 'spiritsight\n'
text += '\n'

text += 'newweapon "Morrigan Spear" \n'
text += 'clearwspec \n'
text += 'trgrank 1 \n'
text += 'range 1 \n'
text += 'dmgtype 7 \n'
text += 'dmg 0 \n'
text += 'aoe 1 \n'
text += 'sound 1 \n'
text += 'init 3 \n'
text += 'dispossess \n'

text += 'newmonster "Morrigan" \n'
text += 'name "Morrigan" \n'
text += 'descr "The Morrigans are heralds of death, collectors of souls, and bringers of strife. They are the fates of the battleground, weaving threads of entrails with arrows for needles. Their chant colors the skies red before battle. In the shapes of crows, they pick out the eyes of the dead. The Morrigans are horrible beings of death and destruction. They appear as grisly warrior women armed with spears enchanted to kill." \n'
text += 'copystats "Spearman" \n'
text += 'hp 35 \n'
text += 'armor 1 \n'
text += 'mr 5 \n'
text += 'mor 30 \n'
text += 'spr1 "Randomclass/1821_1.tga" \n'
text += 'spr2 "Randomclass/1821_2.tga" \n'
text += 'clearweapons \n'
text += 'meleeweapon 15 "Morrigan Spear" \n'
text += 'shield \n'
text += 'spiritsight \n'
text += 'stealth \n'
text += 'fear 1 \n'
text += 'poisonres 25 \n'
text += 'undead \n'
text += 'flying \n'	
text += '\n'

text += 'newmonster "Spine of Babylon"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 25 \n'
text += 'mr 4 \n'
text += 'str 5 \n'
text += 'armor 1 \n'
text += 'mor 15 \n'
text += 'spr1 "Randomclass/qi.tga"  \n'
text += 'spr2 "Randomclass/qi2.tga"  \n'
text += 'clearweapons  \n'
text += 'rangedweaponbonus 8 "Flick Barb" \n'
text += 'spellweaponbonus 50 1  \n'
text += 'rangedweaponbonus 1 "Charm"  \n'
text += 'rangedweaponbonus 1 "Weakness"  \n'
text += 'clearspec \n'
text += 'rank -1  \n'
text += ' \n'

text += 'newmonster "Amanra"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 18 \n'
text += 'mr 9 \n'
text += 'str 4 \n'
text += 'armor 0 \n'
text += 'mor 15 \n'
text += 'spr1 "Randomclass/kitty_1.tga"  \n'
text += 'spr2 "Randomclass/kitty_2.tga"  \n'
text += 'clearweapons  \n'
text += 'meleeweapon 2 "Bite" \n'
text += 'spellweaponbonus 38 2 \n'
text += 'spellweaponbonus 6 1   \n'
text += 'clearspec \n'
text += 'rank -1  \n'
text += ' \n'

text += 'newmonster "Ophanlot"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 35 \n'
text += 'mr 7 \n'
text += 'str 4 \n'
text += 'armor 2 \n'
text += 'mor 15 \n'
text += 'spr1 "Randomclass/kitty_3.tga"  \n'
text += 'spr2 "Randomclass/kitty_4.tga"  \n'
text += 'clearweapons  \n'
text += 'meleeweapon 10 "Bite" \n'
text += 'rangedweapon 2 "Invulnerability" \n'
text += 'spellweaponbonus 49 2   \n'
text += 'clearspec \n'
text += 'holy \n'
text += 'rank 1  \n'
text += ' \n'

text += 'newmonster "Evil Toy"  \n'
text += 'descr ""  \n'
text += 'copystats "Ogre"  \n'
text += 'hp 6 \n'
text += 'mr 7 \n'
text += 'str 4 \n'
text += 'armor 0 \n'
text += 'mor 8 \n'
text += 'spr1 "Randomclass/teddy_1.tga"  \n'
text += 'spr2 "Randomclass/teddy_2.tga"  \n'
text += 'clearweapons  \n'
text += 'meleeweapon 6 "Bite" \n'
text += 'clearspec \n'
text += 'float \n'
text += 'inanimate \n'
text += 'poisonres 100 \n'
text += 'fireres -50 \n'
text += 'bluntres \n'
text += 'stealth \n'
text += 'rank 1   \n'
text += ' \n'

text += 'newmonster "Convulser"  \n'
text += 'descr ""  \n'
text += 'copystats "Maker of Ruins"  \n'
text += 'hp 180 \n'
text += 'mr 5 \n'
text += 'str 8 \n'
text += 'armor 1 \n'
text += 'mor 15 \n'
text += 'copyspr "Maker of Ruins" \n'
text += 'clearweapons  \n'
text += 'meleeweapon 1 "Earthquake" \n'
text += 'meleeweapon 20 "Crush"   \n'
text += 'clearspec \n'
text += 'spiritsight \n'
text += 'fireres 50 \n'
text += 'coldres 50 \n'
text += 'huge \n'
text += 'slow \n'
text += 'trample 5 \n'
text += ' \n'

text += 'newmonster "Plague Rat" \n'
text += 'name "Plague Rat" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'spr1 "Randomclass/rat_1.tga"  \n'
text += 'spr2 "Randomclass/rat_2.tga" \n'
text += 'hp 3 \n'
text += 'str 3 \n'
text += 'armor 0 \n'
text += 'mor 4 \n'
text += 'mr 7 \n'
text += 'clearweapons \n'
text += 'meleeweapon 4 "Poison Cloud"  \n'
text += 'clearspec \n'
text += 'poisonexpl 4 \n'
text += 'poisonres 100 \n'
text += 'diseaseres \n'
text += ' \n'


text += 'newmonster "Monster" \n'
text += 'name "Monster" \n'
text += 'descr "" \n'
text += 'copystats "Spearman" \n'
text += 'spr1 "Randomclass/mon4.tga"  \n'
text += 'spr2 "Randomclass/mon5.tga" \n'
text += 'hp 10 \n'
text += 'str 4 \n'
text += 'armor 0 \n'
text += 'mor 4 \n'
text += 'mr 7 \n'
text += 'clearweapons \n'
text += 'meleeweapon 5 "Claw"  \n'
text += 'clearspec \n'
text += ' \n'



descrroll =	'descr "' + randomItem(team9) + ' ' + randomItem(team10) + ' ' + randomItem(team11) + ' ' + randomItem(team12) + '" \n'

x = 0
y = 0
z = 0
w = 0
v = 0
unitnumber = parseInt(document.getElementById("unitnumber").value, 10);
comnumber = parseInt(document.getElementById("comnumber").value, 10);
animalcheck = document.getElementById("animalcheck").checked;	
druidcheck = document.getElementById("druidcheck").checked;
trollcheck = document.getElementById("trollcheck").checked;
elcheck = document.getElementById("elcheck").checked;
bakemonocheck = document.getElementById("bakemonocheck").checked;
barbariancheck = document.getElementById("barbariancheck").checked;
hoburgcheck = document.getElementById("hoburgcheck").checked;
dwarfcheck = document.getElementById("dwarfcheck").checked;
dryadcheck = document.getElementById("dryadcheck").checked;
cultcheck = document.getElementById("cultcheck").checked;
enchantercheck = document.getElementById("enchantercheck").checked;
baalcheck = document.getElementById("baalcheck").checked;
paleonecheck = document.getElementById("paleonecheck").checked;
homarkcheck = document.getElementById("homarkcheck").checked;
warlockcheck = document.getElementById("warlockcheck").checked;
undeadcheck = document.getElementById("undeadcheck").checked;
demoncheck = document.getElementById("demoncheck").checked;
priestcheck = document.getElementById("priestcheck").checked;
senatorcheck = document.getElementById("senatorcheck").checked;
witchcheck = document.getElementById("witchcheck").checked;
weirdcheck = document.getElementById("weirdcheck").checked;
pokemon = document.getElementById("pokemon").checked;
saneshuffle = document.getElementById("saneshuffle").value;

let team1_melee_empty = [
	{name: "Spearman", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Swordsman", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Heavy Infantry", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Bandit", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Halberdier", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Pikeneer", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "War Dog", num: 4, gold: 25, iron: 0, chance: 100},	
	{name: "Zweihander", num: 5, gold: 50, iron: 10, chance: 100},
	{name: "Militia", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Heavy Spearman", num: 5, gold: 50, iron: 25, chance: 100},
	{name: "Light Cavalry", num: 4, gold: 50, iron: 0, chance: 100},
	{name: "Heavy Cavalry", num: 4, gold: 50, iron: 20, chance: 100},
	{name: "Lion Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "Hyena Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
	{name: "War Elephant", num: 1, gold: 65, iron: 0, chance: 10},		
	{name: "Wolf Tribe Warrior", num: 5, gold: 50, iron: 0, chance: 100},	
]
let team1_ranged_empty = [
	{name: "Crossbowman", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Slinger", num: 5, gold: 50, iron: 5, chance: 100},
	{name: "Tower Guard", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Archer", num: 5, gold: 50, iron: 5, chance: 100},	
	{name: "Scout", num: 5, gold: 50, iron: 0, chance: 100},
	{name: "Catapult", num: 1, gold: 25, iron: 50, chance: 100},	
	{name: "Trebuchet", num: 1, gold: 50, iron: 50, chance: 100},
	{name: "Ballista", num: 2, gold: 25, iron: 50, chance: 100},	
]	
let team2_empty = [
	{name: "Captain", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Commander", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Mounted Commander", gold: 40, iron: 0, chance: 10, goldplus: 10},
	{name: "Priest", gold: 50, iron: 0, chance: 5, goldplus: 10},
	{name: "Alchemist", gold: 40, iron: 0, chance: 10, goldplus: 5},
	{name: "Court Mage", gold: 40, iron: 0, chance: 10, goldplus: 5},
	{name: "High Lord", gold: 50, iron: 0, chance: 10, goldplus: 5},
	{name: "Monk", gold: 40, iron: 0, chance: 10, goldplus: 5},	
]
let team3_empty = [
	"Old Wizard","White Wizard","Dark Wizard","Golden Wizard","King"	
]
let team3_2_empty = [
	"Animist","Astrologer","Pyromancer","Sea Father","Ice Druid","War Elephant"
]
let team3_3_empty = [
	"Spearman","Captain","Priest","Mounted Commander","Commander","Hedge Wizard","Monk","Court Mage",
	"Knight","Scout","Alchemist","Princess","Assassin","Lion King"
]


if(animalcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_animal)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_animal)
team2_empty = team2_empty.concat(team2_animal)
team3_empty = team3_empty.concat(team3_animal)
team3_2_empty = team3_2_empty.concat(team3_2_animal)
team3_3_empty = team3_3_empty.concat(team3_3_animal)
}
if(trollcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_troll)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_troll)
team2_empty = team2_empty.concat(team2_troll)
team3_empty = team3_empty.concat(team3_troll)
team3_2_empty = team3_2_empty.concat(team3_2_troll)
team3_3_empty = team3_3_empty.concat(team3_3_troll)
}
if(elcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_el)
team2_empty = team2_empty.concat(team2_el)
team3_2_empty = team3_2_empty.concat(team3_2_el)
team3_3_empty = team3_3_empty.concat(team3_3_el)

}
if(bakemonocheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_bakemono)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_bakemono)
team2_empty = team2_empty.concat(team2_bakemono)
team3_empty = team3_empty.concat(team3_bakemono)
team3_2_empty = team3_2_empty.concat(team3_2_bakemono)
team3_3_empty = team3_3_empty.concat(team3_3_bakemono)
}
if(barbariancheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_barbarian)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_barbarian)
team2_empty = team2_empty.concat(team2_barbarian)
team3_3_empty = team3_3_empty.concat(team3_3_barbarian)
}
if(dwarfcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_dwarf)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_dwarf)
team2_empty = team2_empty.concat(team2_dwarf)
team3_2_empty = team3_2_empty.concat(team3_2_dwarf)
team3_3_empty = team3_3_empty.concat(team3_3_dwarf)
}

if(druidcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_druid)
team2_empty = team2_empty.concat(team2_druid)
team3_2_empty = team3_2_empty.concat(team3_2_druid)
team3_3_empty = team3_3_empty.concat(team3_3_druid)

}

if(hoburgcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_hoburg)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_hoburg)
team3_empty = team3_empty.concat(team3_hoburg)
team3_3_empty = team3_3_empty.concat(team3_3_hoburg)
}
if(dryadcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_dryad)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_dryad)
team2_empty = team2_empty.concat(team2_dryad)
team3_2_empty = team3_2_empty.concat(team3_2_dryad)
team3_3_empty = team3_3_empty.concat(team3_3_dryad)
}
if(cultcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_cult)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_cult)
team2_empty = team2_empty.concat(team2_cult)
team3_2_empty = team3_2_empty.concat(team3_2_cult)
team3_3_empty = team3_3_empty.concat(team3_3_cult)
}

if(enchantercheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_enchanter)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_enchanter)
team2_empty = team2_empty.concat(team2_enchanter)
team3_empty = team3_empty.concat(team3_enchanter)
team3_2_empty = team3_2_empty.concat(team3_2_enchanter)
team3_3_empty = team3_3_empty.concat(team3_3_enchanter)
}

if(baalcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_baal)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_baal)
team3_empty = team3_empty.concat(team3_baal)
team3_2_empty = team3_2_empty.concat(team3_2_baal)
team3_3_empty = team3_3_empty.concat(team3_3_baal)
}

if(paleonecheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_paleone)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_paleone)
team2_empty = team2_empty.concat(team2_paleone)
team3_empty = team3_empty.concat(team3_paleone)
team3_2_empty = team3_2_empty.concat(team3_2_paleone)
team3_3_empty = team3_3_empty.concat(team3_3_paleone)
}

if(homarkcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_homark)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_homark)
team3_3_empty = team3_3_empty.concat(team3_3_homark)
}
if(warlockcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_warlock)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_warlock)
team2_empty = team2_empty.concat(team2_warlock)
team3_empty = team3_empty.concat(team3_warlock)
team3_2_empty = team3_2_empty.concat(team3_2_warlock)
team3_3_empty = team3_3_empty.concat(team3_3_warlock)
}

if(senatorcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_senator)
team2_empty = team2_empty.concat(team2_senator)
team3_2_empty = team3_2_empty.concat(team3_2_senator)
team3_3_empty = team3_3_empty.concat(team3_3_senator)
}

if(undeadcheck === true){	
team3_empty = team3_empty.concat(team3_undead)
team3_2_empty = team3_2_empty.concat(team3_2_undead)
team3_3_empty = team3_3_empty.concat(team3_3_undead)
}

if(demoncheck === true){
team1_melee_empty = team1_melee_empty.concat(team1_melee_demon)	
team3_empty = team3_empty.concat(team3_demon)
team3_2_empty = team3_2_empty.concat(team3_2_demon)
team3_3_empty = team3_3_empty.concat(team3_3_demon)
}

if(weirdcheck === true){	
team1_melee_empty = team1_melee_empty.concat(team1_melee_weird)
team1_ranged_empty = team1_ranged_empty.concat(team1_ranged_weird)
team2_empty = team2_empty.concat(team2_weird)
team3_empty = team3_empty.concat(team3_weird)
team3_2_empty = team3_2_empty.concat(team3_2_weird)
team3_3_empty = team3_3_empty.concat(team3_3_weird)
}

if(pokemon === false){	
team3_2_empty = team3_2_empty.concat(team3_3_empty)
team3_empty = team3_empty.concat(team3_2_empty)
}

limit = (Math.floor(Math.random() * unitnumber)) + 1
limit2 = Math.floor(Math.random() * comnumber) + 1
limit3 = Math.floor(Math.random() * 4)

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
leader = randomItem(team3_3_empty)

text += mymonsterstore
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 6 1 \n'		

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_2_empty)	
text += mymonster2store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 6 2 \n'
	
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_empty)	
text += mymonster3store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 6 3 \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'

text += ' \n'

text += 'selectclass 1 \n'
text += 'clearrec  \n'

shuffle3 = Math.floor(Math.random() * 17) + 1

if(saneshuffle === "swap"){

if(shuffle3 === 1){	
text += 'addunitrec "Longbowman" 100 4 50 0 0 \n' 
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Zweihander" 100 5 50 0 10 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "War Dog" 100 4 25 0 0 \n' 
text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Trebuchet" 100 1 50 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 
text += 'addunitrec "Crossbowman" 5 10 70 0 7 \n' 
text += 'addunitrec "Swordsman" 5 10 70 0 7 \n'
text += 'addunitrec "Trebuchet" 10 2 75 0 75 \n' 
text += 'addcomrec "High Lord" 20 50 10 10 \n' 
text += 'reclimiter "+Hedge Wizard" \n'
text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'

}

if(shuffle3 === 2){	
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 3 && witchcheck === true){	
text += 'addunitrec "Androphag Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Cavalry" 100 5 50 0 5 \n' 
text += 'addcomrec "Androphag Lord" 5 50 10 0 \n'
text += 'addcomrec "Manflayer" 2 70 20 0 \n'
}

if(shuffle3 === 3 && witchcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 4 && baalcheck === true){	
text += 'addunitrec "Ba' + illapp + 'alite Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Ba' + illapp + 'alite Spearman" 100 5 50 0 0 \n'
text += 'addunitrec "Ba' + illapp + 'alite Zealot" 100 5 50 0 5 \n'
text += 'addunitrec "Ba' + illapp + 'alite Heavy infantry" 100 5 50 0 25 \n' 
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle3 === 4 && baalcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addunitrec "Bakemono Archer" 100 5 25 0 1 \n' 
text += 'addunitrec "Bakemono Soldier" 100 5 25 0 1 \n'
text += 'addunitrec "Bakemono Swordsman" 100 5 25 0 3 \n'
text += 'addunitrec "Dai Bakemono" 25 3 50 0 15 \n'
text += 'addunitrec "Dai Bakemono Archer" 25 3 50 0 15 \n'
text += 'addunitrec "O Bakemono" 25 1 25 0 0 \n'
text += 'addunitrec "Bakemono Bowman" 100 5 25 0 0 \n'
text += 'addunitrec "Bakemono Sho" 100 5 25 0 0 \n'
text += 'addcomrec "Bakemono General" 5 50 10 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addunitrec "Barbarian Warrior" 100 7 50 0  0 \n'
text += 'addunitrec "Barbarian Bowman" 100 7 50 0 0 \n'
text += 'addunitrec "Barbarian Swordsman" 100 7 50 0 10 \n'
text += 'addunitrec "Barbarian Cavalry" 100 4 50 0 0 \n'
text += 'addunitrec "Barbarian Lancer" 100 4 50 0 10 \n'
text += 'addunitrec "Barbarian Werebear" 10 1 25 0 0 \n'
text += 'addcomrec  "Spirit Guide" 8 75 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Soothsayer" 8 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Barbarian Leader" 100 25 10 0 \n'
text += 'reclimiter "-Barbarian Leader" \n'
text += 'addcomrec  "Mounted Chief" 10 25 10 0 \n'
text += 'addmercrec "Mounted Scout" 15 1 15 10 0 \n'
text += 'addcomrec  "Crystal Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Crystal Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addunitrec "Crystal Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addcomrec  "Garnet Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Garnet Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addunitrec "Garnet Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addcomrec  "Jade Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Jade Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addunitrec "Jade Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addcomrec  "Onyx Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Onyx Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
text += 'addunitrec "Onyx Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
}

if(shuffle3 === 6 && barbariancheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addunitrec "Veles" 100 5 40 0 0 \n'
text += 'addunitrec "Hastatus" 100 5 45 0 5 \n'
text += 'addunitrec "Princeps" 100 5 50 0 10 \n'
text += 'addunitrec "Princeps Solaris" 100 5 55 0 10 \n'
text += 'reclimiter "+Leo" \n'
text += 'addunitrec "Triarius" 100 5 55 0 20 \n'
text += 'addunitrec "Praetorian Guard" 5 5 60 0 20 \n'

text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Hastatus" 5 10 65 0 5 \n'
text += 'addmercrec "Standard" 50 1 20 0 0 \n'  
text += 'addmercrec "Archer" 20 5 50 0 0 \n'
text += 'addmercrec "Gladiator" 20 2 25 0 0 \n'
text += 'addmercrec "Retiarius" 1 2 25 0 0 \n'

text += 'addcomrec "Centurion" 25 35 10 0 \n'
text += 'addcomrec "Leo" 5 50 20 0 \n'
text += 'addcomrec "Heliodromus" 1 90 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Renata" 5 50 20 0 \n'
text += 'addcomrec "Renatus" 1 110 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Serpent Acolyte" 5 50 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Serpent Priest" 2 90 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Reveler" 5 50 20 0 \n'
text += 'addcomrec "Augur" 5 50 20 0 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	

text += 'addunitrec "Pale One" 100 5 50 0 0 \n'
text += 'addunitrec "Pale One Soldier" 100 5 50 0 5 \n'
text += 'addunitrec "Cavern Guard" 100 5 50 0 20 \n'
text += 'addunitrec "Ancient Hurler" 25 1 40 0 0 \n'
text += 'addunitrec "Ancient Pale One" 25 1 40 0 15 \n'
text += 'addunitrec "Seal Guard" 25 1 50 0 25 \n'

text += 'addcomrec "Ancient Commander" 5 60 20 15 \n'
text += 'addcomrec "Pale One Commander" 10 40 10 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 9 && druidcheck === true){	

text += 'addunitrec "Barechested Slinger" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Swordsman" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Warrior" 100 5 50 0 0 \n'
text += 'addunitrec "Beast Cavalry" 100 5 50 0 5 \n'
text += 'addunitrec "Boar Warrior" 15 4 50 0 10 \n'

text += 'addcomrec "Chieftain" 10 40 10 0 \n'
text += 'addcomrec "Hornblower" 5 25 10 0 \n'
text += 'addcomrec "Vergobret" 5 30 10 0 \n'
}

if(shuffle3 === 9 && druidcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 10 && hoburgcheck === true){	

text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hoburg Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hoburg Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Knight" 100 5 50 0 10 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}


if(shuffle3 === 11 && priestcheck ===true){	

text += 'addunitrec "Tribal Warrior" 100 7 50 0 0 \n'
text += 'addunitrec "Jungle Warrior" 100 6 50 0 0 \n'
text += 'addunitrec "Feathered Warrior" 100 5 50 0 5 \n'
text += 'addunitrec "Jaguar Warrior" 30 5 50 0 0 \n'

}

if(shuffle3 === 11 && priestcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 12 && trollcheck === true){	

text += 'addunitrec  "Goblin" 100 15 50 0 0 \n'
text += 'addunitrec  "Ogre" 100 1 25 0 0 \n'
text += 'addunitrec  "Goblin Spearman" 40 15 50 0 0 \n'
text += 'addunitrec  "Goblin Archer" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin Reaver" 20 7 50 0 10 \n'
text += 'addunitrec  "Rock Troll" 20 1 50 0 60 \n'
text += 'addunitrec  "Troll" 30 1 50 0 20 \n'
text += 'addunitrec  "Forest Troll" 40 1 40 0 10 \n'
text += 'addunitrec  "Hill Giant" 5 1 100 0 0 \n'
text += 'addunitrec  "Ettin" 10 1 75 0 0 \n'
text += 'addcomrec   "Goblin Chieftain" 7 25 20 0 \n'
text += 'addcomrec   "Ogre Chief" 3 35 20 0 \n'
text += 'addcomrec   "Forest Giant" 5 70 20 0 \n'

text += 'addmercrec  "Goblin Murderer" 3 1 10 40 0 \n'
text += 'addcomrec   "Goblin Hero" 3 10 50 0 \n'

}

if(shuffle3 === 12 && trollcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 13 && elcheck === true){

text += 'addunitrec "Spearman" 100 5 50 0 0 \n'	
text += 'addunitrec "Archer" 100 5 50 0 0 \n'
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n' 	
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Temple Guard" 100 5 50 0 5 \n'
text += 'addunitrec "Templar" 100 5 50 0 15  \n'                      
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'

text += 'addcomrec "Missionary" 5 20 10 0 \n'

}

if(shuffle3 === 13 && elcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){
text += 'addunitrec "Dwarf Worker" 100 5 30 0 0 \n'

text += 'addunitrec "Dwarf" 100 5 0 0 20 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Arbarlest" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Outdoor Dwarf" 100 2 10 0 10 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarven Ballista" 100 1 0 0 40  \n'

text += 'addmercrec "Archer" 3 10 150 0 0 \n'                    
text += 'addmercrec "Crossbowman" 3 10 150 0 0 \n' 
text += 'addmercrec "Pikeneer" 3 10 150 0 10 \n'                    
text += 'addmercrec "Pikeneer" 3 20 250 0 10 \n'                    
text += 'addmercrec "Spearman" 3 10 150 0 0 \n'                 
text += 'addmercrec "Swordsman" 3 10 150 0 10 \n'   

text += 'addcomrec "Dwarf Commander" 15 20 10 0 \n'

}

if(shuffle3 === 14 && dwarfcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 15 && homarkcheck === true){
	
text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hobmark Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Hammerer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Pickaneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Markgraf Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hobmark Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Hussar" 100 5 50 0 5 \n'
text += 'addunitrec "Catapult" 100 1 25 0 25 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 16 && dryadcheck === true){

text += 'addunitrec "Satyr " 100 5 50 0 0 \n'	
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'

text += 'addunitrec "Centaur" 100 3 50 0 0 \n'
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'

text += 'addunitrec "Minotaur" 100 3 50 0 0 \n'
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

text += 'addunitrec "Harpy" 100 5 50 0 0 \n'
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'

text += 'addcomrec "Satyr Commander" 10 40 10  0 \n'
text += 'addcomrec "Hoplite Commander" 5 40 10 5 \n'
text += 'addcomrec "Centaur Commander" 5 50 15 5 \n'
text += 'addcomrec "Cataphract Commander" 3 50 15 10 \n'

}

if(shuffle3 === 16 && dryadcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 17){
text += 'addunitrec "Militia" 100 5 50 0 0 \n' 
text += 'addunitrec "Slinger" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Light Cavalry" 100 3 50 0 0 \n'
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Cavalry" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Infantry" 100 5 50 0 25 \n'
text += 'addunitrec "Heavy Spearman" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 

text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "White Wizard" 0 100 100 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Priest" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Commander" 10 40 10 0 \n'
text += 'addcomrec "Mounted Commander" 5 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'clearstartunits  \n'
if(shuffle3 === 1){	
text += 'addstartunits "Cavalryman" 5 \n'
text += 'addstartunits "Spearman" 6 \n'
text += 'addstartunits "Archer" 5 \n'
}
if(shuffle3 === 2){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 3 && witchcheck === true){	
text += 'addstartunits "Androphag Spearman" 5 \n'
text += 'addstartunits "Androphag Archer" 5 \n'
text += 'addstartunits "Androphag Cavalry" 1 \n'
}
if(shuffle3 === 3 && witchcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 4 && baalcheck === true){	
text += 'addstartunits "Ba' + illapp + 'alite Spearman" 10 \n'
text += 'addstartunits "Ba' + illapp + 'alite Archer" 5 \n'
}

if(shuffle3 === 4 && baalcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addstartunits "Bakemono Spearman" 15 \n'
text += 'addstartunits "Bakemono Sho" 15 \n'
text += 'addstartunits "Bakemono Bowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addstartunits "Barbarian Warrior" 15 \n'
text += 'addstartunits "Barbarian Bowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addstartunits "Velite" 10 \n'
text += 'addstartunits "Hastati" 5 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	
text += 'addstartunits "Pale One" 10 \n'
text += 'addstartunits "Pale One Soldier" 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 9 && druidcheck === true){	
text += 'addstartunits "Barechested Warrior" 10 \n'
text += 'addstartunits "Barechested Slinger" 5 \n'
}

if(shuffle3 === 9 && druidcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 10 && hoburgcheck ===true){	
text += 'addstartunits "Hoburg Crossbow" 10 \n'
text += 'addstartunits "Hoburg Defender" 5 \n'
text += 'addstartunits "Hoburg Soldier" 10 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 11 && priestcheck === true){	
text += 'addstartunits "Tribal Warrior" 10 \n'
text += 'addstartunits "Jungle Warrior" 10 \n'
}

if(shuffle3 === 11 && priestcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 12 && trollcheck === true){	
text += 'addstartunits "Goblin" 15 \n'
text += 'addstartunits "Rock Troll" 1 \n'
}

if(shuffle3 === 12 && trollcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 13 && elcheck === true){	
text += 'addstartunits "Spearman" 10 \n'
text += 'addstartunits "Halberdier" 8 \n'
}

if(shuffle3 === 13 && elcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){	
text += 'addstartunits "Dwarf Worker" 12 \n'
text += 'addstartunits "Dwarf" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 15 && homarkcheck === true){	
text += 'addstartunits "Hobmark Soldier" 10 \n'
text += 'addstartunits "Hobmark Defender" 5 \n'
text += 'addstartunits "Hobmark Crossbow" 10 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 16 && dryadcheck === true){	
text += 'addstartunits "Satyr Warrior" 5 \n'
text += 'addstartunits "Satyr Javelinist" 5 \n'
text += 'addstartunits "Harpy" 1 \n'
}

if(shuffle3 === 16 && dryadcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 17){	
text += 'addstartunits "Militia" 10 \n'
text += 'addstartunits "Slinger" 10 \n'
}
}

if(saneshuffle !== "swap"){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'
startstore = roll
startstore3 = roll

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'
startstore2 = roll
limit = limit - 2 

if(limit <= 0){
limit = 1	
}


while (x <= limit){	
x++
coin = Math.floor(Math.random() * 2)
if(coin === 1){
roll = Math.floor(Math.random() * team1_melee_empty.length)
startstore3 = roll
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'


if (team1_melee_empty[roll].name=== "Satyr"){
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
}
if (team1_melee_empty[roll].name === "Centaur"){
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'
}
if (team1_melee_empty[roll].name === "Minotaur"){
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

}
if (team1_melee_empty[roll].name === "Harpy"){
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'
}
}
if(coin === 0){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'



if (team1_ranged_empty[roll].name === "Centauride"){
text += 'addunitrec "Centauride Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Crossbow" 100 3 25 0 50 \n'
text += 'reclimiter "=Centauride" \n'
}
}
}
while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2_empty.length)
text += 'addcomrec "' + team2_empty[roll].name + '" '+ team2_empty[roll].chance + ' ' + team2_empty[roll].gold + ' ' + team2_empty[roll].goldplus + ' ' + team2_empty[roll].iron + ' \n'

}
text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'addcomrec "'+ mymonster2 +'" 100 150 0 0 \n'
text += 'reclimiter  "='+ mymonster +'" \n'
text += 'addcomrec "'+ mymonster3 +'" 100 400 0 0 \n'
text += 'reclimiter  "='+ mymonster2 +'" \n'
text += 'clearstartunits  \n'

hasunits = 0

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addstartunits "' + team1_melee_empty[startstore2].name + '" '+ team1_melee_empty[startstore2].num +' \n'
hasunits += team1_melee_empty[startstore2].num

roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addstartunits "' + team1_ranged_empty[startstore].name + '" '+ team1_ranged_empty[startstore].num +' \n'
hasunits += team1_ranged_empty[startstore].num

if(hasunits < 9){
roll = Math.floor(Math.random() * team1_melee_empty.length)	
text += 'addstartunits "' + team1_melee_empty[startstore3].name + '" '+ team1_melee_empty[startstore3].num  +' \n'
hasunits += team1_melee_empty[startstore3].num
}
}
roll = Math.floor(Math.random() * team2_empty.length)
		
rit2 = document.getElementById("rit2").checked;	

if(rit2 === false){	
text += 'setmaincom "' + mymonster + '"  \n'
}
if(rit2 === true){	
text += 'setmaincom "' + mymonster2 + '"  \n'
}

text += 'addstartcom "' + team2_empty[roll].name + '"  \n'
text += 'addstartcom "Tattle"  \n'
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
leader = randomItem(team3_3_empty)

text += mymonsterstore
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

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

leader = randomItem(team3_2_empty)	
text += mymonster2store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 22 2 \n'
text += 'gatherfungus \n'
	
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_empty)	
text += mymonster3store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 22 3 \n'
text += 'gatherfungus \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'
text += ' \n'

text += 'selectclass 14 \n'
text += 'clearrec  \n'


shuffle3 = Math.floor(Math.random() * 17) + 1

if(saneshuffle === "swap"){

if(shuffle3 === 1){	
text += 'addunitrec "Longbowman" 100 4 50 0 0 \n' 
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Zweihander" 100 5 50 0 10 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "War Dog" 100 4 25 0 0 \n' 
text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Trebuchet" 100 1 50 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 
text += 'addunitrec "Crossbowman" 5 10 70 0 7 \n' 
text += 'addunitrec "Swordsman" 5 10 70 0 7 \n'
text += 'addunitrec "Trebuchet" 10 2 75 0 75 \n' 
text += 'addcomrec "High Lord" 20 50 10 10 \n' 
text += 'reclimiter "+Hedge Wizard" \n'
text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'

}

if(shuffle3 === 2){	
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 3 && witchcheck === true){	
text += 'addunitrec "Androphag Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Cavalry" 100 5 50 0 5 \n' 
text += 'addcomrec "Androphag Lord" 5 50 10 0 \n'
text += 'addcomrec "Manflayer" 2 70 20 0 \n'
}

if(shuffle3 === 3 && witchcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 4 && baalcheck === true){	
text += 'addunitrec "Ba' + illapp + 'alite Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Ba' + illapp + 'alite Spearman" 100 5 50 0 0 \n'
text += 'addunitrec "Ba' + illapp + 'alite Zealot" 100 5 50 0 5 \n'
text += 'addunitrec "Ba' + illapp + 'alite Heavy infantry" 100 5 50 0 25 \n' 
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle3 === 4 && baalcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addunitrec "Bakemono Archer" 100 5 25 0 1 \n' 
text += 'addunitrec "Bakemono Soldier" 100 5 25 0 1 \n'
text += 'addunitrec "Bakemono Swordsman" 100 5 25 0 3 \n'
text += 'addunitrec "Dai Bakemono" 25 3 50 0 15 \n'
text += 'addunitrec "Dai Bakemono Archer" 25 3 50 0 15 \n'
text += 'addunitrec "O Bakemono" 25 1 25 0 0 \n'
text += 'addunitrec "Bakemono Bowman" 100 5 25 0 0 \n'
text += 'addunitrec "Bakemono Sho" 100 5 25 0 0 \n'
text += 'addcomrec "Bakemono General" 5 50 10 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addunitrec "Barbarian Warrior" 100 7 50 0  0 \n'
text += 'addunitrec "Barbarian Bowman" 100 7 50 0 0 \n'
text += 'addunitrec "Barbarian Swordsman" 100 7 50 0 10 \n'
text += 'addunitrec "Barbarian Cavalry" 100 4 50 0 0 \n'
text += 'addunitrec "Barbarian Lancer" 100 4 50 0 10 \n'
text += 'addunitrec "Barbarian Werebear" 10 1 25 0 0 \n'
text += 'addcomrec  "Spirit Guide" 8 75 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Soothsayer" 8 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Barbarian Leader" 100 25 10 0 \n'
text += 'reclimiter "-Barbarian Leader" \n'
text += 'addcomrec  "Mounted Chief" 10 25 10 0 \n'
text += 'addmercrec "Mounted Scout" 15 1 15 10 0 \n'
text += 'addcomrec  "Crystal Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Crystal Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addunitrec "Crystal Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addcomrec  "Garnet Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Garnet Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addunitrec "Garnet Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addcomrec  "Jade Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Jade Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addunitrec "Jade Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addcomrec  "Onyx Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Onyx Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
text += 'addunitrec "Onyx Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
}

if(shuffle3 === 6 && barbariancheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addunitrec "Veles" 100 5 40 0 0 \n'
text += 'addunitrec "Hastatus" 100 5 45 0 5 \n'
text += 'addunitrec "Princeps" 100 5 50 0 10 \n'
text += 'addunitrec "Princeps Solaris" 100 5 55 0 10 \n'
text += 'reclimiter "+Leo" \n'
text += 'addunitrec "Triarius" 100 5 55 0 20 \n'
text += 'addunitrec "Praetorian Guard" 5 5 60 0 20 \n'

text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Hastatus" 5 10 65 0 5 \n'
text += 'addmercrec "Standard" 50 1 20 0 0 \n'  
text += 'addmercrec "Archer" 20 5 50 0 0 \n'
text += 'addmercrec "Gladiator" 20 2 25 0 0 \n'
text += 'addmercrec "Retiarius" 1 2 25 0 0 \n'

text += 'addcomrec "Centurion" 25 35 10 0 \n'
text += 'addcomrec "Leo" 5 50 20 0 \n'
text += 'addcomrec "Heliodromus" 1 90 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Renata" 5 50 20 0 \n'
text += 'addcomrec "Renatus" 1 110 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Serpent Acolyte" 5 50 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Serpent Priest" 2 90 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Reveler" 5 50 20 0 \n'
text += 'addcomrec "Augur" 5 50 20 0 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	

text += 'addunitrec "Pale One" 100 5 50 0 0 \n'
text += 'addunitrec "Pale One Soldier" 100 5 50 0 5 \n'
text += 'addunitrec "Cavern Guard" 100 5 50 0 20 \n'
text += 'addunitrec "Ancient Hurler" 25 1 40 0 0 \n'
text += 'addunitrec "Ancient Pale One" 25 1 40 0 15 \n'
text += 'addunitrec "Seal Guard" 25 1 50 0 25 \n'

text += 'addcomrec "Ancient Commander" 5 60 20 15 \n'
text += 'addcomrec "Pale One Commander" 10 40 10 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 9 && druidcheck === true){	

text += 'addunitrec "Barechested Slinger" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Swordsman" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Warrior" 100 5 50 0 0 \n'
text += 'addunitrec "Beast Cavalry" 100 5 50 0 5 \n'
text += 'addunitrec "Boar Warrior" 15 4 50 0 10 \n'

text += 'addcomrec "Chieftain" 10 40 10 0 \n'
text += 'addcomrec "Hornblower" 5 25 10 0 \n'
text += 'addcomrec "Vergobret" 5 30 10 0 \n'
}

if(shuffle3 === 9 && druidcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 10 && hoburgcheck === true){	

text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hoburg Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hoburg Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Knight" 100 5 50 0 10 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}


if(shuffle3 === 11 && priestcheck ===true){	

text += 'addunitrec "Tribal Warrior" 100 7 50 0 0 \n'
text += 'addunitrec "Jungle Warrior" 100 6 50 0 0 \n'
text += 'addunitrec "Feathered Warrior" 100 5 50 0 5 \n'
text += 'addunitrec "Jaguar Warrior" 30 5 50 0 0 \n'

}

if(shuffle3 === 11 && priestcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 12 && trollcheck === true){	

text += 'addunitrec  "Goblin" 100 15 50 0 0 \n'
text += 'addunitrec  "Ogre" 100 1 25 0 0 \n'
text += 'addunitrec  "Goblin Spearman" 40 15 50 0 0 \n'
text += 'addunitrec  "Goblin Archer" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin Reaver" 20 7 50 0 10 \n'
text += 'addunitrec  "Rock Troll" 20 1 50 0 60 \n'
text += 'addunitrec  "Troll" 30 1 50 0 20 \n'
text += 'addunitrec  "Forest Troll" 40 1 40 0 10 \n'
text += 'addunitrec  "Hill Giant" 5 1 100 0 0 \n'
text += 'addunitrec  "Ettin" 10 1 75 0 0 \n'
text += 'addcomrec   "Goblin Chieftain" 7 25 20 0 \n'
text += 'addcomrec   "Ogre Chief" 3 35 20 0 \n'
text += 'addcomrec   "Forest Giant" 5 70 20 0 \n'

text += 'addmercrec  "Goblin Murderer" 3 1 10 40 0 \n'
text += 'addcomrec   "Goblin Hero" 3 10 50 0 \n'

}

if(shuffle3 === 12 && trollcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 13 && elcheck === true){

text += 'addunitrec "Spearman" 100 5 50 0 0 \n'	
text += 'addunitrec "Archer" 100 5 50 0 0 \n'
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n' 	
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Temple Guard" 100 5 50 0 5 \n'
text += 'addunitrec "Templar" 100 5 50 0 15  \n'                      
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'

text += 'addcomrec "Missionary" 5 20 10 0 \n'

}

if(shuffle3 === 13 && elcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){
text += 'addunitrec "Dwarf Worker" 100 5 30 0 0 \n'

text += 'addunitrec "Dwarf" 100 5 0 0 20 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Arbarlest" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Outdoor Dwarf" 100 2 10 0 10 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarven Ballista" 100 1 0 0 40  \n'

text += 'addmercrec "Archer" 3 10 150 0 0 \n'                    
text += 'addmercrec "Crossbowman" 3 10 150 0 0 \n' 
text += 'addmercrec "Pikeneer" 3 10 150 0 10 \n'                    
text += 'addmercrec "Pikeneer" 3 20 250 0 10 \n'                    
text += 'addmercrec "Spearman" 3 10 150 0 0 \n'                 
text += 'addmercrec "Swordsman" 3 10 150 0 10 \n'  

text += 'addcomrec "Dwarf Commander" 15 20 10 0 \n'

}

if(shuffle3 === 14 && dwarfcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 15 && homarkcheck === true){
	
text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hobmark Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Hammerer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Pickaneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Markgraf Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hobmark Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Hussar" 100 5 50 0 5 \n'
text += 'addunitrec "Catapult" 100 1 25 0 25 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 16 && dryadcheck === true){

text += 'addunitrec "Satyr " 100 5 50 0 0 \n'	
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'

text += 'addunitrec "Centaur" 100 3 50 0 0 \n'
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'

text += 'addunitrec "Minotaur" 100 3 50 0 0 \n'
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

text += 'addunitrec "Harpy" 100 5 50 0 0 \n'
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'

text += 'addcomrec "Satyr Commander" 10 40 10  0 \n'
text += 'addcomrec "Hoplite Commander" 5 40 10 5 \n'
text += 'addcomrec "Centaur Commander" 5 50 15 5 \n'
text += 'addcomrec "Cataphract Commander" 3 50 15 10 \n'

}

if(shuffle3 === 16 && dryadcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 17){
text += 'addunitrec "Militia" 100 5 50 0 0 \n' 
text += 'addunitrec "Slinger" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Light Cavalry" 100 3 50 0 0 \n'
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Cavalry" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Infantry" 100 5 50 0 25 \n'
text += 'addunitrec "Heavy Spearman" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 

text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "White Wizard" 0 100 100 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Priest" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Commander" 10 40 10 0 \n'
text += 'addcomrec "Mounted Commander" 5 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle2 === 11){
text += 'addcomrec "Oracle of Subterranean Fire" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of Subterranean Waters" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of the Dead" 0 150 30 0 \n'
text += 'templerec \n'
}
if(shuffle2 === 9){
text += 'addcomrec "Sun Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Blood Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Sky Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Rain Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Moon Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Death Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
}
if (shuffle2 === 13){	
text += 'addmercrec "Mirror" 100 1 10 0 0\n'
text += 'addmercrec "Large Mirror" 100 1 25 0 0\n'
text += 'addmercrec "Silver Mirror" 100 1 50 0 0\n'
text += 'addmercrec "Golden Mirror" 100 1 150 0 0\n'
}
if (shuffle2 === 14){	
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30\n'
text += 'reclimiter  "=Dwarf Worker"\n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40\n'
text += 'reclimiter  "=Dwarf Worker"\n'
}
if(shuffle2 === 15){
text += 'addcomrec "Warlock'+ illapp +'s Apprentice" 5 55 20 0 \n'
}

text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'clearstartunits  \n'
if(shuffle3 === 1){	
text += 'addstartunits "Cavalryman" 5 \n'
text += 'addstartunits "Spearman" 6 \n'
text += 'addstartunits "Archer" 5 \n'
}
if(shuffle3 === 2){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 3 && witchcheck === true){	
text += 'addstartunits "Androphag Spearman" 5 \n'
text += 'addstartunits "Androphag Archer" 5 \n'
text += 'addstartunits "Androphag Cavalry" 1 \n'
}
if(shuffle3 === 3 && witchcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 4 && baalcheck === true){	
text += 'addstartunits "Ba' + illapp + 'alite Spearman" 10 \n'
text += 'addstartunits "Ba' + illapp + 'alite Archer" 5 \n'
}

if(shuffle3 === 4 && baalcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addstartunits "Bakemono Spearman" 15 \n'
text += 'addstartunits "Bakemono Sho" 15 \n'
text += 'addstartunits "Bakemono Bowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addstartunits "Barbarian Warrior" 15 \n'
text += 'addstartunits "Barbarian Bowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addstartunits "Velite" 10 \n'
text += 'addstartunits "Hastati" 5 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	
text += 'addstartunits "Pale One" 10 \n'
text += 'addstartunits "Pale One Soldier" 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 9 && druidcheck === true){	
text += 'addstartunits "Barechested Warrior" 10 \n'
text += 'addstartunits "Barechested Slinger" 5 \n'
}

if(shuffle3 === 9 && druidcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 10 && hoburgcheck ===true){	
text += 'addstartunits "Hoburg Crossbow" 10 \n'
text += 'addstartunits "Hoburg Defender" 5 \n'
text += 'addstartunits "Hoburg Soldier" 10 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 11 && priestcheck === true){	
text += 'addstartunits "Tribal Warrior" 10 \n'
text += 'addstartunits "Jungle Warrior" 10 \n'
}

if(shuffle3 === 11 && priestcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 12 && trollcheck === true){	
text += 'addstartunits "Goblin" 15 \n'
text += 'addstartunits "Rock Troll" 1 \n'
}

if(shuffle3 === 12 && trollcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 13 && elcheck === true){	
text += 'addstartunits "Spearman" 10 \n'
text += 'addstartunits "Halberdier" 8 \n'
}

if(shuffle3 === 13 && elcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){	
text += 'addstartunits "Dwarf Worker" 12 \n'
text += 'addstartunits "Dwarf" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 15 && homarkcheck === true){	
text += 'addstartunits "Hobmark Soldier" 10 \n'
text += 'addstartunits "Hobmark Defender" 5 \n'
text += 'addstartunits "Hobmark Crossbow" 10 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 16 && dryadcheck === true){	
text += 'addstartunits "Satyr Warrior" 5 \n'
text += 'addstartunits "Satyr Javelinist" 5 \n'
text += 'addstartunits "Harpy" 1 \n'
}

if(shuffle3 === 16 && dryadcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 17){	
text += 'addstartunits "Militia" 10 \n'
text += 'addstartunits "Slinger" 10 \n'
}
}

if(saneshuffle !== "swap"){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'
startstore = roll
startstore3 = roll

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'
startstore2 = roll


limit = limit - 2 
 

if(limit <= 0){
limit = 1	
}


while (x <= limit){	
x++
coin = Math.floor(Math.random() * 2)
if(coin === 1){
roll = Math.floor(Math.random() * team1_melee_empty.length)
startstore3 = roll
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'


if (team1_melee_empty[roll].name=== "Satyr"){
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
}
if (team1_melee_empty[roll].name === "Centaur"){
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'
}
if (team1_melee_empty[roll].name === "Minotaur"){
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

}
if (team1_melee_empty[roll].name === "Harpy"){
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'
}
}
if(coin === 0){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'



if (team1_ranged_empty[roll].name === "Centauride"){
text += 'addunitrec "Centauride Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Crossbow" 100 3 25 0 50 \n'
text += 'reclimiter "=Centauride" \n'
}
}
}
while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2_empty.length)
text += 'addcomrec "' + team2_empty[roll].name + '" '+ team2_empty[roll].chance + ' ' + team2_empty[roll].gold + ' ' + team2_empty[roll].goldplus + ' ' + team2_empty[roll].iron + ' \n'

}
text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'clearstartunits  \n'
hasunits = 0

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addstartunits "' + team1_melee_empty[startstore2].name + '" '+ team1_melee_empty[startstore2].num +' \n'
hasunits += team1_melee_empty[startstore2].num

roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addstartunits "' + team1_ranged_empty[startstore].name + '" '+ team1_ranged_empty[startstore].num +' \n'
hasunits += team1_ranged_empty[startstore].num

if(hasunits < 9){
roll = Math.floor(Math.random() * team1_melee_empty.length)	
text += 'addstartunits "' + team1_melee_empty[startstore3].name + '" '+ team1_melee_empty[startstore3].num  +' \n'
hasunits += team1_melee_empty[startstore3].num
}
}
roll = Math.floor(Math.random() * team2_empty.length)
	
rit2 = document.getElementById("rit2").checked;	

if(rit2 === false){	
text += 'setmaincom "' + mymonster + '"  \n'
}
if(rit2 === true){	
text += 'setmaincom "' + mymonster2 + '"  \n'
}
text += 'addstartcom "' + team2_empty[roll].name + '"  \n'
text += 'hometerr ' + randomItem(team4) + '  \n'
coin = Math.floor(Math.random() * 4)
text += 'clearstartterr \n'	
text += ' \n'

x = 0
y = 0
z = 0
w = 0
v = 0

limit = (Math.floor(Math.random() * unitnumber)) + 1
limit2 = Math.floor(Math.random() * comnumber) + 1
limit3 = Math.floor(Math.random() * 4)

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

coin = Math.floor(Math.random() * 4)
if(coin === 3){
mymonster4 = randomItem(team5) + " " + randomItem(team6) + ' of ' + randomItem(team7)	
mymonster4store = 'newmonster "' + mymonster4 + '" \n'	
}	
if(coin != 3){
mymonster4 =	 randomItem(team5) + " " + randomItem(team6)
mymonster4store = 'newmonster "' + mymonster4 + '" \n'	
}
leader = randomItem(team3_3_empty)

text += mymonsterstore
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

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

leader = randomItem(team3_2_empty)	
text += mymonster2store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 25 2 \n'
text += 'gatherrelics \n'
	
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_empty)	
text += mymonster3store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 25 3 \n'
text += 'gatherrelics \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_empty)	
text += mymonster4store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 25 4 \n'
text += 'gatherrelics \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'

text += ' \n'


text += 'selectclass 21 \n'
text += 'clearrec  \n'


shuffle3 = Math.floor(Math.random() * 17) + 1

if(saneshuffle === "swap"){

if(shuffle3 === 1){	
text += 'addunitrec "Longbowman" 100 4 50 0 0 \n' 
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Zweihander" 100 5 50 0 10 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "War Dog" 100 4 25 0 0 \n' 
text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Trebuchet" 100 1 50 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 
text += 'addunitrec "Crossbowman" 5 10 70 0 7 \n' 
text += 'addunitrec "Swordsman" 5 10 70 0 7 \n'
text += 'addunitrec "Trebuchet" 10 2 75 0 75 \n' 
text += 'addcomrec "High Lord" 20 50 10 10 \n' 
text += 'reclimiter "+Hedge Wizard" \n'
text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'

}

if(shuffle3 === 2){	
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 3 && witchcheck === true){	
text += 'addunitrec "Androphag Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Cavalry" 100 5 50 0 5 \n' 
text += 'addcomrec "Androphag Lord" 5 50 10 0 \n'
text += 'addcomrec "Manflayer" 2 70 20 0 \n'
}

if(shuffle3 === 3 && witchcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 4 && baalcheck === true){	
text += 'addunitrec "Ba' + illapp + 'alite Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Ba' + illapp + 'alite Spearman" 100 5 50 0 0 \n'
text += 'addunitrec "Ba' + illapp + 'alite Zealot" 100 5 50 0 5 \n'
text += 'addunitrec "Ba' + illapp + 'alite Heavy infantry" 100 5 50 0 25 \n' 
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle3 === 4 && baalcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addunitrec "Bakemono Archer" 100 5 25 0 1 \n' 
text += 'addunitrec "Bakemono Soldier" 100 5 25 0 1 \n'
text += 'addunitrec "Bakemono Swordsman" 100 5 25 0 3 \n'
text += 'addunitrec "Dai Bakemono" 25 3 50 0 15 \n'
text += 'addunitrec "Dai Bakemono Archer" 25 3 50 0 15 \n'
text += 'addunitrec "O Bakemono" 25 1 25 0 0 \n'
text += 'addunitrec "Bakemono Bowman" 100 5 25 0 0 \n'
text += 'addunitrec "Bakemono Sho" 100 5 25 0 0 \n'
text += 'addcomrec "Bakemono General" 5 50 10 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addunitrec "Barbarian Warrior" 100 7 50 0  0 \n'
text += 'addunitrec "Barbarian Bowman" 100 7 50 0 0 \n'
text += 'addunitrec "Barbarian Swordsman" 100 7 50 0 10 \n'
text += 'addunitrec "Barbarian Cavalry" 100 4 50 0 0 \n'
text += 'addunitrec "Barbarian Lancer" 100 4 50 0 10 \n'
text += 'addunitrec "Barbarian Werebear" 10 1 25 0 0 \n'
text += 'addcomrec  "Spirit Guide" 8 75 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Soothsayer" 8 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Barbarian Leader" 100 25 10 0 \n'
text += 'reclimiter "-Barbarian Leader" \n'
text += 'addcomrec  "Mounted Chief" 10 25 10 0 \n'
text += 'addmercrec "Mounted Scout" 15 1 15 10 0 \n'
text += 'addcomrec  "Crystal Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Crystal Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addunitrec "Crystal Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addcomrec  "Garnet Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Garnet Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addunitrec "Garnet Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addcomrec  "Jade Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Jade Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addunitrec "Jade Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addcomrec  "Onyx Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Onyx Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
text += 'addunitrec "Onyx Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
}

if(shuffle3 === 6 && barbariancheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addunitrec "Veles" 100 5 40 0 0 \n'
text += 'addunitrec "Hastatus" 100 5 45 0 5 \n'
text += 'addunitrec "Princeps" 100 5 50 0 10 \n'
text += 'addunitrec "Princeps Solaris" 100 5 55 0 10 \n'
text += 'reclimiter "+Leo" \n'
text += 'addunitrec "Triarius" 100 5 55 0 20 \n'
text += 'addunitrec "Praetorian Guard" 5 5 60 0 20 \n'

text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Hastatus" 5 10 65 0 5 \n'
text += 'addmercrec "Standard" 50 1 20 0 0 \n'  
text += 'addmercrec "Archer" 20 5 50 0 0 \n'
text += 'addmercrec "Gladiator" 20 2 25 0 0 \n'
text += 'addmercrec "Retiarius" 1 2 25 0 0 \n'

text += 'addcomrec "Centurion" 25 35 10 0 \n'
text += 'addcomrec "Leo" 5 50 20 0 \n'
text += 'addcomrec "Heliodromus" 1 90 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Renata" 5 50 20 0 \n'
text += 'addcomrec "Renatus" 1 110 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Serpent Acolyte" 5 50 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Serpent Priest" 2 90 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Reveler" 5 50 20 0 \n'
text += 'addcomrec "Augur" 5 50 20 0 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	

text += 'addunitrec "Pale One" 100 5 50 0 0 \n'
text += 'addunitrec "Pale One Soldier" 100 5 50 0 5 \n'
text += 'addunitrec "Cavern Guard" 100 5 50 0 20 \n'
text += 'addunitrec "Ancient Hurler" 25 1 40 0 0 \n'
text += 'addunitrec "Ancient Pale One" 25 1 40 0 15 \n'
text += 'addunitrec "Seal Guard" 25 1 50 0 25 \n'

text += 'addcomrec "Ancient Commander" 5 60 20 15 \n'
text += 'addcomrec "Pale One Commander" 10 40 10 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 9 && druidcheck === true){	

text += 'addunitrec "Barechested Slinger" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Swordsman" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Warrior" 100 5 50 0 0 \n'
text += 'addunitrec "Beast Cavalry" 100 5 50 0 5 \n'
text += 'addunitrec "Boar Warrior" 15 4 50 0 10 \n'

text += 'addcomrec "Chieftain" 10 40 10 0 \n'
text += 'addcomrec "Hornblower" 5 25 10 0 \n'
text += 'addcomrec "Vergobret" 5 30 10 0 \n'
}

if(shuffle3 === 9 && druidcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 10 && hoburgcheck === true){	

text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hoburg Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hoburg Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Knight" 100 5 50 0 10 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}


if(shuffle3 === 11 && priestcheck ===true){	

text += 'addunitrec "Tribal Warrior" 100 7 50 0 0 \n'
text += 'addunitrec "Jungle Warrior" 100 6 50 0 0 \n'
text += 'addunitrec "Feathered Warrior" 100 5 50 0 5 \n'
text += 'addunitrec "Jaguar Warrior" 30 5 50 0 0 \n'

}

if(shuffle3 === 11 && priestcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 12 && trollcheck === true){	

text += 'addunitrec  "Goblin" 100 15 50 0 0 \n'
text += 'addunitrec  "Ogre" 100 1 25 0 0 \n'
text += 'addunitrec  "Goblin Spearman" 40 15 50 0 0 \n'
text += 'addunitrec  "Goblin Archer" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin Reaver" 20 7 50 0 10 \n'
text += 'addunitrec  "Rock Troll" 20 1 50 0 60 \n'
text += 'addunitrec  "Troll" 30 1 50 0 20 \n'
text += 'addunitrec  "Forest Troll" 40 1 40 0 10 \n'
text += 'addunitrec  "Hill Giant" 5 1 100 0 0 \n'
text += 'addunitrec  "Ettin" 10 1 75 0 0 \n'
text += 'addcomrec   "Goblin Chieftain" 7 25 20 0 \n'
text += 'addcomrec   "Ogre Chief" 3 35 20 0 \n'
text += 'addcomrec   "Forest Giant" 5 70 20 0 \n'

text += 'addmercrec  "Goblin Murderer" 3 1 10 40 0 \n'
text += 'addcomrec   "Goblin Hero" 3 10 50 0 \n'

}

if(shuffle3 === 12 && trollcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 13 && elcheck === true){

text += 'addunitrec "Spearman" 100 5 50 0 0 \n'	
text += 'addunitrec "Archer" 100 5 50 0 0 \n'
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n' 	
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Temple Guard" 100 5 50 0 5 \n'
text += 'addunitrec "Templar" 100 5 50 0 15  \n'                      
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'

text += 'addcomrec "Missionary" 5 20 10 0 \n'

}

if(shuffle3 === 13 && elcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){
text += 'addunitrec "Dwarf Worker" 100 5 30 0 0 \n'

text += 'addunitrec "Dwarf" 100 5 0 0 20 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Arbarlest" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Outdoor Dwarf" 100 2 10 0 10 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarven Ballista" 100 1 0 0 40  \n'

text += 'addmercrec "Archer" 3 10 150 0 0 \n'                    
text += 'addmercrec "Crossbowman" 3 10 150 0 0 \n' 
text += 'addmercrec "Pikeneer" 3 10 150 0 10 \n'                    
text += 'addmercrec "Pikeneer" 3 20 250 0 10 \n'                    
text += 'addmercrec "Spearman" 3 10 150 0 0 \n'                 
text += 'addmercrec "Swordsman" 3 10 150 0 10 \n' 

text += 'addcomrec "Dwarf Commander" 15 20 10 0 \n'

}

if(shuffle3 === 14 && dwarfcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 15 && homarkcheck === true){
	
text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hobmark Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Hammerer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Pickaneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Markgraf Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hobmark Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Hussar" 100 5 50 0 5 \n'
text += 'addunitrec "Catapult" 100 1 25 0 25 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 16 && dryadcheck === true){

text += 'addunitrec "Satyr " 100 5 50 0 0 \n'	
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'

text += 'addunitrec "Centaur" 100 3 50 0 0 \n'
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'

text += 'addunitrec "Minotaur" 100 3 50 0 0 \n'
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

text += 'addunitrec "Harpy" 100 5 50 0 0 \n'
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'

text += 'addcomrec "Satyr Commander" 10 40 10  0 \n'
text += 'addcomrec "Hoplite Commander" 5 40 10 5 \n'
text += 'addcomrec "Centaur Commander" 5 50 15 5 \n'
text += 'addcomrec "Cataphract Commander" 3 50 15 10 \n'

}

if(shuffle3 === 16 && dryadcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 17){
text += 'addunitrec "Militia" 100 5 50 0 0 \n' 
text += 'addunitrec "Slinger" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Light Cavalry" 100 3 50 0 0 \n'
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Cavalry" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Infantry" 100 5 50 0 25 \n'
text += 'addunitrec "Heavy Spearman" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 

text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "White Wizard" 0 100 100 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Priest" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Commander" 10 40 10 0 \n'
text += 'addcomrec "Mounted Commander" 5 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle2 === 11){
text += 'addcomrec "Oracle of Subterranean Fire" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of Subterranean Waters" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of the Dead" 0 150 30 0 \n'
text += 'templerec \n'
}
if(shuffle2 === 9){
text += 'addcomrec "Sun Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Blood Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Sky Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Rain Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Moon Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Death Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
}
if (shuffle2 === 13){	
text += 'addmercrec "Mirror" 100 1 10 0 0\n'
text += 'addmercrec "Large Mirror" 100 1 25 0 0\n'
text += 'addmercrec "Silver Mirror" 100 1 50 0 0\n'
text += 'addmercrec "Golden Mirror" 100 1 150 0 0\n'
}
if (shuffle2 === 14){	
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30\n'
text += 'reclimiter  "=Dwarf Worker"\n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40\n'
text += 'reclimiter  "=Dwarf Worker"\n'
}
if(shuffle2 === 15){
text += 'addcomrec "Warlock'+ illapp +'s Apprentice" 5 55 20 0 \n'
}

text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'clearstartunits  \n'
if(shuffle3 === 1){	
text += 'addstartunits "Cavalryman" 5 \n'
text += 'addstartunits "Spearman" 6 \n'
text += 'addstartunits "Archer" 5 \n'
}
if(shuffle3 === 2){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 3 && witchcheck === true){	
text += 'addstartunits "Androphag Spearman" 5 \n'
text += 'addstartunits "Androphag Archer" 5 \n'
text += 'addstartunits "Androphag Cavalry" 1 \n'
}
if(shuffle3 === 3 && witchcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 4 && baalcheck === true){	
text += 'addstartunits "Ba' + illapp + 'alite Spearman" 10 \n'
text += 'addstartunits "Ba' + illapp + 'alite Archer" 5 \n'
}

if(shuffle3 === 4 && baalcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addstartunits "Bakemono Spearman" 15 \n'
text += 'addstartunits "Bakemono Sho" 15 \n'
text += 'addstartunits "Bakemono Bowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addstartunits "Barbarian Warrior" 15 \n'
text += 'addstartunits "Barbarian Bowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addstartunits "Velite" 10 \n'
text += 'addstartunits "Hastati" 5 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	
text += 'addstartunits "Pale One" 10 \n'
text += 'addstartunits "Pale One Soldier" 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 9 && druidcheck === true){	
text += 'addstartunits "Barechested Warrior" 10 \n'
text += 'addstartunits "Barechested Slinger" 5 \n'
}

if(shuffle3 === 9 && druidcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 10 && hoburgcheck ===true){	
text += 'addstartunits "Hoburg Crossbow" 10 \n'
text += 'addstartunits "Hoburg Defender" 5 \n'
text += 'addstartunits "Hoburg Soldier" 10 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 11 && priestcheck === true){	
text += 'addstartunits "Tribal Warrior" 10 \n'
text += 'addstartunits "Jungle Warrior" 10 \n'
}

if(shuffle3 === 11 && priestcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 12 && trollcheck === true){	
text += 'addstartunits "Goblin" 15 \n'
text += 'addstartunits "Rock Troll" 1 \n'
}

if(shuffle3 === 12 && trollcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 13 && elcheck === true){	
text += 'addstartunits "Spearman" 10 \n'
text += 'addstartunits "Halberdier" 8 \n'
}

if(shuffle3 === 13 && elcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){	
text += 'addstartunits "Dwarf Worker" 12 \n'
text += 'addstartunits "Dwarf" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 15 && homarkcheck === true){	
text += 'addstartunits "Hobmark Soldier" 10 \n'
text += 'addstartunits "Hobmark Defender" 5 \n'
text += 'addstartunits "Hobmark Crossbow" 10 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 16 && dryadcheck === true){	
text += 'addstartunits "Satyr Warrior" 5 \n'
text += 'addstartunits "Satyr Javelinist" 5 \n'
text += 'addstartunits "Harpy" 1 \n'
}

if(shuffle3 === 16 && dryadcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 17){	
text += 'addstartunits "Militia" 10 \n'
text += 'addstartunits "Slinger" 10 \n'
}
}

if(saneshuffle !== "swap"){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'
startstore = roll
startstore3 = roll

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'
startstore2 = roll

limit = limit - 2 


if(limit <= 0){
limit = 1	
}


while (x <= limit){	
x++
coin = Math.floor(Math.random() * 2)
if(coin === 1){
roll = Math.floor(Math.random() * team1_melee_empty.length)
startstore3 = roll
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'

if (team1_melee_empty[roll].name=== "Satyr"){
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
}
if (team1_melee_empty[roll].name === "Centaur"){
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'
}
if (team1_melee_empty[roll].name === "Minotaur"){
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

}
if (team1_melee_empty[roll].name === "Harpy"){
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'
}
}
if(coin === 0){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'



if (team1_ranged_empty[roll].name === "Centauride"){
text += 'addunitrec "Centauride Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Crossbow" 100 3 25 0 50 \n'
text += 'reclimiter "=Centauride" \n'
}
}
}
text += 'addunitrec "Temple Guard" 100 5 50 0 5 \n'
text += 'recxcost 12 5 \n'
text += 'addunitrec "Templar" 25 5 50 0 15 \n'
text += 'recxcost 12 5 \n'
while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2_empty.length)
text += 'addcomrec "' + team2_empty[roll].name + '" '+ team2_empty[roll].chance + ' ' + team2_empty[roll].gold + ' ' + team2_empty[roll].goldplus + ' ' + team2_empty[roll].iron + ' \n'

}
text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'addcomrec "'+ mymonster2 +'" 100 100 0 0 \n'
text += 'reclimiter  "='+ mymonster +'" \n'
text += 'addcomrec "'+ mymonster3 +'" 100 250 0 0 \n'
text += 'reclimiter  "='+ mymonster2 +'" \n'
text += 'addcomrec "'+ mymonster4 +'" 100 600 0 0 \n'
text += 'reclimiter  "='+ mymonster3 +'" \n'
text += 'clearstartunits  \n'
hasunits = 0
roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addstartunits "' + team1_melee_empty[startstore2].name + '" '+ team1_melee_empty[startstore2].num +' \n'
hasunits += team1_melee_empty[startstore2].num

roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addstartunits "' + team1_ranged_empty[startstore].name + '" '+ team1_ranged_empty[startstore].num +' \n'
hasunits += team1_ranged_empty[startstore].num

if(hasunits < 9){
roll = Math.floor(Math.random() * team1_melee_empty.length)	
text += 'addstartunits "' + team1_melee_empty[startstore3].name + '" '+ team1_melee_empty[startstore3].num  +' \n'
hasunits += team1_melee_empty[startstore3].num
}
}
roll = Math.floor(Math.random() * team2_empty.length)
rit2 = document.getElementById("rit2").checked;	

if(rit2 === false){	
text += 'setmaincom "' + mymonster + '"  \n'
}
if(rit2 === true){	
text += 'setmaincom "' + mymonster2 + '"  \n'
}
text += 'addstartcom "' + team2_empty[roll].name + '"  \n'
text += 'hometerr ' + randomItem(team4) + '  \n'
coin = Math.floor(Math.random() * 4)
text += 'clearstartterr \n'	
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
leader = randomItem(team3_3_empty)

text += mymonsterstore
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 47 1 \n'	
text += 'gatherherbs \n'	

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 1 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_2_empty)	
text += mymonster2store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 47 2 \n'
text += 'gatherherbs \n'
	
coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 2 \n'	
}
text += 'rank -1 \n'
text += 'mastery 1 \n'
text += ' \n'

leader = randomItem(team3_empty)	
text += mymonster3store	
text += descrroll
text += 'copystats "' + leader + '" \n'
text += 'copyspr "' + leader + '" \n'

hproll = Math.floor(Math.random() * 28) + 5

if(leader === "Black Cat Familiar" || 
   leader === "Rabbit" ||
   leader === "Dog" ||  
   leader === "Wolf" || 
   leader === "Snake" ||  
   leader === "Ape" ||
   leader === "Dancing Sword" ||  
   leader === "Living Bow" ||  
   leader === "Imp" ||  
   leader === "Goblin" || 
    leader === "Goat" ||   
   leader === "Bear" || 
   leader === "Boar" ||
   leader === "Serpent" ||  
   leader === "Giant Snail" || 
   leader === "Large Spider" ||  
   leader === "Harpy" ||
   leader === "Giant Scorpion"  ){
text += 'hp ' + hproll + ' \n'	
}

text += 'power 47 3 \n'
text += 'gatherherbs \n'

coin2 = Math.floor(Math.random() * 2)
spell = Math.floor(Math.random() * 62)

if(coin2 === 1){
text += 'spellweaponbonus ' + spell + ' 3 \n'	
}
text += 'rank -1 \n'

text += ' \n'

text += 'selectclass 24 \n'
text += 'clearrec  \n'


shuffle3 = Math.floor(Math.random() * 17) + 1

if(saneshuffle === "swap"){

if(shuffle3 === 1){	
text += 'addunitrec "Longbowman" 100 4 50 0 0 \n' 
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Zweihander" 100 5 50 0 10 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "War Dog" 100 4 25 0 0 \n' 
text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Trebuchet" 100 1 50 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 
text += 'addunitrec "Crossbowman" 5 10 70 0 7 \n' 
text += 'addunitrec "Swordsman" 5 10 70 0 7 \n'
text += 'addunitrec "Trebuchet" 10 2 75 0 75 \n' 
text += 'addcomrec "High Lord" 20 50 10 10 \n' 
text += 'reclimiter "+Hedge Wizard" \n'
text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'

}

if(shuffle3 === 2){	
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 3 && witchcheck === true){	
text += 'addunitrec "Androphag Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Androphag Cavalry" 100 5 50 0 5 \n' 
text += 'addcomrec "Androphag Lord" 5 50 10 0 \n'
text += 'addcomrec "Manflayer" 2 70 20 0 \n'
}

if(shuffle3 === 3 && witchcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 4 && baalcheck === true){	
text += 'addunitrec "Ba' + illapp + 'alite Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Ba' + illapp + 'alite Spearman" 100 5 50 0 0 \n'
text += 'addunitrec "Ba' + illapp + 'alite Zealot" 100 5 50 0 5 \n'
text += 'addunitrec "Ba' + illapp + 'alite Heavy infantry" 100 5 50 0 25 \n' 
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle3 === 4 && baalcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addunitrec "Bakemono Archer" 100 5 25 0 1 \n' 
text += 'addunitrec "Bakemono Soldier" 100 5 25 0 1 \n'
text += 'addunitrec "Bakemono Swordsman" 100 5 25 0 3 \n'
text += 'addunitrec "Dai Bakemono" 25 3 50 0 15 \n'
text += 'addunitrec "Dai Bakemono Archer" 25 3 50 0 15 \n'
text += 'addunitrec "O Bakemono" 25 1 25 0 0 \n'
text += 'addunitrec "Bakemono Bowman" 100 5 25 0 0 \n'
text += 'addunitrec "Bakemono Sho" 100 5 25 0 0 \n'
text += 'addcomrec "Bakemono General" 5 50 10 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addunitrec "Barbarian Warrior" 100 7 50 0  0 \n'
text += 'addunitrec "Barbarian Bowman" 100 7 50 0 0 \n'
text += 'addunitrec "Barbarian Swordsman" 100 7 50 0 10 \n'
text += 'addunitrec "Barbarian Cavalry" 100 4 50 0 0 \n'
text += 'addunitrec "Barbarian Lancer" 100 4 50 0 10 \n'
text += 'addunitrec "Barbarian Werebear" 10 1 25 0 0 \n'
text += 'addcomrec  "Spirit Guide" 8 75 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Soothsayer" 8 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Barbarian Leader" 100 25 10 0 \n'
text += 'reclimiter "-Barbarian Leader" \n'
text += 'addcomrec  "Mounted Chief" 10 25 10 0 \n'
text += 'addmercrec "Mounted Scout" 15 1 15 10 0 \n'
text += 'addcomrec  "Crystal Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Crystal Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addunitrec "Crystal Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Crystal Priestess" \n'
text += 'addcomrec  "Garnet Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Garnet Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addunitrec "Garnet Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Garnet Priestess" \n'
text += 'addcomrec  "Jade Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Jade Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addunitrec "Jade Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Jade Priestess" \n'
text += 'addcomrec  "Onyx Priestess" 3 40 20 0 \n'
text += 'templerec \n'
text += 'addcomrec  "Onyx Sorceress" 3 80 20 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
text += 'addunitrec "Onyx Amazon" 25 8 50 0 0 \n'
text += 'reclimiter "+Onyx Priestess" \n'
}

if(shuffle3 === 6 && barbariancheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addunitrec "Veles" 100 5 40 0 0 \n'
text += 'addunitrec "Hastatus" 100 5 45 0 5 \n'
text += 'addunitrec "Princeps" 100 5 50 0 10 \n'
text += 'addunitrec "Princeps Solaris" 100 5 55 0 10 \n'
text += 'reclimiter "+Leo" \n'
text += 'addunitrec "Triarius" 100 5 55 0 20 \n'
text += 'addunitrec "Praetorian Guard" 5 5 60 0 20 \n'

text += 'addunitrec "Ballista" 100 2 25 0 50 \n'
text += 'addunitrec "Hastatus" 5 10 65 0 5 \n'
text += 'addmercrec "Standard" 50 1 20 0 0 \n'  
text += 'addmercrec "Archer" 20 5 50 0 0 \n'
text += 'addmercrec "Gladiator" 20 2 25 0 0 \n'
text += 'addmercrec "Retiarius" 1 2 25 0 0 \n'

text += 'addcomrec "Centurion" 25 35 10 0 \n'
text += 'addcomrec "Leo" 5 50 20 0 \n'
text += 'addcomrec "Heliodromus" 1 90 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Renata" 5 50 20 0 \n'
text += 'addcomrec "Renatus" 1 110 20 0 \n'
text += 'libraryrec \n'
text += 'addcomrec "Serpent Acolyte" 5 50 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Serpent Priest" 2 90 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Reveler" 5 50 20 0 \n'
text += 'addcomrec "Augur" 5 50 20 0 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	

text += 'addunitrec "Pale One" 100 5 50 0 0 \n'
text += 'addunitrec "Pale One Soldier" 100 5 50 0 5 \n'
text += 'addunitrec "Cavern Guard" 100 5 50 0 20 \n'
text += 'addunitrec "Ancient Hurler" 25 1 40 0 0 \n'
text += 'addunitrec "Ancient Pale One" 25 1 40 0 15 \n'
text += 'addunitrec "Seal Guard" 25 1 50 0 25 \n'

text += 'addcomrec "Ancient Commander" 5 60 20 15 \n'
text += 'addcomrec "Pale One Commander" 10 40 10 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 9 && druidcheck === true){	

text += 'addunitrec "Barechested Slinger" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Swordsman" 100 5 50 0 0 \n'
text += 'addunitrec "Barechested Warrior" 100 5 50 0 0 \n'
text += 'addunitrec "Beast Cavalry" 100 5 50 0 5 \n'
text += 'addunitrec "Boar Warrior" 15 4 50 0 10 \n'

text += 'addcomrec "Chieftain" 10 40 10 0 \n'
text += 'addcomrec "Hornblower" 5 25 10 0 \n'
text += 'addcomrec "Vergobret" 5 30 10 0 \n'
}

if(shuffle3 === 9 && druidcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 10 && hoburgcheck === true){	

text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hoburg Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hoburg Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Knight" 100 5 50 0 10 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}


if(shuffle3 === 11 && priestcheck ===true){	

text += 'addunitrec "Tribal Warrior" 100 7 50 0 0 \n'
text += 'addunitrec "Jungle Warrior" 100 6 50 0 0 \n'
text += 'addunitrec "Feathered Warrior" 100 5 50 0 5 \n'
text += 'addunitrec "Jaguar Warrior" 30 5 50 0 0 \n'

}

if(shuffle3 === 11 && priestcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 12 && trollcheck === true){	

text += 'addunitrec  "Goblin" 100 15 50 0 0 \n'
text += 'addunitrec  "Ogre" 100 1 25 0 0 \n'
text += 'addunitrec  "Goblin Spearman" 40 15 50 0 0 \n'
text += 'addunitrec  "Goblin Archer" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin" 20 10 50 0 0 \n'
text += 'addunitrec  "Wolf Kin Reaver" 20 7 50 0 10 \n'
text += 'addunitrec  "Rock Troll" 20 1 50 0 60 \n'
text += 'addunitrec  "Troll" 30 1 50 0 20 \n'
text += 'addunitrec  "Forest Troll" 40 1 40 0 10 \n'
text += 'addunitrec  "Hill Giant" 5 1 100 0 0 \n'
text += 'addunitrec  "Ettin" 10 1 75 0 0 \n'
text += 'addcomrec   "Goblin Chieftain" 7 25 20 0 \n'
text += 'addcomrec   "Ogre Chief" 3 35 20 0 \n'
text += 'addcomrec   "Forest Giant" 5 70 20 0 \n'

text += 'addmercrec  "Goblin Murderer" 3 1 10 40 0 \n'
text += 'addcomrec   "Goblin Hero" 3 10 50 0 \n'

}

if(shuffle3 === 12 && trollcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 13 && elcheck === true){

text += 'addunitrec "Spearman" 100 5 50 0 0 \n'	
text += 'addunitrec "Archer" 100 5 50 0 0 \n'
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n' 	
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Temple Guard" 100 5 50 0 5 \n'
text += 'addunitrec "Templar" 100 5 50 0 15  \n'                      
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'

text += 'addcomrec "Missionary" 5 20 10 0 \n'

}

if(shuffle3 === 13 && elcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){
text += 'addunitrec "Dwarf Worker" 100 5 30 0 0 \n'

text += 'addunitrec "Dwarf" 100 5 0 0 20 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarf Arbarlest" 100 5 0 0 30 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Outdoor Dwarf" 100 2 10 0 10 \n'
text += 'reclimiter "=Dwarf Worker" \n'
text += 'addunitrec "Dwarven Ballista" 100 1 0 0 40  \n'

text += 'addmercrec "Archer" 3 10 150 0 0 \n'                    
text += 'addmercrec "Crossbowman" 3 10 150 0 0 \n' 
text += 'addmercrec "Pikeneer" 3 10 150 0 10 \n'                    
text += 'addmercrec "Pikeneer" 3 20 250 0 10 \n'                    
text += 'addmercrec "Spearman" 3 10 150 0 0 \n'                 
text += 'addmercrec "Swordsman" 3 10 150 0 10 \n' 

text += 'addcomrec "Dwarf Commander" 15 20 10 0 \n'

}

if(shuffle3 === 14 && dwarfcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 15 && homarkcheck === true){
	
text += 'addunitrec "Hoburg Militia" 100 15 50 0 0 \n'
text += 'addunitrec "Hoburg Slinger" 100 15 50 0 0 \n'
text += 'addunitrec "Hobmark Soldier" 100 15 50 0 5 \n'
text += 'addunitrec "Hoburg Pikeneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Hammerer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Pickaneer" 100 10 30 0 5 \n'
text += 'addunitrec "Hobmark Crossbow" 100 15 50 0 5 \n'
text += 'addunitrec "Markgraf Guard" 100 10 40 0 10 \n'
text += 'addunitrec "Hobmark Defender" 100 15 50 0 10 \n'
text += 'addunitrec "Hog Hussar" 100 5 50 0 5 \n'
text += 'addunitrec "Catapult" 100 1 25 0 25 \n'

text += 'addcomrec "Hogmeister" 10 25 5 0 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 16 && dryadcheck === true){

text += 'addunitrec "Satyr " 100 5 50 0 0 \n'	
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'

text += 'addunitrec "Centaur" 100 3 50 0 0 \n'
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'

text += 'addunitrec "Minotaur" 100 3 50 0 0 \n'
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

text += 'addunitrec "Harpy" 100 5 50 0 0 \n'
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'

text += 'addcomrec "Satyr Commander" 10 40 10  0 \n'
text += 'addcomrec "Hoplite Commander" 5 40 10 5 \n'
text += 'addcomrec "Centaur Commander" 5 50 15 5 \n'
text += 'addcomrec "Cataphract Commander" 3 50 15 10 \n'

}

if(shuffle3 === 16 && dryadcheck !== true){
text += 'addunitrec "Spearman" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Crossbowman" 100 5 50 0 5 \n' 
text += 'addunitrec "Swordsman" 100 5 50 0 5 \n'
text += 'addunitrec "Heavy Infatry" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
}

if(shuffle3 === 17){
text += 'addunitrec "Militia" 100 5 50 0 0 \n' 
text += 'addunitrec "Slinger" 100 5 50 0 0 \n' 
text += 'addunitrec "Archer" 100 5 50 0 0 \n' 
text += 'addunitrec "Light Cavalry" 100 3 50 0 0 \n'
text += 'addunitrec "Pikeneer" 100 5 50 0 5 \n' 
text += 'addunitrec "Halberdier" 100 5 50 0 5 \n'
text += 'addunitrec "Tower Guard" 100 5 50 0 15 \n'
text += 'addunitrec "Cavalryman" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Cavalry" 100 3 50 0 20 \n'
text += 'addunitrec "Heavy Infantry" 100 5 50 0 25 \n'
text += 'addunitrec "Heavy Spearman" 100 5 50 0 25 \n'
text += 'addunitrec "Catapult" 100 1 25 0 50 \n'
text += 'addunitrec "Spearman" 5 10 70 0 0 \n' 
text += 'addunitrec "Archer" 5 10 70 0 0 \n' 

text += 'addcomrec "Court Mage" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Alchemist" 3 45 15 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "White Wizard" 0 100 100 0 \n' 
text += 'libraryrec \n'
text += 'addcomrec "Monk" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Priest" 3 45 15 0 \n' 
text += 'templerec \n'
text += 'addcomrec "Scout" 5 15 10 0 \n'
text += 'addcomrec "Captain" 10 40 10 0 \n'
text += 'addcomrec "Commander" 10 40 10 0 \n'
text += 'addcomrec "Mounted Commander" 5 40 10 0 \n'
text += 'addcomrec "Assassin" 2 80 30 0 \n'
}

if(shuffle2 === 11){
text += 'addcomrec "Oracle of Subterranean Fire" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of Subterranean Waters" 0 150 30 0 \n'
text += 'templerec \n'
text += 'addcomrec "Oracle of the Dead" 0 150 30 0 \n'
text += 'templerec \n'
}
if(shuffle2 === 9){
text += 'addcomrec "Sun Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Blood Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Sky Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Rain Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Moon Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
text += 'addcomrec "Death Temple Attendant" 3 45 20 0 \n'
text += 'templerec \n'
}
if (shuffle2 === 13){	
text += 'addmercrec "Mirror" 100 1 10 0 0\n'
text += 'addmercrec "Large Mirror" 100 1 25 0 0\n'
text += 'addmercrec "Silver Mirror" 100 1 50 0 0\n'
text += 'addmercrec "Golden Mirror" 100 1 150 0 0\n'
}
if (shuffle2 === 14){	
text += 'addunitrec "Dwarf Warrior" 100 5 0 0 30\n'
text += 'reclimiter  "=Dwarf Worker"\n'
text += 'addunitrec "Dwarf Guard" 100 5 0 0 40\n'
text += 'reclimiter  "=Dwarf Worker"\n'
}
if(shuffle2 === 15){
text += 'addcomrec "Warlock'+ illapp +'s Apprentice" 5 55 20 0 \n'
}

text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'clearstartunits  \n'
if(shuffle3 === 1){	
text += 'addstartunits "Cavalryman" 5 \n'
text += 'addstartunits "Spearman" 6 \n'
text += 'addstartunits "Archer" 5 \n'
}
if(shuffle3 === 2){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 3 && witchcheck === true){	
text += 'addstartunits "Androphag Spearman" 5 \n'
text += 'addstartunits "Androphag Archer" 5 \n'
text += 'addstartunits "Androphag Cavalry" 1 \n'
}
if(shuffle3 === 3 && witchcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}
if(shuffle3 === 4 && baalcheck === true){	
text += 'addstartunits "Ba' + illapp + 'alite Spearman" 10 \n'
text += 'addstartunits "Ba' + illapp + 'alite Archer" 5 \n'
}

if(shuffle3 === 4 && baalcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck === true){	
text += 'addstartunits "Bakemono Spearman" 15 \n'
text += 'addstartunits "Bakemono Sho" 15 \n'
text += 'addstartunits "Bakemono Bowman" 5 \n'
}

if(shuffle3 === 5 && bakemonocheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck === true){	
text += 'addstartunits "Barbarian Warrior" 15 \n'
text += 'addstartunits "Barbarian Bowman" 5 \n'
}

if(shuffle3 === 6 && barbariancheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 7 && senatorcheck === true){	
text += 'addstartunits "Velite" 10 \n'
text += 'addstartunits "Hastati" 5 \n'
}

if(shuffle3 === 7 && senatorcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 8 && paleonecheck === true){	
text += 'addstartunits "Pale One" 10 \n'
text += 'addstartunits "Pale One Soldier" 5 \n'
}

if(shuffle3 === 8 && paleonecheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 9 && druidcheck === true){	
text += 'addstartunits "Barechested Warrior" 10 \n'
text += 'addstartunits "Barechested Slinger" 5 \n'
}

if(shuffle3 === 9 && druidcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 10 && hoburgcheck ===true){	
text += 'addstartunits "Hoburg Crossbow" 10 \n'
text += 'addstartunits "Hoburg Defender" 5 \n'
text += 'addstartunits "Hoburg Soldier" 10 \n'
}

if(shuffle3 === 10 && hoburgcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 11 && priestcheck === true){	
text += 'addstartunits "Tribal Warrior" 10 \n'
text += 'addstartunits "Jungle Warrior" 10 \n'
}

if(shuffle3 === 11 && priestcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 12 && trollcheck === true){	
text += 'addstartunits "Goblin" 15 \n'
text += 'addstartunits "Rock Troll" 1 \n'
}

if(shuffle3 === 12 && trollcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 13 && elcheck === true){	
text += 'addstartunits "Spearman" 10 \n'
text += 'addstartunits "Halberdier" 8 \n'
}

if(shuffle3 === 13 && elcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck === true){	
text += 'addstartunits "Dwarf Worker" 12 \n'
text += 'addstartunits "Dwarf" 5 \n'
}

if(shuffle3 === 14 && dwarfcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 15 && homarkcheck === true){	
text += 'addstartunits "Hobmark Soldier" 10 \n'
text += 'addstartunits "Hobmark Defender" 5 \n'
text += 'addstartunits "Hobmark Crossbow" 10 \n'
}

if(shuffle3 === 15 && homarkcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 16 && dryadcheck === true){	
text += 'addstartunits "Satyr Warrior" 5 \n'
text += 'addstartunits "Satyr Javelinist" 5 \n'
text += 'addstartunits "Harpy" 1 \n'
}

if(shuffle3 === 16 && dryadcheck !== true){	
text += 'addstartunits "Swordsman" 8 \n'
text += 'addstartunits "Crossbowman" 5 \n'
}

if(shuffle3 === 17){	
text += 'addstartunits "Militia" 10 \n'
text += 'addstartunits "Slinger" 10 \n'
}
}

if(saneshuffle !== "swap"){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'
startstore = roll
startstore3 = roll

roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'
startstore2 = roll

limit = limit - 2 


if(limit <= 0){
limit = 1	
}


while (x <= limit){	
x++
coin = Math.floor(Math.random() * 2)
if(coin === 1){
roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addunitrec "' + team1_melee_empty[roll].name + '" '+ team1_melee_empty[roll].chance + ' ' +  team1_melee_empty[roll].num + ' ' + team1_melee_empty[roll].gold + ' 0 ' + team1_melee_empty[roll].iron + ' \n'
startstore3 = roll

if (team1_melee_empty[roll].name=== "Satyr"){
text += 'addunitrec "Satyr Javelinist" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Warrior" 100 5 25 0 0 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Hoplite" 100 5 25 0 15 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Steel Hoplite" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
text += 'addunitrec "Satyr Sniper" 100 5 25 0 25 \n'
text += 'reclimiter "=Satyr" \n'
}
if (team1_melee_empty[roll].name === "Centaur"){
text += 'addunitrec "Centaur Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Centaur Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centaur" \n'
text += 'addunitrec "Steel Cataphract" 100 3 25 0 50 \n'
text += 'reclimiter "=Centaur" \n'
}
if (team1_melee_empty[roll].name === "Minotaur"){
text += 'addunitrec "Minotaur Warrior" 100 3 50 0 0 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Bronze Bull" 100 3 50 0 25 \n'
text += 'reclimiter "=Minotaur" \n'
text += 'addunitrec "Steel Bull" 100 3 50 0 50 \n'
text += 'reclimiter "=Minotaur" \n'

}
if (team1_melee_empty[roll].name === "Harpy"){
text += 'addunitrec "Stymphalian Bird" 100 5 15 0 25 \n'
text += 'reclimiter "=Harpy" \n'
}
}
if(coin === 0){
roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addunitrec "' + team1_ranged_empty[roll].name + '" '+  team1_ranged_empty[roll].chance + ' ' +  team1_ranged_empty[roll].num + ' ' + team1_ranged_empty[roll].gold + ' 0 ' + team1_ranged_empty[roll].iron + ' \n'



if (team1_ranged_empty[roll].name === "Centauride"){
text += 'addunitrec "Centauride Warrior" 100 3 25 0 0 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Cataphract" 100 3 25 0 25 \n'
text += 'reclimiter "=Centauride" \n'
text += 'addunitrec "Centauride Crossbow" 100 3 25 0 50 \n'
text += 'reclimiter "=Centauride" \n'
}
}
}
while (y <= limit2){	
y++
roll = Math.floor(Math.random() * team2_empty.length)
text += 'addcomrec "' + team2_empty[roll].name + '" '+ team2_empty[roll].chance + ' ' + team2_empty[roll].gold + ' ' + team2_empty[roll].goldplus + ' ' + team2_empty[roll].iron + ' \n'

}
text += 'addcomrec "'+ mymonster +'" 5 60 30 0 \n'
text += 'clearstartunits  \n'
hasunits = 0
roll = Math.floor(Math.random() * team1_melee_empty.length)
text += 'addstartunits "' + team1_melee_empty[startstore2].name + '" '+ team1_melee_empty[startstore2].num +' \n'
hasunits += team1_melee_empty[startstore2].num

roll = Math.floor(Math.random() * team1_ranged_empty.length)
text += 'addstartunits "' + team1_ranged_empty[startstore].name + '" '+ team1_ranged_empty[startstore].num +' \n'
hasunits += team1_ranged_empty[startstore].num

if(hasunits < 9){
roll = Math.floor(Math.random() * team1_melee_empty.length)	
text += 'addstartunits "' + team1_melee_empty[startstore3].name + '" '+ team1_melee_empty[startstore3].num  +' \n'
hasunits += team1_melee_empty[startstore3].num
}
}
roll = Math.floor(Math.random() * team2_empty.length)
rit2 = document.getElementById("rit2").checked;	

if(rit2 === false){	
text += 'setmaincom "' + mymonster + '"  \n'
}
if(rit2 === true){	
text += 'setmaincom "' + mymonster2 + '"  \n'
}
text += 'addstartcom "' + team2_empty[roll].name + '"  \n'
text += 'hometerr 236 \n'
coin = Math.floor(Math.random() * 4)
text += 'clearstartterr \n'	
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
 


	 
