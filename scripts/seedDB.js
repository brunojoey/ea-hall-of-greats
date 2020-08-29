const mongoose = require("mongoose");
const db = require("../models");

// This file empties the database and inserts new users and snips.
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hallOfGreatsDB",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

// Ally variables
const benMoore = "Ben Moore";
const bradEllis = "Brad Ellis";
const brandonJones = "Brandon Jones";
const danielBloodworth = "Daniel Bloodworth";
const donCasanova = "Don Casanova";
const ianHinck = "Ian Hinck";
const kyleBosman = "Kyle Bosman";
const michaelHuber = "Michael Huber";
const michaelDamiani = "Michael Damiani";
const ellisAndDamiani = bradEllis + " " + "and" + " " + michaelDamiani;

// Multiple Nominated Game Variables
const bloodBorne = "Bloodborne";
const darkSouls = "Dark Souls";
const dkTropicalFreeze = "Donkey Kong Country: Tropical Freeze";
const dq8 = "Dragon Quest VIII: Journey of the Cursed King";
const dungeonsAndDragons = "Dungeons & Dragons";
const ff7 = "Final Fantasy VII";
const ff9 = "Final Fantasy IX";
const goldenEye007 = "GoldenEye 007";
const haloOne = "Halo: Combat Evolved";
const journey = "Journey";
const lastOfUs = "The Last of Us";
const linksAwakening = `The Legend of Zelda: Link's Awakening DX`;
const megaManLegends = "Mega Man Legends";
const portal = "Portal";
const residentEvil = "Resident Evil";
const silentHillTwo = "Silent Hill 2";
const simCity4 = "Sim City 4";
const symphony = "Castlevania: Symphony of the Night";
const witcher3 = "The Witcher III: Wild Hunt";
const worldOfWarcraft = "World of Warcraft";



const imageSeed = [
  {
    image: "../images/metal_gear_solid.jpg",
    alt: "Metal Gear Solid"
  },
  {
    image: "/images/super_metroid.jpg",
    alt: "Super Metroid"
  },
  {
    image: "../images/super_mario_64.jpg",
    alt: "Super Mario 64"
  },
  {
    image: "../images/street_fighter_two.jpg",
    alt: "Street Fighter II"
  },
  {
    image: "../images/ocarina_of_time.jpg",
    alt: "The Legend of Zelda: Ocarina of Time"
  },
  {
    image: "../images/symphony_of_the_night.jpg",
    alt: "Castlevania: Symphony of the Night"
  },
  {
    image: "../images/chrono_trigger.jpg",
    alt: "Chrono Trigger"
  },
  {
    image: "../images/pokemon_red.jpg",
    alt: "Pokemon Red & Blue"
  },
  {
    image: "../images/resident_evil_four.jpg",
    alt: "Resident Evil 4"
  },
  {
    image: "../images/resident_evil_remake.jpg",
    alt: "Resident Evil Remake"
  },
  {
    image: "../images/metroid_prime.jpg",
    alt: "Metroid Prime"
  },
  {
    image: "../images/paper_mario_thousand.jpg",
    alt: "Paper Mario & The Thousand-Year Door"
  },
  {
    image: "../images/ff_six.jpg",
    alt: "Final Fantasy VI"
  },
  {
    image: "../images/tetris.jpg",
    alt: "Tetris"
  },
  {
    // _id: '5f42c68addc7798fc2321025',
    image: "../images/bloodborne.jpg",
    alt: "Bloodborne"
  },
  {
    image: "../images/portal.jpg",
    alt: "Portal"
  },
  {
    image: "../images/link_past.jpg",
    alt: "The Legend of Zelda: A Link to the Past"
  },
  {
    image: "../images/super_mario_bros_three.jpg",
    alt: "Super Mario Bros. 3"
  },
  {
    image: "../images/the_last_of_us.jpg",
    alt: "The Last of Us"
  },
  {
    image: "../images/the_witcher_three.jpg",
    alt: "The Witcher III: Wild Hunt"
  },
  {
    image: "../images/counter_strike.jpg",
    alt: "Counter-Strike"
  },
  {
    image: "../images/ff_seven.jpg",
    alt: "Final Fantasy VII"
  },
  {
    image: "../images/world_of_warcraft.jpg",
    alt: "World of Warcraft"
  },
  {
    image: "../images/doom.jpg",
    alt: "Doom (1993)"
  },
  {
    image: "../images/dk_tropical_freeze.jpg",
    alt: "Donkey Kong Country: Tropical Freeze"
  },
  {
    image: "../images/yakuza_zero.jpg",
    alt: "Yakuza 0"
  },
];

// Ally seed to compile data for all Allies.
const allySeed = [
  {
    ally: brandonJones,
    victories: 3,
    bans: 2,
  },
  {
    ally: donCasanova,
    victories: 0,
    bans: 4,
  },
  {
    ally: benMoore,
    victories: 4,
    bans: 0,
  },
  {
    ally: bradEllis,
    victories: 5,
    bans: 1,
  },
  {
    ally: michaelHuber,
    victories: 2,
    bans: 0,
  },
  {
    ally: michaelDamiani,
    victories: 5,
    bans: 2,
  },
  {
    ally: danielBloodworth,
    victories: 3,
    bans: 2,
  },
  {
    ally: ianHinck,
    victories: 2,
    bans: 2,
  },
  {
    ally: kyleBosman,
    victories: 3,
    bans: 1,
  },
];

