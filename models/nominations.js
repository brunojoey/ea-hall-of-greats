const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NominationSchema = new Schema({
    nominator: { type: String, required: true },
    game: { type: String, required: false },
    hallOfGreat: { type: Number, required: true },
    votesGiven: { type: Number, required: true },
    victory: { type: Boolean, required: false },
    banned: { type: Boolean, required: false },
});

const Nominations = mongoose.model('Nominations', NominationSchema);
module.exports = Nominations;