const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
  ally: { type: String, ref: "Allies" },
  game: { type: String, required: true, ref: 'Games' },
  hallOfGreat: { type: Number, required: true },
  description: { type: String, required: false },
  genre: { type: String, required: false },
  year: { type: Number, required: false },
  platforms: { type: String, required: false },
  metacritic: { type: String, required: false },
  votes: { type: Number, required: false },
  victory: { type: String, required: false },
  banned: { type: String, required: false, default: false },
  wonByPatreonVote: { type: String, required: false},
  image: { type: String, required: false },
  alt: { type: String, required: false },
  allyLink: { type: String, required: true },
  hallLink: { type: String, required: true },
  votingRundown: { type: String, required: true }
});

const Games = mongoose.model("Games", GamesSchema);
module.exports = Games;
