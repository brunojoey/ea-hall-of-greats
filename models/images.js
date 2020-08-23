const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  image: { type: Buffer, contentType: String, required: false, ref: 'Games' },
  alt: { type: String, required: false, ref: 'Games' }
});

const Images = mongoose.model("Images", ImageSchema);
module.exports = Images;
