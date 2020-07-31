const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AlliesSchema = new Schema({
  ally: { type: Schema.Types.ObjectId, required: true, ref: "Allies" },
  victories: { type: Number, required: false }
});

const Allies = mongoose.model("Allies", AlliesSchema);
module.exports = Allies;
