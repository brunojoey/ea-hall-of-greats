const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WinnerSchema = new Schema({
    name: { type: String, required: true },
    hallOfGreat: { type: Number, required: true },
    image: { type: Buffer, contentType: String , required: true },
    description: { type: String, required: true },
    genre: { type: String, required: false },
    year: { type: Number, required: true },
    platforms: { type: String, required: true },
    metacritic: { type: Number, required: false },
    nominatedBy: { type: String, required: true },
    votes: { type: Number, required: true }
});

const Winners = mongoose.model('Winners', WinnerSchema);
module.exports = Winners;