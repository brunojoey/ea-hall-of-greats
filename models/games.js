const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamesSchema = new Schema({
  ally: { type: String, ref: "Allies" },
  game: { type: String, required: true, ref: 'Games' },
  hallOfGreat: { type: Number, required: true },
  image: { type: Buffer, contentType: String, required: false },
  description: { type: String, required: false },
  genre: { type: String, required: false },
  year: { type: Number, required: false },
  platforms: { type: String, required: false },
  metacritic: { type: Number, required: false },
  votes: { type: Number, required: false },
  victory: { type: Boolean, required: false },
  banned: { type: Boolean, required: false, default: false },
  wonByPatreonVote: { type: Boolean, required: false}
});

const Games = mongoose.model("Games", GamesSchema);
module.exports = Games;