// All data compiled for each Hall of Greats and the nominated games.
const gameSeed = [
  {
    ally: michaelDamiani,
    game: "Metal Gear Solid",
    hallOfGreat: 1,
    description:
      "You are Snake, a government agent on a mission to regain control of a secret nuclear weapons base from terrorist hands. Lightly armed and facing an army of foes, Snake must avoid firefights in order to survive. If Snake can locate them he can utilize advanced hardware, ranging from silenced pistols to ground-to-air missiles. Enemies react to sight and sound - so stay quiet and stay in the shadows. State-of-the-art graphics: textures, transparencies, models and explosions. Taut, gripping story with multiple endings - a truly cinematic experience.",
    genre: "Action-Adventure",
    year: 1998,
    platforms: "PlayStation",
    metacritic: 94,
    votes: 10,
    victory: 'True',
    banned: 'False',
    image: imageSeed[0]
  },
  {
    ally: danielBloodworth,
    game: "Super Metroid",
    hallOfGreat: 1,
    description:
      "Super Metroid is an 2D, side-scrolling action-adventure game, which primarily takes place on the fictional planet Zebes—a large, open-ended world with areas connected by doors and elevators. The player controls Samus Aran as she searches the planet for a Metroid that was stolen by Ridley, the leader of the Space Pirates.",
    genre: "Metroidvania",
    year: 1994,
    platforms: "Super NES",
    metacritic: 97,
    votes: 9,
    victory: 'True',
    wonByPatreonVote: 'True',
    banned: 'False',
    image: imageSeed[1]
  },
  {
    ally: benMoore,
    game: "Super Street Fighter II Turbo",
    hallOfGreat: 1,
    description: 'Super Turbo introduced several new gameplay mechanics not present in previous versions of Street Fighter II, including the addition of combination moves called super combos and air combos. It also introduced the secret character Akuma, who would go on to become a recurring character in later Street Fighter installments and other Capcom fighting games.',
    genre: 'Fighting',
    year: 1994,
    metacritic: 84,
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: bloodBorne,
    hallOfGreat: 1,
    description:
      "Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with uncovering its darkest secrets which will be necessary for you to survive. Armed with a singular arsenal of weaponry, including guns and saw cleavers, you'll require wits, strategy and reflexes to dispatch the agile and intelligent enemies that guard the city's underbelly. You will utility holy chalices to access an array of vast underground ruins, chock full of traps, beasts, and rewards, to explore and conquer on your own or with other people.",
    genre: "Action Role-Playing Game",
    year: 2015,
    platforms: "PlayStation 4",
    metacritic: 92,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Assassin's Creed IV: Black Flag",
    hallOfGreat: 1,
    votes: 2,
    description:
      "The year is 1715. Pirates rule the waters of the Caribbean and have established a lawless Republic. Among these outlaws is a lethal young captain named Edward Kenway. His notorious exploits earn the respect of legends like Blackbeard, but draw him into an ancient war that may destroy everything the pirates have built for themselves.",
    genre: "Action Adventure",
    year: 2015,
    platforms: "PlayStation 4, PlayStation 3, Xbox One, Xbox 360",
    metacritic: 83,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: darkSouls,
    hallOfGreat: 1,
    description:
      "Dark Souls is a brand new dark fantasy RPG designed to completely embrace the concepts of tension in dungeon exploration, fear in encountering enemies, the joy of new discoveries, and a high sense of achievement in progressing. The game is set in a dark fantasy world filled with decadent atmosphere, with a heavy emphasis on player freedom in discovering various tactics and strategies to use in weapon based combat.",
    genre: "Action Role-Playing Game",
    year: 2011,
    platforms: "PlayStation 3, Xbox 360",
    metacritic: 89,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: goldenEye007,
    hallOfGreat: 1,
    description:
      "GoldenEye 007 is a 1997 first-person shooter developed by Rare and published by Nintendo for the Nintendo 64. Based on the 1995 James Bond film GoldenEye, it features a single-player campaign in which players assume the role of British Secret Intelligence Service agent James Bond as he fights to prevent a criminal syndicate from using a satellite weapon against London to cause a global financial meltdown. The game includes a split-screen multiplayer mode in which up to four players can compete in different types of deathmatch games.",
    genre: "First-Person Shooter",
    year: 1997,
    platforms: "Nintendo 64",
    metacritic: 96,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 1,
    description:
      "Mega Man Legends is an action-adventure shooter game released by Capcom. It is the first game in the Mega Man Legends sub-series of Mega Man games from Capcom, and the second major 3D polygonal Mega Man title released in the franchise, following Mega Man: Battle & Chase.[1] It was released on the PlayStation in 1997 in Japan and in 1998 in North America. A Nintendo 64 port was released in 2000 with the same title, but it was renamed Mega Man 64 for the English release in 2001. Another port was released for Microsoft Windows in 2001, and PlayStation Portable in 2005, with the latter only in Japan.",
    genre: "Action Adventure",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 73,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: residentEvil,
    hallOfGreat: 1,
    description:
      "Raccoon City has been completely overrun by mutant beasts and bloodthirsty zombies. You are a member of S.T.A.R.S.--a rescue squad sent into the community to investigate the ominous mansion at the core of the disaster. Take the role of operative Jill Valentine or Chris Redfield and uncover the secrets behind a radical, genetic research facility. With an array of weapons to master and horrors around every corner, the ultimate test may be just to make it out alive.",
    genre: "Survival Horror",
    year: 2002,
    platforms: "Nintendo GameCube",
    metacritic: 91,
    votes: 0,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: `${bradEllis}` + ' ' + '&' + ' ' + `${michaelDamiani}`,
    game: "Super Mario 64",
    hallOfGreat: 2,
    description:
      "Mario is super in a whole new way! Combining the finest 3-D graphics ever developed for a video game and an explosive sound track, Super Mario 64 becomes a new standard for video games. It's packed with bruising battles, daunting obstacle courses and underwater adventures. Retrieve the Power Stars from their hidden locations and confront your arch nemesis - Bowser, King of the Koopas!",
    genre: "Platformer",
    year: 1996,
    platforms: "Nintendo 64",
    metacritic: 94,
    votes: 15,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Street Fighter II",
    hallOfGreat: 2,
    description:
      "A sequel to Street Fighter, Street Fighter II improved upon the many concepts introduced in the first game, including the use of command-based special moves and a six-button configuration, while offering players a selection of multiple playable characters, each with their own unique fighting style and special moves.",
    genre: "Fighting",
    year: 1992,
    platforms: "Arcade, Super NES, and many others.",
    metacritic: 82,
    votes: 14,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: symphony,
    hallOfGreat: 2,
    description:
      "As a descendant of Dracula, you must end the vampire bloodline. Can you rid the world of this unspeakable terror? Uncover the mystery of Castlevania and challenge an adventure as legendary as its name. Over 140 different enemies, bosses, and ghastly creatures. Awesome magical spells - transform into a bat, a wolf, or etheral mist. Hidden weapons, secrets, and characters...the largest Castlevania ever!",
    genre: "Metroidvania",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 93,
    votes: 12,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: dq8,
    hallOfGreat: 2,
    description:
      "The world of Dragon Quest VIII is created with breakthrough 3D graphics. The world, which includes fields, towns and dungeons, allow players to move around seamlessly. The graphics are of a high-quality animation, and players can feel as if they are walking around inside the world created by Character Designer, Akira Toriyama. The battle scenes and monsters make users feel as if they were actually facing them. All of the monsters and characters are transformed with 3D graphics.",
    genre: "Japanese Role-Playing Game",
    year: 2005,
    platforms: "PlayStation 2",
    metacritic: 89,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: linksAwakening,
    hallOfGreat: 2,
    description:
      "Link's Awakening is one of the few Zelda games not to take place in the land of Hyrule, and does not feature Princess Zelda or the Triforce relic. Instead, protagonist Link begins the game stranded on Koholint Island, a place guarded by a whale-like deity called the Wind Fish. Assuming the role of Link, the player fights monsters and solves puzzles while searching for eight musical instruments that will awaken the sleeping Wind Fish and allow him to escape from the island.",
    genre: "Action-Adventure",
    year: 1998,
    platforms: "Game Boy Color",
    metacritic: 91,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: worldOfWarcraft,
    hallOfGreat: 2,
    description:
      "World of Warcraft is a massively multiplayer online roleplaying game (MMORPG) set in the Warcraft universe. Players assume the roles of Warcraft heroes as they explore, adventure, and quest across a vast world. Being Massively Multiplayer, World of Warcraft allows thousands of players to interact within the same world. Whether adventuring together or fighting against each other in epic battles, players will form friendships, forge alliances, and compete with enemies for power and glory.",
    genre: "MMO Role-Playing Game",
    year: 2004,
    platforms: "PC",
    metacritic: 93,
    votes: 14,
    votes: 1,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: donCasanova,
    game: simCity4,
    hallOfGreat: 2,
    description:
      "PLAY GOD - Sculpt mountains, gouge valleys, seed forests, and bring forth animals to create a world imagined only by you. Summon volcanoes, release tornadoes, and call down meteors and ligthening. PLAY MAYOR - Connect a massive region of SimCities, each sharing and competing for resources. Deploy emergency vehicles and join in the action as they battle blazes, mobs, and more. PLAY WITH YOUR SIMS - Place your Sims in your city to get the inside scoop on what life's really like around town. Feel the rhythm of the city: mellow cruising and commuter hell, noontime crowds and nighttime calm.",
    genre: "Strategy City-Building",
    year: 2003,
    platforms: "PC",
    metacritic: 84,
    votes: 1,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: benMoore,
    game: "Valkyria Chronicles",
    hallOfGreat: 2,
    description:
      "Valkyria Chronicles is set in a fictitious continent reminiscent of 1930s Europe, divided in two and ruled by the Empire and the Federation. The Empire has set its sights on invading a small neutral country called Gallia, which is situated in the middle of the two great empires. The game follows a hero named Welkin and his fellow soldiers of the Federation's 7th Platoon that are fighting against the Empire, who are intent on unifying the continent under its power.",
    genre: "Strategy Role-Playing Game",
    year: 2008,
    platforms: "PlayStation 3, Nintendo Switch",
    metacritic: 86,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "The Legend of Zelda: Ocarina of Time",
    hallOfGreat: 3,
    description:
      "The Legend of Zelda: Ocarina of Time reveals the genesis of the fantasy land of Hyrule, the origin of the Triforce, and the tale of the first exploits of Princess Zelda and the heroic adventurer Link. Vibrant, real-time 3-D graphics transport you into the fantasy world of Hyrule. Your quest takes you through dense forests and across wind-whipped deserts. Swim raging rivers, climb treacherous mountains, dash on horseback across rolling hills, and delve into dungeons full of creatures that fight to the finish to put an end to your adventures. With immersive graphics, a sweeping story line, swashbuckling adventure, mind-bending puzzles, and a touch of humor, The Legend of Zelda: Ocarina of Time is one of Nintendo's most epic challenges ever.",
    genre: "Adventure",
    year: 1998,
    platforms: "Nintendo 64",
    metacritic: 99,
    votes: 16,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: symphony,
    hallOfGreat: 3,
    description:
      "As a descendant of Dracula, you must end the vampire bloodline. Can you rid the world of this unspeakable terror? Uncover the mystery of Castlevania and challenge an adventure as legendary as its name. Over 140 different enemies, bosses, and ghastly creatures. Awesome magical spells - transform into a bat, a wolf, or etheral mist. Hidden weapons, secrets, and characters...the largest Castlevania ever!",
    genre: "Metroidvania",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 93,
    votes: 11,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: ff9,
    hallOfGreat: 3,
    description: 
      'The last Final Fantasy for the PlayStation, Final Fantasy IX returns to the pure fantasy roots that spawned the series. This latest installment features highly detailed characters, vehicles, and environments, and breathtaking cinema-graphics. The addition of brand new features such as the story-enhancing Active Time Event system and the return of minigames that grant additional gameplay make Final Fantasy IX not only a memorable gaming experience, but also a significant step forward in the series.',
    genre: "Japanese Role-Playing Game",
    year: 2000,
    platforms: "PlayStation",
    metacritic: 94,
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Half-Life 2",
    hallOfGreat: 3,
    description: 
      "By taking the suspense, challenge and visceral charge of the original, and adding startling new realism and responsiveness, Half-Life 2 opens the door to a world where the player's presence affects everything around him, from the physical environment to the behaviors -- even the emotions -- of both friends and enemies. The player again picks up the crowbar of research scientist Gordon Freeman, who finds himself on an alien-infested Earth being picked to the bone, its resources depleted, its populace dwindling. Freeman is thrust into the unenviable role of rescuing the world from the wrong he unleashed back at Black Mesa. And a lot of people -- people he cares about -- are counting on him.",
    genre: "Action",
    year: 2004,
    platforms: "PC",
    metacritic: 96,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: portal,
    hallOfGreat: 3,
    description:
      "Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and offers gamers hours of unique gameplay. The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life 2's Gravity Gun innovated new ways to leverage an object in any given situation. Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space. ",
    genre: "Puzzle",
    year: 2007,
    platforms: "PC",
    metacritic: 90,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: lastOfUs,
    hallOfGreat: 3,
    description:
      "Twenty years after a pandemic radically transformed known civilization, infected humans run amuck and survivors kill one another for sustenance and weapons - literally whatever they can get their hands on. Joel, a salty survivor, is hired to smuggle a fourteen-year-old girl, Ellie, out of a rough military quarantine, but what begins as a simple job quickly turns into a brutal journey across the country.",
    genre: "Action-Adventure",
    year: 2013,
    platforms: "PlayStation 3",
    metacritic: 95,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Xenoblade Chronicles",
    hallOfGreat: 3,
    description:
      "Xenoblade Chronicles throws you into a universe bursting with imagination. Take hold of an ancient sword that offers glimpses of the future, customise your characters extensively and discover a world where your relationships with others matter.",
    genre: "Action-Adventure",
    year: 2012,
    platforms: "Nintendo Wii",
    metacritic: 92,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Jurassic Park: Operation Genesis",
    hallOfGreat: 3,
    description:
      "Now is your chance to fulfill Dr. John Hammond's dream by successfully designing and managing the ultimate dinosaur theme park. Jurassic Park: Operation Genesis allows gamers to create the most amazing theme park he world has ever seen. As the first ever fully 3D action-sim, Operation Genesis gives players two games in one. Either build the ultimate dinosaur theme park or engage in 12 action-packed missions that will truly test your gaming skills. Dream it. Build it. Survive it. This truly is Jurassic Park... your way!",
    genre: "Strategy Tycoon Management",
    year: 2003,
    platforms: "PC",
    metacritic: 72,
    votes: 2,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: bradEllis,
    game: "Doom (2016)",
    hallOfGreat: 3,
    description:
      "There is no taking cover or stopping to regenerate health in campaign mode as you beat back Hell’s raging demon hordes. Combine your arsenal of futuristic and iconic guns, upgrades, movement and an advanced melee system to knock-down, slash, stomp, crush, and blow apart demons in creative and violent ways. In multiplayer, dominate your opponents in DOOM’s signature, fast-paced arena-style combat. In both classic and all-new game modes, annihilate your enemies utilizing your personal blend of skill, powerful weapons, vertical movement, and unique power-ups that allow you to play as a demon.",
    genre: "First-Person Shooter",
    year: 2016,
    platforms: "PlayStation 4, Xbox One, Nintendo Switch, PC",
    metacritic: 85,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: bradEllis,
    game: "Chrono Trigger",
    hallOfGreat: 4,
    description:
      "When a newly developed teleportation device malfunctions at the Millennial Fair, young Crono must travel through time to rescue his unfortunate companion from an intricate web of past and present perils. The swashbuckling adventure that ensues soon unveils an evil force set to destroy the world, triggering Crono's race against time to change the course of history and bring about a brighter future.",
    genre: "Role-Playing Game",
    year: 1995,
    platforms: "Super NES",
    metacritic: 96,
    votes: 21,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: "Pokemon Red & Blue",
    hallOfGreat: 4,
    description:
      "You've finally been granted your Pokémon Trainer's license. Now, it's time to head out to become the world's greatest Pokémon Trainer. It's going to take all you've got to collect 150 Pokémon in this enormous world. Catch and train monsters like the shockingly-cute Pikachu. Face off against Blastoise's torrential water cannons. Stand strong when facing Pidgeot's stormy Gust. Trade with friends and watch your Pokémon evolve. Important—no single Pokémon can win at all. Can you develop the ultimate Pokémon strategy to defeat the eight Gym Leaders and become the greatest Pokémon Master of all time?",
    genre: "Role-Playing Game",
    year: 1998,
    platforms: "Game Boy",
    metacritic: 88,
    votes: 8,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Mega Man X",
    hallOfGreat: 4,
    description:
      "Mega Man X is an action-platform video game developed and published by Capcom for the Super Nintendo Entertainment System (SNES). It was the first Mega Man game for the 16-bit console and the first game in the Mega Man X series, a spin-off of the original Mega Man series that began on the SNES's predecessor, the Nintendo Entertainment System (NES). Mega Man X was released in Japan on December 17, 1993 and was released in both North America and Europe the following year. Taking place a century after the original Mega Man series, Mega Man X is set in a futuristic world populated by both humans and 'Reploids', robots capable of thinking, feeling, and growing like their human creators. Because of these complex attributes, many Reploids are prone to destructive, renegade activity and are thereafter referred to as 'Mavericks'. The plot of the game follows the protagonist Mega Man X, an android member of a military task force called the 'Maverick Hunters'. With the help of his partner Zero, X must thwart the plans of Sigma, a powerful Maverick leader wishing to bring about human extinction.",
    genre: "Action",
    year: 1993,
    platforms: "Super NES",
    metacritic: 97,
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Grand Theft Auto III",
    hallOfGreat: 4,
    description:
      "Players are put at the heart of their very own gangster movie, and let loose in a fully-realised 3 dimensional city with a cast of hundreds, 50 plus vehicles, ranging from sports cars to ice cream trucks and from boats to buses, 3 hours of music, including opera, reggae, house, drum and bass, pop and disco, and a huge array of street ready weapons.",
    genre: "Action-Adventure",
    year: 2001,
    platforms: "Playstation 2, Xbox",
    metacritic: 97,
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Streets of Rage 2",
    hallOfGreat: 4,
    description:
      "Axel Stone and Blaze Fielding return while the game introduces two new characters: Max 'Thunder' Hatchet and Eddie 'Skate' Hunter, the younger brother of Adam Hunter from the original game. A commercial and critical success, it is commonly regarded as the best entry in the series, the best beat 'em up game for the Mega Drive/Genesis and one of the greatest video games of all time.",
    genre: "Beat 'Em Up",
    year: 1992,
    platforms: "Sega Genesis",
    metacritic: 88,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Super Mario Maker",
    hallOfGreat: 4,
    description:
      "Play a countless number of intensely creative Super Mario levels from players around the globe. It’s easy enough to create your own levels with the Wii U GamePad controller that it may feel like you’re simply sketching out your ideas on paper, but you can now bring enemies and objects into a playable course in ways you could only consider before. Violate the conventions of traditional Super Mario gameplay by blending enemies, traps and items into unexpected twists, like Piranha Plant-shooting cannons, power-up-tossing Lakitus, or even Hammer Bros. riding on Bowser while bouncing on trampolines.",
    genre: "Platformer",
    year: 2015,
    platforms: "Nintendo WiiU",
    metacritic: 88,
    votes: 3,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: danielBloodworth,
    game: journey,
    hallOfGreat: 4,
    description:
      "Enter the world of Journey, the third game from indie developers thatgamecompany (creators of 'flOw' and 'Flower'). Journey is an interactive parable, an anonymous online adventure to experience a person’s life passage and their intersections with other’s. You wake alone and surrounded by miles of burning, sprawling desert, and soon discover the looming mountaintop which is your goal. Faced with rolling sand dunes, age-old ruins, caves and howling winds, your passage will not be an easy one. The goal is to get to the mountaintop, but the experience is discovering who you are, what this place is, and what is your purpose. Travel and explore this ancient, mysterious world alone, or with a stranger you meet along the way. Soar above ruins and glide across sands as you discover the secrets of a forgotten civilization.",
    genre: "Adventure",
    year: 2012,
    platforms: "PlayStation 3, PlayStation 4",
    metacritic: 92,
    votes: 2,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: ianHinck,
    game: "Myst",
    hallOfGreat: 4,
    description:
      "Myst is a graphic adventure puzzle video game designed by the Miller brothers, Robyn and Rand. It was developed by Cyan, Inc., published by Brøderbund, and initially released for the Macintosh personal computer platform in 1993. In the game, players travel via a special book to the island of Myst. There, players solve puzzles and, by doing so, travel to four other worlds, known as Ages, which reveal the backstory of the game's characters.",
    genre: "Adventure",
    year: 1993,
    platforms: "PC",
    metacritic: 83,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Skyrim",
    hallOfGreat: 4,
    description:
      "The next chapter in the Elder Scrolls saga arrives from the Bethesda Game Studios. Skyrim reimagines the open-world fantasy epic, bringing to life a complete virtual world open for you to explore any way you choose. Play any type of character you can imagine, and do whatever you want; the legendary freedom of choice, storytelling, and adventure of The Elder Scrolls is realized like never before. Skyrim's new game engine brings to life a complete virtual world with rolling clouds, rugged mountains, bustling cities, lush fields, and ancient dungeons. Choose from hundreds of weapons, spells, and abilities. The new character system allows you to play any way you want and define yourself through your actions. Battle ancient dragons like you've never seen. As Dragonborn, learn their secrets and harness their power for yourself.",
    genre: "Role-Playing Game",
    year: 2011,
    platforms: "Xbox 360, Xbox One, Nintendo Switch, PlayStation 3, PlayStation 4, PC",
    metacritic: 96,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: bradEllis,
    game: "Resident Evil 4",
    hallOfGreat: 5,
    description:
      "Resident Evil 4 marks a new chapter in the Resident Evil series. You'll rejoin Leon S. Kennedy six years after his first mission as a rookie cop from Resident Evil 2. Now a US agent, Leon is on a top secret mission to investigate the disappearance of the president's daughter. As Leon, you must make your way to a mysterious location in Europe, where new enemies await. Take them down by using enhanced aim-and-shoot features and a new action button.",
    genre: "Survival Horror",
    year: 2005,
    platforms: "Nintendo GameCube",
    metacritic: 96,
    votes: 13,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: residentEvil,
    hallOfGreat: 5,
    description:
      "Raccoon City has been completely overrun by mutant beasts and bloodthirsty zombies. You are a member of S.T.A.R.S.--a rescue squad sent into the community to investigate the ominous mansion at the core of the disaster. Take the role of operative Jill Valentine or Chris Redfield and uncover the secrets behind a radical, genetic research facility. With an array of weapons to master and horrors around every corner, the ultimate test may be just to make it out alive.",
    genre: "Survival Horror",
    year: 2002,
    platforms: "Nintendo GameCube",
    metacritic: 91,
    votes: 11,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: witcher3,
    hallOfGreat: 5,
    description:
      "With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format.",
    genre: "Action Role-Playing Game",
    year: 2015,
    platforms: "PlayStation 4, Xbox One, PC",
    metacritic: 92,
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: darkSouls,
    hallOfGreat: 5,
    description:
      "Dark Souls is a brand new dark fantasy RPG designed to completely embrace the concepts of tension in dungeon exploration, fear in encountering enemies, the joy of new discoveries, and a high sense of achievement in progressing. The game is set in a dark fantasy world filled with decadent atmosphere, with a heavy emphasis on player freedom in discovering various tactics and strategies to use in weapon based combat.",
    genre: "Action Role-Playing Game",
    year: 2011,
    platforms: "PlayStation 3, Xbox 360",
    metacritic: 89,
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Pandemonium",
    hallOfGreat: 5,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "Platformer",
    year: 1996,
    platforms: "PlayStation, Sega Saturn",
    metacritic: 71,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Pong",
    hallOfGreat: 5,
    description:
      "Pong is a table tennis-themed arcade video game featuring simple two-dimensional graphics, manufactured by Atari and originally released in 1972. It was one of the earliest arcade video games and created by Allan Alcorn as a training exercise assigned to him by Atari co-founder Nolan Bushnell. Bushnell based the game's concept on an electronic ping-pong game included in the Magnavox Odyssey, the first home video game console. In response, Magnavox later sued Atari for patent infringement. Bushnell and Atari co-founder Ted Dabney were surprised by the quality of Alcorn's work and decided to manufacture the game.",
    genre: "Sports",
    year: 1972,
    platforms: "Atari",
    metacritic: 0,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Shadow of the Colossus (2018)",
    hallOfGreat: 5,
    description:
      "Tales speak of an ancient realm where Colossi roam the majestic landscape. Bound to the land, these creatures hold a key to a mystical power of revival – a power you must obtain to bring a loved one back to life.",
    genre: "First-Person Shooter",
    year: 2018,
    platforms: "PlayStation 4",
    metacritic: 91,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 5,
    description:
      "Mega Man Legends is an action-adventure shooter game released by Capcom. It is the first game in the Mega Man Legends sub-series of Mega Man games from Capcom, and the second major 3D polygonal Mega Man title released in the franchise, following Mega Man: Battle & Chase.[1] It was released on the PlayStation in 1997 in Japan and in 1998 in North America. A Nintendo 64 port was released in 2000 with the same title, but it was renamed Mega Man 64 for the English release in 2001. Another port was released for Microsoft Windows in 2001, and PlayStation Portable in 2005, with the latter only in Japan.",
    genre: "Action Adventure",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 73,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: dungeonsAndDragons,
    hallOfGreat: 5,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: michaelDamiani,
    game: "Metroid Prime",
    hallOfGreat: 6,
    description:
      "Samus returns in a new mission to unravel the mystery behind the ruined walls scattered across Tallon IV. In Metroid Prime, you'll play the role of this bounty hunter and view the world through her visor, which displays information ranging from current energy levels to ammunition. Equipped with a Power Beam and Gravity Suit, you must shoot locked switches, solve puzzles, and eliminate enemies. It's up to you to explore the world and recover more power-ups and weapons, which gradually open more gameplay areas.",
    genre: "Metroidvania",
    year: 2002,
    platforms: "Nintendo GameCube",
    metacritic: 97,
    votes: 19,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Paper Mario & The Thousand-Year Door",
    hallOfGreat: 6,
    description:
      "Time passes, the pages turn… and a new chapter unfolds in an unfamiliar land! Get ready for a two-dimensional role-playing adventure for the ages as Mario returns to paper form to discover a mystery that sleeps behind an ancient, legendary portal called the Thousand-Year Door. The quest is long, the dangers many, and this time, Mario will have to make full use of his papery qualities just to survive.",
    genre: "Role-Playing Game",
    year: 2004,
    platforms: "Nintendo GameCube",
    metacritic: 87,
    votes: 12,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: silentHillTwo,
    hallOfGreat: 6,
    description:
      "Players assume the role of James, who receives a cryptic letter from his wife (who has been dead for 3 years) beckoning him to meet her in Silent Hill, a place that holds great meaning for the couple. The mystery of the letter compels him to return to the surreal horror and all-too-real danger in Silent Hill.",
    genre: "Psychological Horror",
    year: 2001,
    platforms: "PlayStation 2",
    metacritic: 89,
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: dq8,
    hallOfGreat: 6,
    description:
      "The world of Dragon Quest VIII is created with breakthrough 3D graphics. The world, which includes fields, towns and dungeons, allow players to move around seamlessly. The graphics are of a high-quality animation, and players can feel as if they are walking around inside the world created by Character Designer, Akira Toriyama. The battle scenes and monsters make users feel as if they were actually facing them. All of the monsters and characters are transformed with 3D graphics.",
    genre: "Japanese Role-Playing Game",
    year: 2005,
    platforms: "PlayStation 2",
    metacritic: 89,
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: simCity4,
    hallOfGreat: 6,
    description:
      "PLAY GOD - Sculpt mountains, gouge valleys, seed forests, and bring forth animals to create a world imagined only by you. Summon volcanoes, release tornadoes, and call down meteors and ligthening. PLAY MAYOR - Connect a massive region of SimCities, each sharing and competing for resources. Deploy emergency vehicles and join in the action as they battle blazes, mobs, and more. PLAY WITH YOUR SIMS - Place your Sims in your city to get the inside scoop on what life's really like around town. Feel the rhythm of the city: mellow cruising and commuter hell, noontime crowds and nighttime calm.",
    genre: "Strategy City-Building",
    year: 2003,
    platforms: "PC",
    metacritic: 84,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: dkTropicalFreeze,
    hallOfGreat: 6,
    description:
      "All the challenging ground-pounding, barrel-blasting, side-scrolling mine cart action from the Donkey Kong Country series is back along with a bushel of new game-play elements and features. And now, there are four playable characters! Dixie Kong is back to join the adventure as a playable character alongside Diddy Kong, and for the first time in Donkey Kong Country, bearded old hero Cranky Kong joins the adventure with his bouncy cane. Any of the three can buddy up with Donkey Kong, and each character offers a different gameplay experience. On their journey to reclaim Donkey Kong Island, Donkey Kong and his friends travel across five islands with a variety of stages that include underwater areas and frozen environments.",
    genre: "Platformer",
    year: 2014,
    platforms: "Nintendo WiiU & Nintendo Switch",
    metacritic: 86,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Grand Theft Auto V",
    hallOfGreat: 6,
    description:
      "Los Santos is a vast, sun-soaked metropolis full of self-help gurus, starlets and once-important, formerly-known-as celebrities. The city was once the envy of the Western world, but is now struggling to stay afloat in an era of economic uncertainty and reality TV. Amidst the chaos, three unique criminals plot their own chances of survival and success: Franklin, a former street gangster in search of real opportunities and serious cheddar; Michael, a professional ex-con whose retirement is a lot less rosy than he hoped it would be; and Trevor, a violent maniac driven by the chance of a cheap high and the next big score. Quickly running out of options, the crew risks it all in a sequence of daring and dangerous heists that could set them up for life.",
    genre: "Action-Adventure",
    year: 2013,
    platforms: "PlayStation 3, PlayStation 4, Xbox 360, Xbox One",
    metacritic: 97,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 6,
    description:
      "Mega Man Legends is an action-adventure shooter game released by Capcom. It is the first game in the Mega Man Legends sub-series of Mega Man games from Capcom, and the second major 3D polygonal Mega Man title released in the franchise, following Mega Man: Battle & Chase.[1] It was released on the PlayStation in 1997 in Japan and in 1998 in North America. A Nintendo 64 port was released in 2000 with the same title, but it was renamed Mega Man 64 for the English release in 2001. Another port was released for Microsoft Windows in 2001, and PlayStation Portable in 2005, with the latter only in Japan.",
    genre: "Action Adventure",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 73,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Time Crisis II",
    hallOfGreat: 6,
    description:
      "Time Crisis II is a light gun arcade game and the second installment in Namco's Time Crisis series, introducing co-operative multiplayer to the franchise. It was released in arcades in December 1997, with an enhanced port released on the PlayStation 2 in October 2001, bundled with the GunCon 2 controller (G-Con 2 in Europe). Ports for the original PlayStation and Dreamcast were in development, but were cancelled.",
    genre: "On-Rails Shooter",
    year: 1997,
    platforms: "Arcade",
    metacritic: 81,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Final Fantasy VI",
    hallOfGreat: 7,
    description:
      "Part of the Final Fantasy turn-based Japanese RPG franchise, Final Fantasy VI follows an ensemble cast of characters as they attempt to save the their steampunk/fantasy land from the repercussions of the otherworldly campaigns of Emperor Gestahl and his court jester/general Kefka, while trying to resolve their personal issues together and find meaning in their own existence through their tumultuous journey.",
    genre: "Role-Playing Game",
    year: 1994,
    platforms: "Super NES",
    metacritic: 94,
    votes: 13,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: "Tetris",
    hallOfGreat: 7,
    description:
      "Tetris is a puzzle video game for the Game Boy released in 1989. It is a portable version of Alexey Pajitnov's original Tetris and it was bundled in the North American and European releases of the Game Boy itself. It was the first game compatible with the Game Link Cable, a pack-in accessory that allowed two Game Boys to link together for multiplayer purposes.",
    genre: "Puzzle",
    year: 1989,
    platforms: "Game Boy",
    metacritic: 0,
    votes: 13,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: bloodBorne,
    hallOfGreat: 7,
    description:
      "Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with uncovering its darkest secrets which will be necessary for you to survive. Armed with a singular arsenal of weaponry, including guns and saw cleavers, you'll require wits, strategy and reflexes to dispatch the agile and intelligent enemies that guard the city's underbelly. You will utility holy chalices to access an array of vast underground ruins, chock full of traps, beasts, and rewards, to explore and conquer on your own or with other people.",
    genre: "Action Role-Playing Game",
    year: 2015,
    platforms: "PlayStation 4",
    metacritic: 92,
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Mortal Kombat (2011)",
    hallOfGreat: 7,
    description:
      "Mortal Kombat returns to consoles after a long hiatus featuring a return to the gruesome fatalities.",
    genre: "Fighting",
    year: 2011,
    platforms: "Xbox 360, PlayStation 3",
    metacritic: 86,
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: haloOne,
    hallOfGreat: 7,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Batman: Arkham City",
    hallOfGreat: 7,
    description:
      "Developed by Rocksteady Studios, Batman: Arkham City builds upon the intense, atmospheric foundation of Batman: Arkham Asylum, sending players soaring into Arkham City, the new maximum security home for all of Gotham City's thugs, gangsters and insane criminal masterminds. Set inside the heavily fortified walls of a sprawling district in the heart of Gotham City, this highly anticipated sequel introduces a brand-new story that draws together a new all-star cast of classic characters and murderous villains from the Batman universe, as well as a vast range of new and enhanced gameplay features to deliver the ultimate experience as the Dark Knight.",
    genre: "Action-Adventure",
    year: 2011,
    platforms: "Xbox 360, PlayStation 3",
    metacritic: 94,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: silentHillTwo,
    hallOfGreat: 7,
    description:
      "Players assume the role of James, who receives a cryptic letter from his wife (who has been dead for 3 years) beckoning him to meet her in Silent Hill, a place that holds great meaning for the couple. The mystery of the letter compels him to return to the surreal horror and all-too-real danger in Silent Hill.",
    genre: "Psychological Horror",
    year: 2001,
    platforms: "PlayStation 2",
    metacritic: 89,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Super Mario RPG",
    hallOfGreat: 7,
    description:
      "Super Mario RPG: Legend of the Seven Stars is a role-playing video game (RPG) developed by Square and published by Nintendo for the Super Nintendo Entertainment System in 1996. It was directed by Yoshihiko Maekawa and Chihiro Fujioka and produced by Mario creator Shigeru Miyamoto. Yoko Shimomura composed the score, which was released on a soundtrack album in Japan.",
    genre: "Role-Playing",
    year: 1996,
    platforms: "Super NES",
    metacritic: 89,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Ms. Pac-Man",
    hallOfGreat: 7,
    description:
      "Ms. Pac-Man is a 1982 maze arcade game developed by General Computer Corporation and published by Midway. It is the sequel to Pac-Man (1980), and the first entry in the series to not be made by Namco. Controlling the titular character, the player is tasked with eating all of the pellets in an enclosed maze while avoiding four colored ghosts. Eating large flashing “Power Pellets” will cause the ghosts to turn blue and flee, which can be consumed for bonus points.",
    genre: "Arcade",
    year: 1982,
    platforms: "Arcade, Atari, NES, Sega Genesis, Super NES, Game Boy",
    metacritic: 0,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: ianHinck,
    game: bloodBorne,
    hallOfGreat: 8,
    description:
      "Bloodborne is an action RPG in which you hunt for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like a disease. Peril, death and madness infest this dark world, and you're tasked with uncovering its darkest secrets which will be necessary for you to survive. Armed with a singular arsenal of weaponry, including guns and saw cleavers, you'll require wits, strategy and reflexes to dispatch the agile and intelligent enemies that guard the city's underbelly. You will utility holy chalices to access an array of vast underground ruins, chock full of traps, beasts, and rewards, to explore and conquer on your own or with other people.",
    genre: "Action Role-Playing Game",
    year: 2015,
    platforms: "PlayStation 4",
    metacritic: 92,
    votes: 13,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: portal,
    hallOfGreat: 8,
    description:
      "Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and offers gamers hours of unique gameplay. The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life 2's Gravity Gun innovated new ways to leverage an object in any given situation. Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space. ",
    genre: "Puzzle",
    year: 2007,
    platforms: "PC",
    metacritic: 90,
    votes: 11,
    victory: 'True',
    wonByPatreonVote: 'True',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: "God of War (2018)",
    hallOfGreat: 8,
    descrcription: 'His vengeance against the gods of Olympus far behind him, Kratos now lives as a man in the lands of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same. As mentor and protector to a son determined to earn his respect, Kratos is faced with an unexpected opportunity to master the rage that has long defined him. Questioning the dark lineage he’s passed on to his son, he hopes to make amends for the shortcomings of his past. Set within the untamed forests, mountains, and realms of Norse lore, God of War features a distinctly new setting with its own pantheon of creatures, monsters, and gods.',
    genre: 'Action-Adventure',
    year: 2018, 
    platforms: 'PlayStation 4',
    metacritic: 94,
    votes: 11,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: linksAwakening,
    hallOfGreat: 8,
    description:
      "Link's Awakening is one of the few Zelda games not to take place in the land of Hyrule, and does not feature Princess Zelda or the Triforce relic. Instead, protagonist Link begins the game stranded on Koholint Island, a place guarded by a whale-like deity called the Wind Fish. Assuming the role of Link, the player fights monsters and solves puzzles while searching for eight musical instruments that will awaken the sleeping Wind Fish and allow him to escape from the island.",
    genre: "Action-Adventure",
    year: 1998,
    platforms: "Game Boy Color",
    metacritic: 91,
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Trials Fusion",
    hallOfGreat: 8,
    description:
      "Trials Fusion melds the classic, proven Trials formula of simple yet addictive competition with the social and visual breakthroughs of the next generation of gaming.",
    genre: "Racing",
    year: 2014,
    platforms: "PlayStation 4, Xbox 360, Xbox One",
    metacritic: 79,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: lastOfUs,
    hallOfGreat: 8,
    description:
      "Twenty years after a pandemic radically transformed known civilization, infected humans run amuck and survivors kill one another for sustenance and weapons - literally whatever they can get their hands on. Joel, a salty survivor, is hired to smuggle a fourteen-year-old girl, Ellie, out of a rough military quarantine, but what begins as a simple job quickly turns into a brutal journey across the country.",
    genre: "Action-Adventure",
    year: 2013,
    platforms: "PlayStation 3",
    metacritic: 95,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Pikmin",
    hallOfGreat: 8,
    description:
      "Pikmin may be small and plantlike, but they can be a space traveler's best friend. Stranded on an unknown planet, Captain Olimar must enlist the help of these native Pikmin to rebuild his spaceship before the life-support system runs out. In the meantime, you'll have to fend off attackers and solve various puzzles. To produce additional multicolored Pikmin you must defeat enemies and carry them back to the Pikmin nests called onions. But beware--watching giant predators gobble your Pikmin might make you angrier than you'd expect.",
    genre: "Strategy",
    year: 2001,
    platforms: "Nintendo GameCube",
    metacritic: 89,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Deus Ex",
    hallOfGreat: 8,
    description:
      "The game that incorporates RPG, action, adventure, and 1st-person shooter genres into a chaotic blend of real-world conspiracies, cliffhangers, and plot twists. A richly simulated world of unparalleled interactivity, engineered to react logically to your every action. The decisions and consequences are yours.",
    genre: "Action-Adventure",
    year: 2000,
    platforms: "PC",
    metacritic: 90,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: michaelDamiani,
    game: "FTL: Faster Than Light",
    hallOfGreat: 8,
    description:
      "You manage the Kestrel and its crew as you explore the galaxy. Strategic, real-time combat involves managing power between essential systems and choosing which enemy systems to target. Meanwhile, you control your crew to keep the ship functioning and fight off intruders. The combat is difficult but, being a roguelike-like game, frequent permadeath is at the core of the experience.",
    genre: "Sci-Fi Simulation",
    year: 2012,
    platforms: "PC",
    metacritic: 84,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: michaelDamiani,
    game: "The Legend of Zelda: A Link to the Past",
    hallOfGreat: 9,
    description:
      "A top-down action/adventure title in which Link, a blacksmith's nephew living in the fantastical land of Hyrule, must free the land from the evildoings of Ganon by taking up the mythical Master Sword and collecting the three Triforces in order to free the Seven Maidens, including the princess of Hyrule, Zelda, from the dungeons and castles of the Dark World.",
    genre: "Action-Adventure",
    year: 1991,
    platforms: "Super NES",
    metacritic: 92,
    votes: 13,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: "Super Mario Bros. 3",
    hallOfGreat: 9,
    description:
      "Your mission is to rescue the Mushroom Kingdom monarchs who have been transformed into animals by Bowser and his mischievous offspring, and in the process save the princess kidnapped by Bowser.",
    genre: "Platformer",
    year: 1988,
    platforms: "NES",
    metacritic: 97,
    votes: 12,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: ff9,
    hallOfGreat: 9,
    description: 
      'The last Final Fantasy for the PlayStation, Final Fantasy IX returns to the pure fantasy roots that spawned the series. This latest installment features highly detailed characters, vehicles, and environments, and breathtaking cinema-graphics. The addition of brand new features such as the story-enhancing Active Time Event system and the return of minigames that grant additional gameplay make Final Fantasy IX not only a memorable gaming experience, but also a significant step forward in the series.',
    genre: "Japanese Role-Playing Game",
    year: 2000,
    platforms: "PlayStation",
    metacritic: 94,
    votes: 11,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: "The Legend of Zelda: Twilight Princess",
    hallOfGreat: 9,
    description:
      "In the next chapter in the Legend of Zelda series, Link can transform into a wolf to scour the darkened land of Hyrule. With the help of Midna, a mysterious being, you must guide Link through hordes of foul creatures and challenging bosses using new moves and a new horseback combat system. Many puzzles stand between Link and the fulfillment of his quest, so you must sharpen your wits as you hunt for weapons and items.",
    genre: "Action-Adventure",
    year: 2006,
    platforms: "Nintendo GameCube, Nintendo Wii",
    metacritic: 96,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Wave Race 64",
    hallOfGreat: 9,
    description:
      "Wave Race 64 is sure to provide some of the most exciting racing you've ever experienced. Feel the pounding and crashing of the waves as you accelerate into straight-aways, whip around the marker buoys and go airborne on the jump ramps. Don't race alone - challenge a friend! Take control in three different modes of play - Championship, Time Trials and Stunt Mode. Nine challenging courses set in exotic locales - race conditions change and the wave action responds to the way both you and your opponents race!",
    genre: "Racing",
    year: 1996,
    platforms: "Nintendo 64",
    metacritic: 92,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Sekiro: Shadows Die Twice",
    hallOfGreat: 9,
    description:
      "Your death won’t come easily. Enter the world of late 1500s Sengoku Japan; a brutal, bloody period of constant life-and-death conflict. As tensions rise, a compelling new story unfolds amongst the chaos. Introducing Sekiro: Shadows Die Twice, a dark and twisted new gameplay experience developed by the renowned team at FromSoftware and published by Activision. Directed by Hidetaka Miyazaki, Sekiro: Shadows Die Twice is a third-person, action-adventure game with RPG elements. The single-player game puts players in the protagonist role of a hard-hearted warrior whose mission is to rescue his master, a young lord, and exact revenge on his arch nemesis. As “Sekiro,” or the “one-armed wolf,” players discover the many ways to strategically approach combat and engage enemies.",
    genre: "Action-Adventure",
    year: 2019,
    platforms: "PlayStation 4, Xbox One",
    metacritic: 90,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: goldenEye007,
    hallOfGreat: 9,
    description:
      "GoldenEye 007 is a 1997 first-person shooter developed by Rare and published by Nintendo for the Nintendo 64. Based on the 1995 James Bond film GoldenEye, it features a single-player campaign in which players assume the role of British Secret Intelligence Service agent James Bond as he fights to prevent a criminal syndicate from using a satellite weapon against London to cause a global financial meltdown. The game includes a split-screen multiplayer mode in which up to four players can compete in different types of deathmatch games.",
    genre: "First-Person Shooter",
    year: 1997,
    platforms: "Nintendo 64",
    metacritic: 96,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: ianHinck,
    game: "Dark Souls Remastered",
    hallOfGreat: 9,
    description:
      "Embark upon an epic dark fantasy in a universe stricken by decline and the Curse. Explore its intricate world design - full of hidden passages, dungeons and secrets - and uncover its deeply rooted lore.",
    genre: "Action Role-Playing Game",
    year: 2018,
    platforms: "PlayStation 4, Nintendo Switch, Xbox One",
    metacritic: 84,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: michaelHuber,
    game: lastOfUs,
    hallOfGreat: 10,
    description:
      "Twenty years after a pandemic radically transformed known civilization, infected humans run amuck and survivors kill one another for sustenance and weapons - literally whatever they can get their hands on. Joel, a salty survivor, is hired to smuggle a fourteen-year-old girl, Ellie, out of a rough military quarantine, but what begins as a simple job quickly turns into a brutal journey across the country.",
    genre: "Action-Adventure",
    year: 2013,
    platforms: "PlayStation 3",
    metacritic: 95,
    votes: 8,
    victory: 'True',
    wonByPatreonVote: 'True',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: witcher3,
    hallOfGreat: 10,
    description:
      "With the Empire attacking the Kingdoms of the North and the Wild Hunt, a cavalcade of ghastly riders, breathing down your neck, the only way to survive is to fight back. As Geralt of Rivia, a master swordsman and monster hunter, leave none of your enemies standing. Explore a gigantic open world, slay beasts and decide the fates of whole communities with your actions, all in a genuine next generation format.",
    genre: "Action Role-Playing Game",
    year: 2015,
    platforms: "PlayStation 4, Xbox One, PC",
    metacritic: 92,
    votes: 8,
    victory: 'True',
    wonByPatreonVote: 'True',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Phantasy Star Online",
    hallOfGreat: 10,
    description:
      "Pioneer 2 finally completed it's long voyage to the new home world. But as the ship entered orbit, an enormous explosion shook the entire planet, and all contact with the thousands of people already there was lost. Now, in the first worldwide online console RPG, players from around the globe must unite to discover what has happened. Phantasy Star Online continues in the tradition of one of the most popular series of all time, and becomes a revolutionary and truly global gaming experience in an online, persistent world.",
    genre: "MMO Role-Playing Game",
    year: 2001,
    platforms: "Sega Dreamcast, Nintendo GameCube",
    metacritic: 89,
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: haloOne,
    hallOfGreat: 10,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "BioShock",
    hallOfGreat: 10,
    description: 'Going beyond "run and gun corridors," "monster-closet AIs" and static worlds, BioShock creates a living, unique and unpredictable FPS experience. After your plane crashes into icy uncharted waters, you discover a rusted bathysphere and descend into Rapture, a city hidden beneath the sea. Constructed as an idealistic society for a hand picked group of scientists, artists and industrialists, the idealism is no more.',
    genre: 'Action',
    year: 2007,
    platforms: 'PlayStation 3, Xbox 360',
    metacritic: 96,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Burnout 3: Takedown",
    hallOfGreat: 10,
    description:
      "Burnout 3 takes the hit series even further, now featuring a unique crash and burn racing concept and a one-of-a-kind special effects engine that delivers spectacular visuals. The intensity heats up as players race, and often crash, their way through oncoming traffic in an attempt to claim the top spot. Boasting multiple single-player, multiplayer and online crash and race modes, Burnout 3 offers players the opportunity to race through busy city streets and be rewarded for taking risks that result in heart-pounding action and electrifying crashes.",
    genre: "Racing",
    year: 2004,
    platforms: "PlayStation 2, Xbox",
    metacritic: 93,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: ff7,
    hallOfGreat: 10,
    description:
      "What begins as a rebellion against an evil corporation becomes much more. And what erupts goes beyond imagination. With vivid landscapes, lush 3D animation and environments, Square Soft's multi-million dollar masterpiece is like nothing ever seen before.",
    genre: "Role-Playing Game",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 92,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Counter-Strike",
    hallOfGreat: 11,
    description:
      "Play the world's number 1 online action game. Engage in an incredibly realistic brand of terrorist warfare in this wildly popular team-based game. Ally with teammates to complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects your team's success. Your team's success affects your role.",
    genre: "First-Person Shooter",
    year: 2000,
    platforms: "PC",
    metacritic: 88,
    votes: 15,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: ff7,
    hallOfGreat: 11,
    description:
      "What begins as a rebellion against an evil corporation becomes much more. And what erupts goes beyond imagination. With vivid landscapes, lush 3D animation and environments, Square Soft's multi-million dollar masterpiece is like nothing ever seen before.",
    genre: "Role-Playing Game",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 92,
    votes: 13,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Alien vs. Predator",
    hallOfGreat: 11,
    description:
      "Alien vs. Predator is a 1994 beat 'em up video game developed and released by Capcom for the CPS-2 arcade game system. It is based on the science fiction franchise of the same name. In the game, the players take control of up to three out of four cyborg and Predator characters in a battle against the Alien hordes and rogue human soldiers. The game was very well-received by the public and by media publications, becoming a classic title for many fans of the beat 'em up genre.",
    genre: "Beat 'Em Up",
    year: 1994,
    platforms: "Arcade",
    metacritic: 0,
    votes: 12,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Animal Crossing",
    hallOfGreat: 11,
    description:
      "Animal Crossing allows you to interact with a virtual village of animals that are doing something different every minute of every day. With Animal Crossing's 24-hour clock, the game's unique events can be in synch with real time--as day turns to night in the real world, the sun will also begin to set in the game. The dynamic setup requires you to come back every day and carry out your daily routines, build relationships with villagers, celebrate special days, collect furnishings for your homes, and just live life in the unique world of Animal Crossing. ",
    genre: "Life Simulation",
    year: 2002,
    platforms: "Nintendo GameCube",
    metacritic: 87,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Marvel's Spider-Man",
    hallOfGreat: 11,
    description:
      "This isn't the Spider-Man you've known before, or seen in a movie. This is an experienced Peter Parker who is more masterful in fighting major crimes in New York City. At the same time he is struggling to balance his tumultuous personal life and career while the fate of nine million New Yorkers rests upon his shoulders.",
    genre: "Action-Adventure",
    year: 2018,
    platforms: "PlayStation 4",
    metacritic: 87,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: "Metal Gear Solid 3: Snake Eater",
    hallOfGreat: 11,
    description:
      "In the struggle to achieve world peace and world dominance, rivaling governments are secretly developing weapons technology that could threaten the future existence of life. Destined to be the first, a race ensues to become the ultimate nation. A special elite tactical soldier is summoned to penetrate deep in the heart of enemy territory and obtain intel about Metal Gear, a prototype weapon with nuclear capabilities. This is your mission and you must infiltrate alone. Interactive environments where traps catch enemies and prey. Rely on camouflage, combat, hunting and instincts to survive. Set in the 1960s where politics and war are shaping real world history. Blockbuster musical score composed by Harry Gregson-Williams.",
    genre: "Action-Adventure",
    year: 2004,
    platforms: "PlayStation 2",
    metacritic: 91,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Plants vs. Zombies",
    hallOfGreat: 11,
    description:
      "Zombies are invading your home, and the only defense is your arsenal of plants! Armed with an alien nursery-worth of zombie-zapping plants like peashooters and cherry bombs, you'll need to think fast and plant faster to stop dozens of types of zombies dead in their tracks. Obstacles like a setting sun, creeping fog and a swimming pool add to the challenge, and with five game modes to dig into, the fun never dies!",
    genre: "Strategy",
    year: 2009,
    platforms: "PC, PlayStation 3, Xbox 360, iPad",
    metacritic: 97,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: dungeonsAndDragons,
    hallOfGreat: 11,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: brandonJones,
    game: worldOfWarcraft,
    hallOfGreat: 12,
    description:
      "World of Warcraft is a massively multiplayer online roleplaying game (MMORPG) set in the Warcraft universe. Players assume the roles of Warcraft heroes as they explore, adventure, and quest across a vast world. Being Massively Multiplayer, World of Warcraft allows thousands of players to interact within the same world. Whether adventuring together or fighting against each other in epic battles, players will form friendships, forge alliances, and compete with enemies for power and glory.",
    genre: "MMO Role-Playing Game",
    year: 2004,
    platforms: "PC",
    metacritic: 93,
    votes: 14,
    victory: 'True',
    banned: 'False',
    image: imageSeed[22]
  },
  {
    ally: benMoore,
    game: "Doom (1993)",
    hallOfGreat: 12,
    description:
      "Things aren't looking too good. You'll never navigate off the planet on your own. Plus, all the heavy weapons have been taken by the assault team leaving you with only a pistol. If you only could get your hands around a plasma rifle or even a shotgun you could take a few down on your way out. Whatever killed your buddies deserves a couple of pellets in the forehead. Securing your helmet, you exit the landing pod. Hopefully you can find more substantial firepower somewhere within the station. As you walk through the main entrance of the base, you hear animal-like growls echoing through the distant corridors. They know you're here. There's no turning back now.",
    genre: "First-Person Shooter",
    year: 1993,
    platforms: "PC",
    metacritic: 91,
    votes: 11,
    victory: 'True',
    banned: 'False',
    image: imageSeed[23]
  },
  {
    ally: michaelHuber,
    game: "Super Smash Bros. Ultimate",
    hallOfGreat: 12,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 12,
    description:
      "Mega Man Legends is an action-adventure shooter game released by Capcom. It is the first game in the Mega Man Legends sub-series of Mega Man games from Capcom, and the second major 3D polygonal Mega Man title released in the franchise, following Mega Man: Battle & Chase.[1] It was released on the PlayStation in 1997 in Japan and in 1998 in North America. A Nintendo 64 port was released in 2000 with the same title, but it was renamed Mega Man 64 for the English release in 2001. Another port was released for Microsoft Windows in 2001, and PlayStation Portable in 2005, with the latter only in Japan.",
    genre: "Action Adventure",
    year: 1997,
    platforms: "PlayStation",
    metacritic: 73,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: "Shovel Knight: Treasure Trove",
    hallOfGreat: 12,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Teenage Mutant Ninja Turtles: Turtles in Time",
    hallOfGreat: 12,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: silentHillTwo,
    hallOfGreat: 12,
    description:
      "Players assume the role of James, who receives a cryptic letter from his wife (who has been dead for 3 years) beckoning him to meet her in Silent Hill, a place that holds great meaning for the couple. The mystery of the letter compels him to return to the surreal horror and all-too-real danger in Silent Hill.",
    genre: "Psychological Horror",
    year: 2001,
    platforms: "PlayStation 2",
    metacritic: 89,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Guitar Hero II",
    hallOfGreat: 12,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: dkTropicalFreeze,
    hallOfGreat: 13,
    description:
      "All the challenging ground-pounding, barrel-blasting, side-scrolling mine cart action from the Donkey Kong Country series is back along with a bushel of new game-play elements and features. And now, there are four playable characters! Dixie Kong is back to join the adventure as a playable character alongside Diddy Kong, and for the first time in Donkey Kong Country, bearded old hero Cranky Kong joins the adventure with his bouncy cane. Any of the three can buddy up with Donkey Kong, and each character offers a different gameplay experience. On their journey to reclaim Donkey Kong Island, Donkey Kong and his friends travel across five islands with a variety of stages that include underwater areas and frozen environments.",
    genre: "Platformer",
    year: 2014,
    platforms: "Nintendo WiiU & Nintendo Switch",
    metacritic: 86,
    votes: 14,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Yakuza 0",
    hallOfGreat: 13,
    description:
      "Tokyo 1988. Getting rich is easy, the women are beautiful, and everyone wants in on the action. It's time to become Yakuza. The glitz, glamour, and unbridled decadence of the 80s are back in Yakuza 0! Fight like hell through Tokyo and Osaka with protagonist Kazuma Kiryu and series regular Goro Majima. Play as Kazuma Kiryu and discover how he finds himself in a world of trouble when a simple debt collection goes wrong and his mark winds up murdered. Then, step into the silver-toed shoes of Goro Majima and explore his normal life as the proprietor of a cabaret club.",
    genre: "Action-Adventure",
    year: 2017,
    platforms: "PlayStation 4, Xbox One, PC",
    metacritic: 85,
    votes: 12,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Bayonetta",
    hallOfGreat: 13,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: journey,
    hallOfGreat: 13,
    description:
      "Enter the world of Journey, the third game from indie developers thatgamecompany (creators of 'flOw' and 'Flower'). Journey is an interactive parable, an anonymous online adventure to experience a person’s life passage and their intersections with other’s. You wake alone and surrounded by miles of burning, sprawling desert, and soon discover the looming mountaintop which is your goal. Faced with rolling sand dunes, age-old ruins, caves and howling winds, your passage will not be an easy one. The goal is to get to the mountaintop, but the experience is discovering who you are, what this place is, and what is your purpose. Travel and explore this ancient, mysterious world alone, or with a stranger you meet along the way. Soar above ruins and glide across sands as you discover the secrets of a forgotten civilization.",
    genre: "Adventure",
    year: 2012,
    platforms: "PlayStation 3, PlayStation 4",
    metacritic: 92,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Katamari Damacy",
    hallOfGreat: 13,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Metal Gear Rising: Revengeance",
    hallOfGreat: 13,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: "The Stanley Parable",
    hallOfGreat: 13,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Huntdown",
    hallOfGreat: 13,
    description:
      "Enter the mysterious world of Halo, an alien planet shaped like a ring. As mankind's super soldier Master Chief, you must uncover the secrets of Halo and fend off the attacking Covenant. During your missions, you'll battle on foot, in vehicles, inside, and outside with alien and human weaponry. Your objectives include attacking enemy outposts, raiding underground labs for advanced technology, rescuing fallen comrades, and sniping enemy forces. Halo also lets you battle three other players via intense split screen combat or fight cooperatively with a friend through the single-player missions.",
    genre: "First-Person Shooter",
    year: 2001,
    platforms: "Xbox",
    metacritic: 97,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
];

db.Allies.deleteMany({})
  .then(() => db.Allies.collection.insertMany(allySeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Games.deleteMany({})
  .then(() => db.Games.collection.insertMany(gameSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

db.Images.deleteMany({})
  .then(() => db.Images.collection.insertMany(imageSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });