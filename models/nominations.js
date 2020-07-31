const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NominationSchema = new Schema({
    // _id: { type: String, required: true },
    nominator: { type: String, required: true },
    game: { type: String, required: false },
    hallOfGreat: { type: Number, required: true },
    votesGiven: { type: Number, required: true },
    victory: { type: Boolean, required: false },
    banned: { type: Boolean, required: false },
    // primary_key: { _id }
});

const Nominations = mongoose.model('Nominations', NominationSchema);
module.exports = Nominations;