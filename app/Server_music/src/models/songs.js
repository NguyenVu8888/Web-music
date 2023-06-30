const mongoose = require("./db");

const Schema = mongoose.Schema;

const SongsSchema = new Schema(
  {
    nameSong: String,
    singer: String,
    sourceSong: String,
    imageSong: String,
    lyrics: String,
    listen: Number,
    production: String,
    createdAt: String,
    updatedAt: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    collection: "songs",
  }
);

const SongsModel = mongoose.model("songs", SongsSchema);

module.exports = SongsModel;
