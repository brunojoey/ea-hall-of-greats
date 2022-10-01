const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamesSchema = new Schema ({
  ally: { type: String, required: true },
  game: { type: String, required: true, ref: 'Games' },
  hallOfGreat: { type: Number, required: true },
  description: { type: String, required: false },
  genre: { type: String, required: false },
  year: { type: Number, required: false },
  platforms: { type: String, required: false },
  metacritic: { type: String, required: false },
  developer: { type: String, required: false },
  publisher: { type: String, required: false },
  votes: { type: Number, required: false },
  runoffVotes: { type: Number, required: false},
  victory: { type: String, required: false },
  banned: { type: String, required: false, default: false },
  wonByPatreonVote: { type: String, required: false},
  image: { type: String, required: true },
  imageTwo: { type: String, required: false },
  alt: { type: String, required: true },
  allyLink: { type: String, required: true },
  hallLink: { type: String, required: true },
  infoLink: { type: String, required: true },
  threePointVote: { type: String, required: false },
  twoPointVote: { type: String, required: false },
  onePointVote: { type: String, required: false }
});

const Games = mongoose.model("Games", GamesSchema);
module.exports = Games;
