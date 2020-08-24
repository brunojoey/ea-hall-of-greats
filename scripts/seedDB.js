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
    image: "../images/super_metroid.jpg",
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
    platforms: "PlayStation One",
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
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: bloodBorne,
    hallOfGreat: 1,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Assassin's Creed IV: Black Flag",
    hallOfGreat: 1,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: darkSouls,
    hallOfGreat: 1,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: goldenEye007,
    hallOfGreat: 1,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 1,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: residentEvil,
    hallOfGreat: 1,
    votes: 0,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ellisAndDamiani,
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
    votes: 12,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: dq8,
    hallOfGreat: 2,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: linksAwakening,
    hallOfGreat: 2,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: worldOfWarcraft,
    hallOfGreat: 2,
    votes: 1,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: donCasanova,
    game: simCity4,
    hallOfGreat: 2,
    votes: 1,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: benMoore,
    game: "Valkyria Chronicles",
    hallOfGreat: 2,
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
    platforms: "PlayStation One",
    metacritic: 93,
    votes: 11,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: ff9,
    hallOfGreat: 3,
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Half-Life 2",
    hallOfGreat: 3,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: portal,
    hallOfGreat: 3,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: lastOfUs,
    hallOfGreat: 3,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Xenoblade Chronicles",
    hallOfGreat: 3,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Jurassic Park: Operation Genesis",
    hallOfGreat: 3,
    votes: 2,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: bradEllis,
    game: "Doom (2016)",
    hallOfGreat: 3,
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
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Grand Theft Auto III",
    hallOfGreat: 4,
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Streets of Rage 2",
    hallOfGreat: 4,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Super Mario Maker",
    hallOfGreat: 4,
    votes: 3,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: danielBloodworth,
    game: journey,
    hallOfGreat: 4,
    votes: 2,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: ianHinck,
    game: "Myst",
    hallOfGreat: 4,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Skyrim",
    hallOfGreat: 4,
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
    platforms: "Nintendo Gamecube",
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
    platforms: "Nintendo Gamecube",
    metacritic: 91,
    votes: 11,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: witcher3,
    hallOfGreat: 5,
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: darkSouls,
    hallOfGreat: 5,
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Pandemonium",
    hallOfGreat: 5,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Pong",
    hallOfGreat: 5,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Shadow of the Colossus (2018)",
    hallOfGreat: 5,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 5,
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
    platforms: "Nintendo Gamecube",
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
    platforms: "Nintendo Gamecube",
    metacritic: 87,
    votes: 12,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: silentHillTwo,
    hallOfGreat: 6,
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: dq8,
    hallOfGreat: 6,
    votes: 7,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: simCity4,
    hallOfGreat: 6,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: dkTropicalFreeze,
    hallOfGreat: 6,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Grand Theft Auto V",
    hallOfGreat: 6,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 6,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Time Crisis 2",
    hallOfGreat: 6,
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
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Mortal Kombat (2011)",
    hallOfGreat: 7,
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: haloOne,
    hallOfGreat: 7,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Batman: Arkham City",
    hallOfGreat: 7,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: silentHillTwo,
    hallOfGreat: 7,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Super Mario RPG",
    hallOfGreat: 7,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Ms. Pac-Man",
    hallOfGreat: 7,
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
    votes: 11,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: linksAwakening,
    hallOfGreat: 8,
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Trials Fusion",
    hallOfGreat: 8,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: lastOfUs,
    hallOfGreat: 8,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: benMoore,
    game: "Pikmin",
    hallOfGreat: 8,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Deus Ex",
    hallOfGreat: 8,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: michaelDamiani,
    game: "FTL: Faster Than Light",
    hallOfGreat: 8,
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
    votes: 11,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: "The Legend of Zelda: Twilight Princess",
    hallOfGreat: 9,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "WaveRace 64",
    hallOfGreat: 9,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Sekiro: Shadows Die Twice",
    hallOfGreat: 9,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: goldenEye007,
    hallOfGreat: 9,
    votes: 0,
    victory: 'False',
    banned: 'True',
  },
  {
    ally: ianHinck,
    game: "Dark Souls: Remastered",
    hallOfGreat: 9,
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
    votes: 8,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: haloOne,
    hallOfGreat: 10,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "BioShock",
    hallOfGreat: 10,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Burnout 3: Takedown",
    hallOfGreat: 10,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: ff7,
    hallOfGreat: 10,
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
    platforms: "PlayStation One",
    metacritic: 92,
    votes: 13,
    victory: 'True',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Alien Vs. Predator",
    hallOfGreat: 11,
    votes: 12,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Animal Crossing",
    hallOfGreat: 11,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelHuber,
    game: "Marvel's Spider-Man",
    hallOfGreat: 11,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: "Metal Gear Solid 3: Snake Eater",
    hallOfGreat: 11,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: "Plants vs. Zombies",
    hallOfGreat: 11,
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
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: kyleBosman,
    game: megaManLegends,
    hallOfGreat: 12,
    votes: 5,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: bradEllis,
    game: "Shovel Knight: Treasure Trove",
    hallOfGreat: 12,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Teenage Mutant Ninja Turtles: Turtles in Time",
    hallOfGreat: 12,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: silentHillTwo,
    hallOfGreat: 12,
    votes: 3,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Guitar Hero II",
    hallOfGreat: 12,
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
    platforms: "Nintendo Wii U & Nintendo Switch",
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
    votes: 9,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: brandonJones,
    game: journey,
    hallOfGreat: 13,
    votes: 6,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: danielBloodworth,
    game: "Katamari Damacy",
    hallOfGreat: 13,
    votes: 4,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: michaelDamiani,
    game: "Metal Gear Rising: Revengeance",
    hallOfGreat: 13,
    votes: 2,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: ianHinck,
    game: "The Stanley Parable",
    hallOfGreat: 13,
    votes: 1,
    victory: 'False',
    banned: 'False',
  },
  {
    ally: donCasanova,
    game: "Huntdown",
    hallOfGreat: 13,
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